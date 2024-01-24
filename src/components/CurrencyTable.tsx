import React from "react";
import styled from "styled-components";
import { CurrencyTableUI } from "./ui/CurrencyTableUI";
import { useDataContext } from "../data-access/DataContext";
import { CurrencyTableSkeletonUI } from "./ui/CurrencyTableSkeletonUI";

const StyledNote = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
`;

export const CurrencyTable = () => {
  const { currencyTable, isLoading, currencyTableHeaders } = useDataContext();

  return (
    <>
      {isLoading ? (
        <CurrencyTableSkeletonUI />
      ) : (
        <CurrencyTableUI
          data={currencyTable}
          headerTitles={currencyTableHeaders}
        />
      )}
      <StyledNote>
        <sup>*</sup> With effect from January 2, 2024, the quantity changes from
        1 to 100
      </StyledNote>
    </>
  );
};
