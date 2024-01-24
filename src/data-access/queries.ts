import { useQuery } from "react-query";
import { CNBExchangeRateURL } from "../consts";

export const fetchExchangeRate = async () => {
  const response = await fetch(CNBExchangeRateURL);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const useCNBExchangeRateQuery = () => {
  return useQuery("exchangeRate", fetchExchangeRate);
};
