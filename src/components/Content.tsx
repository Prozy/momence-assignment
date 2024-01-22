import React from "react";
import styled from "styled-components";
import { CurrencyTable } from "./CurrencyTable";

const StyledSection = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  row-gap: 50px;
`;

export const Content = () => {
  return (
    <StyledSection>
      <CurrencyTable />
    </StyledSection>
  );
};
