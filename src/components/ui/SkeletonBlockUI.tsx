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
  border-radius: 100px;
  animation: loading 2s ease infinite;
  background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 30%,
      transparent 60%
    )
    var(--${(props) => (props.color === "dark" ? "dim-grey" : "grey200")});
  background-size: 200%;

  @keyframes loading {
    0% {
      background-position-x: 100%;
    }
    100% {
      background-position-x: -100%;
    }
  }
`;

type Props = {
  height?: number;
  width?: number;
  color?: "dark" | "light";
};

export const SkeletonBlockUI = ({ width, height, color }: Props) => {
  return <StyledSkeletonBlock color={color} height={height} width={width} />;
};
