import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useOnClickOutside } from "usehooks-ts";

import styled from "styled-components";
import { BsChevronDown, BsCheck2 } from "react-icons/bs";
import { Currency } from "../../types";
import { CountryFlagUI } from "./CountryFlagUI";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
`;
const StyledTrigger = styled.div<{ isDisabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  cursor: ${(props) => (props.isDisabled === true ? "intial" : "pointer")};
  pointer-events: ${(props) => (props.isDisabled === true ? "none" : "auto")};
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
const StyledCode = styled.span`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  flex-grow: 1;
`;
const StyledDropdown = styled.div<{ isOpen?: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  width: 300px;
  z-index: 1;
  top: calc(100% + 18px);
  right: -24px;
  background: var(--white);
  box-shadow: 0px 4px 16px rgba(34, 48, 73, 0.3);
  border-radius: 12px;
  max-height: 40vh;
  overflow: hidden;
`;
const StyledSearchInput = styled.input`
  box-sizing: border-box;
  padding: 4px 12px;
  margin: 12px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 32px;
  width: calc(100% - (2 * 12px));
  border: 1px solid var(--dim-grey);
  box-shadow: 0px 4px 16px rgba(34, 48, 73, 0.1);
  position: sticky;
  top: 12px;
`;
const StyledScrollContainer = styled.div`
  overflow: auto;
`;
const StyledItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  width: 100%;
  pointer-events: auto;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>
    props.isSelected ? "var(--white-smoke)" : "var(--white)"};

  &:hover {
    background: var(--grey200);
  }
`;
const StyledChevron = styled(BsChevronDown)`
  color: var(--dim-grey);
`;

const StyledCheckmark = styled(BsCheck2)`
  color: var(--medium-sea-green);
`;

const StyledEmptyState = styled.span`
  display: flex;
  padding: 20px;
  font-size: 20px;
`;

type Props = {
  currenciesList: Array<Currency>;
  isDisabled?: boolean;
  selected: Currency;
  onCurrencyChange: (currency: Currency) => void;
};

const ListItem = ({
  currency,
  onClick,
  onKeyDown,
  isSelected,
}: {
  currency: Currency;
  onClick: (currency: Currency) => void;
  onKeyDown: (currency: Currency) => void;
  isSelected?: boolean;
}) => {
  const onClickHandler = () => onClick(currency);
  const onKeydownHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onKeyDown(currency);
    }
  };

  return (
    <StyledItem
      onClick={onClickHandler}
      onKeyDown={onKeydownHandler}
      isSelected={isSelected}
      tabIndex={0}
      role="button"
    >
      <CountryFlagUI currency={currency} />
      <StyledCode>{currency.code}</StyledCode>
      {isSelected && <StyledCheckmark size={20} />}
    </StyledItem>
  );
};

export const CurrencyPickerUI = ({
  isDisabled,
  currenciesList,
  selected,
  onCurrencyChange,
}: Props) => {
  const [isOpen, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [renderedCurrenciesList, setRenderedCurrenciesList] =
    useState(currenciesList);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  useOnClickOutside(pickerRef, () => setOpen(false));

  const onListItemClick = (currency: Currency) => {
    onCurrencyChange(currency);
    toggleDropdown();
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!value || !value.length) {
      setRenderedCurrenciesList(currenciesList);
    }

    const filteredCurrenciesList = currenciesList.filter(
      (currency) =>
        currency.code.toLowerCase().includes(value.toLowerCase()) ||
        currency.country.toLowerCase().includes(value.toLowerCase()) ||
        currency.currency.toLowerCase().includes(value.toLowerCase())
    );
    setRenderedCurrenciesList(filteredCurrenciesList);
  };

  const onTriggerKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      toggleDropdown();
    }
  };

  useEffect(() => {
    !isOpen && setRenderedCurrenciesList(currenciesList);
  }, [isOpen, currenciesList]);

  return (
    <StyledContainer ref={pickerRef}>
      <StyledTrigger
        onClick={toggleDropdown}
        onKeyDown={onTriggerKeydown}
        isDisabled={isDisabled}
        tabIndex={isDisabled ? undefined : 0}
        role="button"
      >
        <CountryFlagUI currency={selected} />
        <StyledCode>{selected.code}</StyledCode>
        {!isDisabled && <StyledChevron size={20} />}
      </StyledTrigger>
      {!isDisabled && isOpen && (
        <StyledDropdown isOpen={isOpen}>
          <>
            <StyledSearchInput
              type="search"
              placeholder="Search..."
              onChange={onSearchChange}
              autoFocus
            />
            <StyledScrollContainer>
              {renderedCurrenciesList.length ? (
                renderedCurrenciesList.map((currency: Currency) => (
                  <ListItem
                    key={currency.code.toLowerCase()}
                    currency={currency}
                    onClick={onListItemClick}
                    onKeyDown={onListItemClick}
                    isSelected={selected.code === currency.code}
                  />
                ))
              ) : (
                <StyledEmptyState>No matching results</StyledEmptyState>
              )}
            </StyledScrollContainer>
          </>
        </StyledDropdown>
      )}
    </StyledContainer>
  );
};
