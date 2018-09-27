/* @flow */

import React from 'react';
import { TopIconWrapper } from '../../Style/MobileMenuStyle';
import { Icon } from '../../General/Icon';

const TopItems = (props: Props) => {
  const {
    className,
    name,
    size,
    color,
  } = props;

  return (
    <TopIconWrapper
      className={className}
      {...props}
    >
      <Icon
        name={name}
        size={size}
        color={color}
      />
    </TopIconWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
  name: string,
  size: string,
  color: string,
}

export default TopItems;
