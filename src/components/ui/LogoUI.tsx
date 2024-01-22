import React from "react";
import styled from "styled-components";

import logo from "../../momence-logo.svg";
import logoTypography from "../../momence-logo-typography.svg";

const StyledLogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

const StyledLogo = styled.img`
  height: 3rem;
  pointer-events: none;
  border-radius: 50%;
`;

const StyledLogoTypography = styled.img`
  height: 1rem;
  pointer-events: none;
`;

export const LogoUI = () => {
  return (
    <StyledLogoContainer href="https://momence.com/">
      <StyledLogo src={logo} alt="logo" />
      <StyledLogoTypography src={logoTypography} alt="logo-typography" />
    </StyledLogoContainer>
  );
};
