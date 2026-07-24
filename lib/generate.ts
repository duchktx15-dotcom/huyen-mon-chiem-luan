import { Profile } from "./types";

import { convertCalendar } from "./calendar";

import { createPalaces } from "./palace";

import { anMenh } from "./menh";

import { anThan } from "./than";

import { anCuc } from "./cuc";

const CHI = [
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
];

export function generateLaSo(
  profile: Profile
) {

  const calendar = convertCalendar(
    profile.birthDate,
    profile.birthTime
  );

  const palaces = createPalaces();

  const hourChi =
    calendar.canChi.hour.split(" ")[1];

  const hourIndex =
    CHI.indexOf(hourChi);

  const menhIndex = anMenh(
    palaces,
    calendar.lunar.month,
    hourIndex
  );

  const thanIndex = anThan(
    palaces,
    calendar.lunar.month,
    hourIndex
  );

  const canNam =
    calendar.canChi.year.split(" ")[0];

  const cuc = anCuc(
    menhIndex,
    canNam
  );

  return {

    profile,

    calendar,

    palaces,

    menhIndex,

    thanIndex,

    cuc,

  };

}