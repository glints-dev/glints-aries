/* @flow */

import React from 'react';
import { SecondaryContainer, SecondaryBtn } from '../../Style/General/ButtonStyle';

const SecondaryButton = ({
  children,
  className,
  ...defaultProps
}: Props) => (

  <SecondaryContainer className={className}>
    <SecondaryBtn className={`${className} secondaryButton`} {...defaultProps}>
      {children}
    </SecondaryBtn>
  </SecondaryContainer>
);

type Props = {
  children: React$Node,
  className: string,
}

export default SecondaryButton;
