import { Palace } from "./palace";

const MONTH_START = [
  2, // tháng 1
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  0,
  1,
];

export function anMenh(
  palaces: Palace[],
  lunarMonth: number,
  hourBranch: number
) {

  const start = MONTH_START[lunarMonth - 1];

  const menh = (start - hourBranch + 12) % 12;

  palaces[menh].name = "Mệnh";

  return menh;

}