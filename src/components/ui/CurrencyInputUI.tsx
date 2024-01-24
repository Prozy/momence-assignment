import React from "react";
import type { ChangeEvent } from "react";

import styled from "styled-components";
import { CurrencyPickerUI } from "./CurrencyPickerUI";
import { Currency } from "../../types";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
`;
const StyledLabelText = styled.span`
  padding-left: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
`;
const StyledInputContainer = styled.div`
  position: relative;
  flex-grow: 1;

  @media (max-width: 1110px) {
    width: 100%;
  }
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 12px 128px 12px 12px;
  height: 56px;
  border: 1px solid var(--dim-grey);
  box-shadow: 0px 4px 16px rgba(34, 48, 73, 0.1);
  border-radius: 12px;
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  width: 100%;

  // remove number arrows in Mozila
  -moz-appearance: textfield;
  // remove number arrows in Chrome, Safari, Edge, Opera
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const StyledRightSlot = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 128px;
  height: 56px;
  position: absolute;
  bottom: 0;
  right: 12px;
`;

type Props = {
  label: string;
  selected?: Currency;
  hasPicker?: boolean;
  value?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCurrencyChange: (currency: Currency) => void;
  currenciesList: Array<Currency>;
};

export const CurrencyInputUI = ({
  label,
  hasPicker,
  value,
  selected,
  onChange,
  onCurrencyChange,
  currenciesList,
}: Props) => {
  return (
    <StyledInputContainer>
      <StyledLabel>
        <StyledLabelText>{label}</StyledLabelText>
        <StyledInput
          type="number"
          value={value}
          onChange={onChange}
          placeholder="Type a value..."
        />
      </StyledLabel>
      <StyledRightSlot>
        <CurrencyPickerUI
          onCurrencyChange={onCurrencyChange}
          isDisabled={!hasPicker}
          currenciesList={currenciesList}
          selected={selected!} // this is rendered only when data are loaded
        />
      </StyledRightSlot>
    </StyledInputContainer>
  );
};
