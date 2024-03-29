import React from "react";
import styled from "styled-components";
import { Currency } from "../../types";
import { CountryFlagUI } from "./CountryFlagUI";
import { exceptionCountries } from "../../consts";
import { SkeletonBlockUI } from "./SkeletonBlockUI";

const StyledContainer = styled.div`
  display: block;
  width: 100%;
  background: var(--white);
  border-radius: 24px;
  padding: 0 40px 40px;
  box-shadow: 0 20px 66px rgba(34, 48, 73, 0.2);
  height: 30vh;
  min-height: 500px;
  overflow-y: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  position: relative;
`;

const StyledTH = styled.th`
  font-size: 22px;
  padding: 12px;
  padding-top: 52px;
  border-left: 1px solid var(--color-border-neutral);
  border-bottom: 1px solid var(--color-border-neutral);
  position: sticky;
  top: 0;
  background: var(--white);

  &:first-of-type {
    border-left: none;
  }
`;

const StyledTD = styled.td`
  font-size: 20px;
  padding: 12px;
  border-left: 1px solid var(--color-border-neutral);

  &:first-of-type {
    border-left: none;
  }
`;

const StyledTR = styled.tr`
  &:nth-of-type(even) {
    background-color: var(--white-smoke);
  }
`;

const StyledCountryCell = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

type Props = {
  headerTitles?: Array<string>;
  data: Array<Currency>;
};

export const CurrencyTableUI = ({ data, headerTitles }: Props) => {
  return (
    <StyledContainer>
      <StyledTable>
        <thead>
          <StyledTR>
            <StyledTH align="left">{headerTitles?.[0]}</StyledTH>
            <StyledTH align="left">{headerTitles?.[1]}</StyledTH>
            <StyledTH align="right">{headerTitles?.[2]}</StyledTH>
            <StyledTH align="center">{headerTitles?.[3]}</StyledTH>
            <StyledTH align="right">{headerTitles?.[4]}</StyledTH>
          </StyledTR>
        </thead>
        <tbody>
          {data.map((row) => (
            <StyledTR key={row.code}>
              <StyledTD>
                <StyledCountryCell>
                  <CountryFlagUI currency={row} />
                  <span>
                    {row.country}
                    {exceptionCountries.includes(row.country) && <sup>*</sup>}
                  </span>
                </StyledCountryCell>
              </StyledTD>
              <StyledTD>{row.currency}</StyledTD>
              <StyledTD align="right">{row.amount}</StyledTD>
              <StyledTD align="center">{row.code}</StyledTD>
              <StyledTD align="right">{row.rate}</StyledTD>
            </StyledTR>
          ))}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
};
