import React, { useCallback, useState } from "react";
import type { ChangeEvent } from "react";
import { CurrencyConverterFormUI } from "./ui/CurrencyConverterFormUI";
import { roundFloatToThreeDecimalPlaces } from "../utils";
import { Currency } from "../types";
import { currencyCZK, defaultCZKInputValue } from "../consts";
import { useDataContext } from "../data-access/DataContext";

export const CurrencyConverterForm = () => {
  const { currencyTable, metaData } = useDataContext();

  const [fromValue, setFromValue] = useState(
    roundFloatToThreeDecimalPlaces(defaultCZKInputValue)
  );
  const [selectedToCurrency, setSelectedToCurrency] = useState(
    currencyTable[0]
  );
  const [toValue, setToValue] = useState(
    roundFloatToThreeDecimalPlaces(
      (defaultCZKInputValue / selectedToCurrency.rate) *
        selectedToCurrency.amount
    )
  );

  const onFromValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      setFromValue(roundFloatToThreeDecimalPlaces(value));
      setToValue(
        roundFloatToThreeDecimalPlaces(
          (value / selectedToCurrency.rate) * selectedToCurrency.amount
        )
      );
    },
    [selectedToCurrency]
  );

  const onToValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      setFromValue(
        roundFloatToThreeDecimalPlaces(
          (value / selectedToCurrency.amount) * selectedToCurrency.rate
        )
      );
      setToValue(roundFloatToThreeDecimalPlaces(value));
    },
    [selectedToCurrency]
  );

  const onCurrencyChange = useCallback(
    (currency: Currency) => {
      setSelectedToCurrency(currency);
      setFromValue(
        roundFloatToThreeDecimalPlaces(
          (toValue / currency.amount) * currency.rate
        )
      );
    },
    [toValue]
  );

  return (
    <CurrencyConverterFormUI
      fromInput={{
        value: fromValue,
        selected: currencyCZK,
        onChange: onFromValueChange,
      }}
      toInput={{
        value: toValue,
        selected: selectedToCurrency,
        onChange: onToValueChange,
      }}
      onCurrencyChange={onCurrencyChange}
      currenciesList={currencyTable}
      metaData={metaData}
    />
  );
};
