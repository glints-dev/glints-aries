import * as React from 'react';

import SelectItem from './SelectItem';

import Loading from '../../General/Loading';
import { SelectListWrapper } from '../../Style/Input/SelectStyle';

const SelectList: React.FunctionComponent<Props> = ({
  cursor,
  filterValue,
  isFocus,
  isLoading,
  noOptionResult,
  small,
  handleClick,
  handleMouseEnter,
}: Props) => (
  <SelectListWrapper
    className="select-listbox"
    role="listbox"
    data-testid="listbox"
    aria-hidden={!isFocus && true}
    open={isFocus}
    small={small}
  >
    {filterValue.length !== 0 && !isLoading ? (
      filterValue.map((data: React.ReactElement<SelectItemProps>, index) => (
        <SelectItem
          className={cursor === index ? 'active' : null}
          key={data.props.value}
          role="option"
          data-testid="option"
          data-id={index}
          data-value={data.props.value}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          tabIndex={0}
        >
          {data.props.children}
        </SelectItem>
      ))
    ) : isLoading ? (
      <SelectItem className="select-loading" role="option">
        <Loading />
      </SelectItem>
    ) : (
      <SelectItem
        disabled
        role="option"
        data-testid="option"
        aria-hidden={false}
        aria-disabled="true"
      >
        {noOptionResult}
      </SelectItem>
    )}
  </SelectListWrapper>
);

interface Props {
  cursor: number;
  filterValue: React.ReactNode[];
  isFocus: boolean;
  isLoading: boolean;
  noOptionResult?: string;
  small?: boolean;
  handleClick?: () => void;
  handleMouseEnter(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}

export interface SelectItemProps {
  children: string;
  value?: string;
  onOptionClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}

export default SelectList;
