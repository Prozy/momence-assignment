import React from "react";
import styled from "styled-components";
import { BsArrowLeftRight } from "react-icons/bs";
import { SkeletonBlockUI } from "./SkeletonBlockUI";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 12vh;
  background: var(--white);
  border-radius: 24px;
  color: black;
  padding: 40px;
  box-shadow: 0 20px 66px rgba(34, 48, 73, 0.2);
`;

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledConversion = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 32px;
  height: 32px;
  font-weight: normal;
  margin: 0;
  margin-top: 8px;
  padding: 0 12px;
`;
const StyledTime = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  height: 20px;
  font-weight: normal;
  margin-bottom: 0;
  padding: 0 12px;
`;

const StyledDoubleArrow = styled(BsArrowLeftRight)`
  padding-top: 28px;
  display: block;
  width: 24px;
  height: 100%;
  color: var(--grey200);
`;

const StyledInputSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CurrencyConverterFormSkeletonUI = () => {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledInputSkeletonContainer>
          <SkeletonBlockUI height={20} width={100} />
          <SkeletonBlockUI height={56} width={400} />
        </StyledInputSkeletonContainer>
        <StyledDoubleArrow size={24} />
        <StyledInputSkeletonContainer>
          <SkeletonBlockUI height={20} width={100} />
          <SkeletonBlockUI height={56} width={400} />
        </StyledInputSkeletonContainer>
      </StyledRow>
      <StyledRow>
        <StyledConversion>
          <SkeletonBlockUI height={20} width={200} />
        </StyledConversion>

        <StyledConversion>
          <SkeletonBlockUI height={20} width={200} />
        </StyledConversion>
      </StyledRow>
      <StyledTime>
        <SkeletonBlockUI height={16} width={350} />
      </StyledTime>
    </StyledContainer>
  );
};
