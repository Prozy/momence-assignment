import React from "react";
import styled from "styled-components";
import { Currency } from "../../types";
import { currencyToFlagMap } from "../../consts";

const StyledFlag = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
`;

type Props = {
  currency: Currency;
};

export const CountryFlagUI = ({ currency }: Props) => {
  const { code, country } = currency;
  const FlagComponent = currencyToFlagMap[code];

  return (
    <StyledFlag title={country}>
      <FlagComponent />
    </StyledFlag>
  );
};
