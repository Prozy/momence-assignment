import React from "react";

import styled from "styled-components";
import { CurrencyTable } from "./CurrencyTable";
import { useDataContext } from "../data-access/DataContext";

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
  const { isError } = useDataContext();

  return (
    <StyledSection>
      <StyledInner>
        <StyledPull>
          {!isError && <CurrencyTable />}
          {isError && (
            <h1>
              We're sorry, but something went wrong while loading data. Please
              refresh the page or try again later.
            </h1>
          )}
        </StyledPull>
      </StyledInner>
    </StyledSection>
  );
};
