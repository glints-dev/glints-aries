/* @flow */
import React from 'react';
import { DropdownItemWrapper } from '../Style/DropdownStyle';

const DropdownBody = (props: Props) => {
  const {
    children,
    className,
    center,
  } = props;

  return (
    <DropdownItemWrapper
      center={center}
      className={className}
    >
      {children}
    </DropdownItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
  center: boolean
}

export default DropdownBody;
