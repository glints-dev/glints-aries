/* @flow */

import React, { Fragment } from 'react';

import { SelectItemWrapper } from '../../Style/Input/SelectStyle';

const SelectItem = (props: Props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <SelectItemWrapper className={className} onMouseDown={onClick} {...defaultProps}>
        {children}
      </SelectItemWrapper>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  onClick: Function,
  className: string,
};

export default SelectItem;