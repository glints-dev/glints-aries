/* @flow */

import React, { Fragment } from 'react';

import { AutoCompleteItemWrapper } from '../../Style/Input/AutoCompleteStyle';

const AutoCompleteItem = (props: Props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <AutoCompleteItemWrapper
        className={className}
        onMouseDown={onClick}
        {...defaultProps}
      >
        {children}
      </AutoCompleteItemWrapper>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  onClick: Function,
  className: string,
};

export default AutoCompleteItem;
