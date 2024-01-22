import React from "react";
import styled from "styled-components";
import { LogoUI } from "./ui/LogoUI";
import { CurrencyConverterForm } from "./CurrencyConverterForm";

const StyledHeader = styled.header`
  background-color: var(--indigo);
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  max-width: 1000px;
  padding-top: 120px;
  padding-bottom: 120px;
`;

const StyledTitle = styled.h1`
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

const StyledDescription = styled.p`
  margin-top: 0;
  font-size: 20px;
  margin-bottom: 80px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledInner>
        <LogoUI />
        <StyledTitle>Currency converter</StyledTitle>
        <StyledDescription>Tech task assignment</StyledDescription>
        <CurrencyConverterForm />
      </StyledInner>
    </StyledHeader>
  );
};
