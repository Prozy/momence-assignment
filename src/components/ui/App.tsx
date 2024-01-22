import React from "react";
import type { ReactNode } from "react";
import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

type Props = {
  children: ReactNode;
};

export const App = ({ children }: Props) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};
