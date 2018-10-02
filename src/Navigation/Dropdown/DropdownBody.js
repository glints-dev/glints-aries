/* @flow */
import React from 'react';
import { DropdownItemWrapper } from '../../Style/Navigation/DropdownStyle';

const DropdownBody = (props: Props) => {
  const {
    children,
    className,
    center,
    iconWrapper,
    fontSize,
  } = props;

  return (
    <DropdownItemWrapper
      center={center}
      className={className}
      iconWrapper={iconWrapper}
      fontSize={fontSize}
    >
      {children}
    </DropdownItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
  fontSize: string,
  center: boolean,
  iconWrapper: boolean
}

export default DropdownBody;
