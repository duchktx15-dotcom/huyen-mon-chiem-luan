import { Palace } from "./palace";

export function anThan(
  palaces: Palace[],
  lunarMonth: number,
  hourBranch: number
) {

  const than = (lunarMonth - 1 + hourBranch) % 12;

  return than;

}