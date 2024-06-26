import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { useCountUp } from "react-countup";
import { useTheme } from "@emotion/react";
import { motion, useAnimationControls } from "framer-motion";
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
  const controls = useAnimationControls();

  const countUpRef = useRef(null);

  const dDay = dayjs().diff(dayjs(date), "days");
  const active = mainIndex === 2;

  const [init, setInit] = useState(false);

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
    if (init) return;
    if (active) {
      controls.start({ y: [50, 0], opacity: [0, 1] });
      setInit(true);
    }
  }, [active]);

  return (
    <Container style={style}>
      <DayOfWeek>
        {dayOfWeek.map((day, i) => (
          <motion.div
            key={i}
            animate={controls}
            transition={{ duration: 0.1 * (i + 1) }}
          >
            <div
              style={{
                color:
                  i === 0
                    ? theme.colors.beige
                    : i === 6
                    ? theme.colors.blue
                    : undefined,
              }}
            >
              {day}
            </div>
          </motion.div>
        ))}
      </DayOfWeek>
      {weeks.map((week, weekIndex) => (
        <Week key={weekIndex}>
          {week.map(({ date, type }, dayIndex) => {
            const isWeddingDay = type === "wedding";
            return (
              <Day
                key={`${date}${dayIndex}`}
                animate={controls}
                transition={{ duration: 0.1 * (dayIndex + 1) }}
              >
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
  padding: 28px 0;
`;

const DayOfWeek = styled.div`
  display: flex;
  align-items: flex-start;
  height: 32px;

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

const Day = styled(motion.div)`
  flex: 1;
  height: 26px;
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
