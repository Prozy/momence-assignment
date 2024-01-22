import React, { useCallback, useState } from "react";
import type { ChangeEvent } from "react";
import { CurrencyConverterFormUI } from "./ui/CurrencyConverterFormUI";
import { DUMMY_RESPONSE } from "../data-access/api";
import { roundFloatToThreeDecimalPlaces } from "../utils";
import { Currency } from "../types";

// TODO: remove once it's comming via props
const dummyCZKInputData: { value: number; selected: Currency } = {
  value: 1000,
  selected:
    DUMMY_RESPONSE.find((currency) => currency.code === "CZK") ||
    DUMMY_RESPONSE[0],
};
const dummyEURInputData: { value: number; selected: Currency } = {
  value: 40.36,
  selected:
    DUMMY_RESPONSE.find((currency) => currency.code === "EUR") ||
    DUMMY_RESPONSE[0],
};

export const CurrencyConverterForm = () => {
  const [fromValue, setFromValue] = useState(
    roundFloatToThreeDecimalPlaces(dummyCZKInputData.value)
  );
  const [selectedToCurrency, setSelectedToCurrency] = useState(
    dummyEURInputData.selected
  );
  const [toValue, setToValue] = useState(
    roundFloatToThreeDecimalPlaces(
      (dummyCZKInputData.value / selectedToCurrency.rate) *
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
        selected: dummyCZKInputData.selected,
        onChange: onFromValueChange,
      }}
      toInput={{
        value: toValue,
        selected: selectedToCurrency,
        onChange: onToValueChange,
      }}
      onCurrencyChange={onCurrencyChange}
    />
  );
};
