import {
  Component,
  ParsingContext,
  ParsingComponents,
  ParsingResult
} from "chrono-node";

export type supportedChronoLocales =
  | "en"
  | "ja"
  | "fr"
  | "nl"
  | "ru"
  | "pt"
  | "de";

export type ChronoParsedDate = {
  value?: Date;
  reason?: "invalid" | "minDate" | "maxDate";
};

export type ChronoParsedRange = {
  value?: { start: Date; end: Date };
  reason?: "invalid" | "minDate" | "maxDate" | "rangeOutOfBounds";
};

export type ChronoParsedDateString = {
  value?: string;
  reason?: "invalid" | "minDate" | "maxDate";
};

export interface Parser {
  pattern: (context: ParsingContext) => RegExp;
  extract: (
    context: ParsingContext,
    match: RegExpMatchArray
  ) => ParsingComponents | ParsingResult | { [c in Component]?: number } | null;
}

export interface ChronoOptions {
  referenceDate?: Date;
  useStrict?: boolean;
  locale?: string;

  minDate?: string;

  maxDate?: string;

  chronoSupportedLocale?: boolean;
  customExpressions?: {
    pattern: RegExp;
    match: { month: number; day: number };
  }[];
}
