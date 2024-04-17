import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { useCountUp } from "react-countup";
import { useTheme } from "@emotion/react";
// store
import { useAtomValue } from "jotai";
import { mainIndexAtom } from "../index";
// utils
import { dayOfWeek, getMonth } from "@/utils/calendar";

interface Props {
  date: string;
  style?: React.CSSProperties;
}
export default function Calendar({ date, style }: Props) {
  const theme = useTheme();
  const mainIndex = useAtomValue(mainIndexAtom);
  const active = mainIndex === 2;

  const countUpRef = useRef(null);
  const dDay = dayjs().diff(dayjs(date), "days");
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: Math.abs(dDay),
  });

  const weeks = getMonth(date);

  const dateColor = {
    saturday: theme.colors.blue,
    sunday: theme.colors.beige,
    wedding: theme.colors.white,
    none: theme.colors.gray700,
  };

  useEffect(() => {
    start();
  }, [active]);

  return (
    <Container style={style}>
      <DayOfWeek>
        {dayOfWeek.map((day, i) => (
          <div key={i}>
            <div>{day}</div>
          </div>
        ))}
      </DayOfWeek>
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex}>
          {week.map(({ date, type }, dayIndex) => {
            const isWeddingDay = type === "wedding";
            return (
              <Day key={`${date}${dayIndex}`}>
                <span style={{ color: dateColor[type] }}>
                  {date ? dayjs(date).date() : ""}
                </span>
                {isWeddingDay && <WeddingDayBackground />}
                {isWeddingDay && (
                  <DDay>
                    D{dDay > 0 ? "+" : "-"}
                    <span ref={countUpRef} />
                  </DDay>
                )}
              </Day>
            );
          })}
        </Week>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 32px;
`;

const DayOfWeek = styled.div`
  display: flex;
  align-items: flex-start;
  height: 36px;

  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Week = styled.div`
  display: flex;
  align-items: center;
`;

const Day = styled.div`
  flex: 1;
  height: 42px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  & > span {
    z-index: 1;
  }
`;

const WeddingDayBackground = styled.div`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 99px;
  opacity: 0.8;
`;

const DDay = styled.div`
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.beige};

  & > span {
    color: ${({ theme }) => theme.colors.beige};
  }
`;
