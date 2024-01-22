import React from "react";
import type { ReactNode } from "react";
import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: block;
`;

type Props = {
  children: ReactNode;
};

export const AppUI = ({ children }: Props) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};
