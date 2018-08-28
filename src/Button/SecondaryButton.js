/* @flow */

import React from 'react';
import { SecondaryContainer, SecondaryBtn } from '../Style/ButtonStyle';

const SecondaryButton = ({
  children,
  className,
  ...defaultButtonProps
}: Props) => (

  <SecondaryContainer className={className}>
    <SecondaryBtn className={`${className} secondaryButton`} {...defaultButtonProps}>
      {children}
    </SecondaryBtn>
  </SecondaryContainer>
);

type Props = {
  children: React$Node,
  className: string,
}

export default SecondaryButton;
