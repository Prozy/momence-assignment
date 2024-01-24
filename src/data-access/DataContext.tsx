import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { Currency } from "../types";
import { useCNBExchangeRateQuery } from "./queries";

export type DataContext = {
  isFetched: boolean;
  isLoading: boolean;
  isError: boolean;
  error: string | null | unknown;
  dataUpdatedAt: number;
  metaData?: {
    day: string;
    month: string;
    year: string;
    order: string;
  };
  currencyTableHeaders?: Array<string>;
  currencyTable: Array<Currency>;
};

const DataContext = createContext<DataContext | null>(null);

type Props = {
  children: ReactNode;
};

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("Something went wrong with DataContext");
  }

  return context;
};

export const DataContextProvider = ({ children }: Props) => {
  const { data, isFetched, isLoading, isError, error, dataUpdatedAt } =
    useCNBExchangeRateQuery();

  const value = {
    isFetched,
    isLoading,
    isError,
    error,
    dataUpdatedAt,
    metaData: data?.meta,
    currencyTableHeaders: data?.headers,
    currencyTable: data?.data,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
