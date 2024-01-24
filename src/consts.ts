import * as Flag from "country-flag-icons/react/1x1";
import { Currency } from "./types";

export const currencyToFlagMap: Record<string, typeof Flag.CZ> = {
  AUD: Flag.AU,
  BRL: Flag.BR,
  BGN: Flag.BG,
  CAD: Flag.CA,
  CNY: Flag.CN,
  DKK: Flag.DK,
  EUR: Flag.EU,
  HKD: Flag.HK,
  HUF: Flag.HU,
  ISK: Flag.IS,
  XDR: Flag.AQ,
  INR: Flag.IN,
  IDR: Flag.ID,
  ILS: Flag.IL,
  JPY: Flag.JP,
  MYR: Flag.MY,
  MXN: Flag.MX,
  NZD: Flag.NZ,
  NOK: Flag.NO,
  PHP: Flag.PH,
  PLN: Flag.PL,
  RON: Flag.RO,
  SGD: Flag.SG,
  ZAR: Flag.ZA,
  KRW: Flag.KR,
  SEK: Flag.SE,
  CHF: Flag.CH,
  THB: Flag.TH,
  TRY: Flag.TR,
  GBP: Flag.GB,
  USD: Flag.US,
  CZK: Flag.CZ,
};

export const exceptionCountries = ["Turkey"];

export const currencyCZK: Currency = {
  country: "Czech Republic",
  currency: "czech koruna",
  amount: 1,
  code: "CZK",
  rate: 1,
};

export const defaultCZKInputValue = 1000;

export const CNBExchangeRateURL =
  "https://momence-assignment-server.vercel.app/api/v1/exchange-rate";
