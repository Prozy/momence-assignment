import React from "react";
import styled from "styled-components";
import { CurrencyTableUI } from "./ui/CurrencyTableUI";
import { DUMMY_RESPONSE } from "../data-access/api";

const StyledNote = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
`;

export const CurrencyTable = () => {
  return (
    <>
      <CurrencyTableUI data={DUMMY_RESPONSE} />
      <StyledNote>
        <sup>*</sup> With effect from January 2, 2024, the quantity changes from
        1 to 100
      </StyledNote>
    </>
  );
};
