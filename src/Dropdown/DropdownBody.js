/* @flow */
import React from 'react';
import { DropdownItemWrapper } from '../Style/DropdownStyle';

const DropdownBody = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <DropdownItemWrapper className={className}>
      {children}
    </DropdownItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default DropdownBody;
