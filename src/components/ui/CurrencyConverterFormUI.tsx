import React from "react";
import type { ChangeEvent } from "react";
import styled from "styled-components";
import { CurrencyInputUI } from "./CurrencyInputUI";
import { BsArrowLeftRight } from "react-icons/bs";
import { Currency } from "../../types";
import { roundFloatToThreeDecimalPlaces } from "../../utils";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 12vh;
  background: var(--white);
  border-radius: 24px;
  color: black;
  padding: 40px;
  box-shadow: 0 20px 66px rgba(34, 48, 73, 0.2);
`;

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledConversion = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: normal;
  margin: 0;
  margin-top: 8px;
  padding: 0 12px;
`;
const StyledTime = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  margin-bottom: 0;
  padding: 0 12px;
`;

const StyledDoubleArrow = styled(BsArrowLeftRight)`
  padding-top: 28px;
  display: block;
  width: 24px;
  height: 100%;
`;

type InputData = {
  value: number;
  selected: Currency;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type Props = {
  fromInput: InputData;
  toInput: InputData;
  onCurrencyChange: (currency: Currency) => void;
};

export const CurrencyConverterFormUI = ({
  fromInput,
  toInput,
  onCurrencyChange,
}: Props) => {
  return (
    <StyledContainer>
      <StyledRow>
        <CurrencyInputUI
          label="Amount"
          {...fromInput}
          onCurrencyChange={onCurrencyChange}
        />
        <StyledDoubleArrow size={24} />
        <CurrencyInputUI
          label="Converted to"
          {...toInput}
          onCurrencyChange={onCurrencyChange}
          hasPicker
        />
      </StyledRow>
      <StyledRow>
        <StyledConversion>{`1 ${fromInput.selected.code} = ${roundFloatToThreeDecimalPlaces(toInput.selected.amount / toInput.selected.rate)} ${toInput.selected.code}`}</StyledConversion>
        <StyledConversion>{`${toInput.selected.amount} ${toInput.selected.code} = ${toInput.selected.rate} ${fromInput.selected.code}`}</StyledConversion>
      </StyledRow>
      {/* TODO: should come from props */}
      <StyledTime>
        <sup>*</sup>Exchange rate valid for January 22, 2024
      </StyledTime>
    </StyledContainer>
  );
};
