import React from "react";
import styled from "styled-components";
import { SkeletonBlockUI } from "./SkeletonBlockUI";

const StyledContainer = styled.div`
  display: block;
  width: 100%;
  background: var(--white);
  border-radius: 24px;
  padding: 0 40px 40px;
  box-shadow: 0 20px 66px rgba(34, 48, 73, 0.2);
  height: 30vh;
  min-height: 500px;
  overflow-y: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  position: relative;
`;

const StyledTH = styled.th`
  font-size: 22px;
  padding: 12px;
  padding-top: 52px;
  border-left: 1px solid var(--color-border-neutral);
  border-bottom: 1px solid var(--color-border-neutral);
  position: sticky;
  top: 0;
  background: var(--white);

  &:first-of-type {
    border-left: none;
  }
`;

const StyledTD = styled.td`
  font-size: 20px;
  padding: 12px;
  border-left: 1px solid var(--color-border-neutral);

  &:first-of-type {
    border-left: none;
  }
`;

const StyledTR = styled.tr`
  &:nth-of-type(even) {
    background-color: var(--white-smoke);
  }
`;

const SkeletonRow = () => (
  <StyledTR>
    <StyledTD>
      <SkeletonBlockUI height={20} />
    </StyledTD>
    <StyledTD>
      <SkeletonBlockUI height={20} />
    </StyledTD>
    <StyledTD>
      <SkeletonBlockUI height={20} />
    </StyledTD>
    <StyledTD>
      <SkeletonBlockUI height={20} />
    </StyledTD>
    <StyledTD>
      <SkeletonBlockUI height={20} />
    </StyledTD>
  </StyledTR>
);

export const CurrencyTableSkeletonUI = () => {
  return (
    <StyledContainer>
      <StyledTable>
        <thead>
          <StyledTR>
            <StyledTH align="left">
              <SkeletonBlockUI height={24} color="dark" />
            </StyledTH>
            <StyledTH align="left">
              <SkeletonBlockUI height={24} color="dark" />
            </StyledTH>
            <StyledTH align="right">
              <SkeletonBlockUI height={24} color="dark" />
            </StyledTH>
            <StyledTH align="center">
              <SkeletonBlockUI height={24} color="dark" />
            </StyledTH>
            <StyledTH align="right">
              <SkeletonBlockUI height={24} color="dark" />
            </StyledTH>
          </StyledTR>
        </thead>
        <tbody>
          {[...Array(8)].map((_, index) => (
            <SkeletonRow key={index} />
          ))}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
};
