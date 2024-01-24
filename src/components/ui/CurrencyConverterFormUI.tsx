import React from "react";
import type { ChangeEvent } from "react";
import styled from "styled-components";
import { CurrencyInputUI } from "./CurrencyInputUI";
import { BsArrowLeftRight } from "react-icons/bs";
import { Currency } from "../../types";
import { roundFloatToThreeDecimalPlaces } from "../../utils";
import { DataContext } from "../../data-access/DataContext";

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

  @media (max-width: 1110px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const StyledConversion = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 32px;
  height: 32px;
  font-weight: normal;
  margin: 0;
  margin-top: 8px;
  padding: 0 12px;

  @media (max-width: 1110px) {
    width: 100%;

    &:last-of-type {
      margin-top: 0;
    }
  }
`;
const StyledTime = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  height: 20px;
  font-weight: normal;
  margin-bottom: 0;
  padding: 0 12px;
`;

const StyledDoubleArrow = styled(BsArrowLeftRight)`
  padding-top: 28px;
  display: block;
  width: 24px;
  height: 100%;

  @media (max-width: 1110px) {
    display: none;
  }
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
  currenciesList: Array<Currency>;
  metaData: DataContext["metaData"];
};

export const CurrencyConverterFormUI = ({
  fromInput,
  toInput,
  onCurrencyChange,
  currenciesList,
  metaData,
}: Props) => {
  return (
    <StyledContainer>
      <StyledRow>
        <CurrencyInputUI
          label="Amount"
          {...fromInput}
          onCurrencyChange={onCurrencyChange}
          currenciesList={currenciesList}
        />
        <StyledDoubleArrow size={24} />
        <CurrencyInputUI
          label="Converted to"
          {...toInput}
          onCurrencyChange={onCurrencyChange}
          currenciesList={currenciesList}
          hasPicker
        />
      </StyledRow>
      <StyledRow>
        <StyledConversion>
          {`1 ${fromInput.selected.code} = ${roundFloatToThreeDecimalPlaces(toInput.selected.amount / toInput.selected.rate)} ${toInput.selected.code}`}
        </StyledConversion>

        <StyledConversion>
          {`${toInput.selected.amount} ${toInput.selected.code} = ${toInput.selected.rate} ${fromInput.selected.code}`}
        </StyledConversion>
      </StyledRow>
      {/* TODO: should come from props */}
      <StyledTime>
        <span>
          <sup>*</sup>
          {`Exchange rate valid for ${metaData?.month} ${metaData?.day}, ${metaData?.year}`}
        </span>
      </StyledTime>
    </StyledContainer>
  );
};
