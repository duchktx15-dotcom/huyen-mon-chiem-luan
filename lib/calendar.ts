import { Solar, Lunar } from "lunar-javascript";
import { CalendarResult } from "./types";

export function convertCalendar(
  birthDate: string,
  birthTime: string
): CalendarResult {

  const [year, month, day] = birthDate
    .split("-")
    .map(Number);

  const [hour, minute] = birthTime
    .split(":")
    .map(Number);

  const solar = Solar.fromYmdHms(
    year,
    month,
    day,
    hour,
    minute,
    0
  );

  const lunar = solar.getLunar();

  return {
    solar: {
      day,
      month,
      year,
    },

    lunar: {
      day: lunar.getDay(),
      month: Math.abs(lunar.getMonth()),
      year: lunar.getYear(),
      leap: lunar.getMonth() < 0,
    },

    canChi: {
      year: lunar.getYearInGanZhi(),
      month: lunar.getMonthInGanZhi(),
      day: lunar.getDayInGanZhi(),
      hour: lunar.getTimeInGanZhi(),
    },
  };
}