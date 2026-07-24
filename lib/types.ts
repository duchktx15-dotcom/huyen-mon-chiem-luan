export type Gender = "nam" | "nu";
export type CalendarType = "solar" | "lunar";

export interface Profile {
  fullName: string;
  gender: Gender;
  birthDate: string; // yyyy-mm-dd
  birthTime: string; // HH:mm
  calendar: CalendarType;
}

export interface CalendarResult {
  solar: {
    day: number;
    month: number;
    year: number;
  };

  lunar: {
    day: number;
    month: number;
    year: number;
    leap: boolean;
  };

  canChi: {
    year: string;
    month: string;
    day: string;
    hour: string;
  };
}