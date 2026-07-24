import {
  generateLaSo,
  GenerateLaSoInput,
} from "tuvi-neo";

import { Profile } from "./types";

export function createLaSo(
  profile: Profile
) {

  const [year, month, day] =
    profile.birthDate
      .split("-")
      .map(Number);

  const [hour, minute] =
    profile.birthTime
      .split(":")
      .map(Number);

  const input: GenerateLaSoInput = {

    name: profile.fullName,

    gender:
      profile.gender === "nam"
        ? "male"
        : "female",

    birth: {

      isLunar:
        profile.calendar === "lunar",

      year,

      month,

      day,

      hour,

      minute,

    },

  };

  return generateLaSo(input);

}