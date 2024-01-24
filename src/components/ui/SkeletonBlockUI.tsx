import React from "react";
import styled from "styled-components";

const StyledSkeletonBlock = styled.span<{
  height?: number;
  width?: number;
  color?: "dark" | "light";
}>`
  display: block;
  height: ${(props) => props.height || 8}px;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  position: relative;
  overflow: hidden;
  background-color: var(
    --${(props) => (props.color === "dark" ? "dim-grey" : "grey200")}
  );
  border-radius: 100px;
`;

type Props = {
  height?: number;
  width?: number;
  color?: "dark" | "light";
};

export const SkeletonBlockUI = ({ width, height, color }: Props) => {
  return <StyledSkeletonBlock color={color} height={height} width={width} />;
};
