import React from "react";

import styled from "styled-components";
import { CurrencyTable } from "./CurrencyTable";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  row-gap: 50px;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  max-width: 1000px;
  padding-bottom: 120px;
`;

const StyledPull = styled.div`
  position: relative;
  width: 100%;
  top: -60px;
`;

export const Content = () => {
  return (
    <StyledSection>
      <StyledInner>
        <StyledPull>
          <CurrencyTable />
        </StyledPull>
      </StyledInner>
    </StyledSection>
  );
};
