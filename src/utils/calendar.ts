import dayjs from "dayjs";

export interface DayType {
  type: "wedding" | "saturday" | "sunday" | "none";
  date: string | null;
}

export type WeekType = DayType[];

export interface Month_Type {
  id: string;
  year: number;
  month: number;
}

export const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

export function getMonths(fromYear: number, toYear: number) {
  const months: Month_Type[] = [];
  let targetYear = fromYear;

  while (targetYear < toYear) {
    for (let i = 1; i <= 12; i++) {
      months.push({
        id: `${targetYear}-${i <= 9 ? "0" : ""}${i}`,
        year: targetYear,
        month: i,
      });
    }
    targetYear++;
  }

  return months;
}

export function getMonth(date: Date | string) {
  const DATE_FORMAT = "YYYY-MM-DD";
  const targetMonth = dayjs(date).month();

  const month: WeekType[] = [];
  let calcDate = dayjs(date).startOf("month");

  do {
    const week: WeekType = [];
    for (let i = 0; i < 7; i++) {
      const day: DayType = {
        type: "none",
        date: null,
      };
      const isTargetDay = i === calcDate.day();
      const isTargetMonth = calcDate.month() === targetMonth;

      if (isTargetDay && isTargetMonth) {
        const targetDate = calcDate.clone().format(DATE_FORMAT);
        // 날짜 데이터
        day.date = targetDate;
        // 타입 지정
        if (targetDate === date) {
          day.type = "wedding";
        } else if (i === 6) {
          day.type = "saturday";
        } else if (i === 0) {
          day.type = "sunday";
        }
        week.push(day);
        calcDate = calcDate.add(1, "day");
      } else {
        week.push(day);
      }
    }
    month.push(week);
  } while (calcDate.month() === targetMonth);

  return month;
}
