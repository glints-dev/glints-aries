import React from 'react';
import { LinkBtn } from '../Style/ButtonStyle';
import Label from '../Label';

type Props = {
  theme: string,
  onClick: Function,
  children: React.Node,
  className: string
}

const LinkButton = ({ children, ...defaultButtonProps }: Props) => (
  <LinkBtn>
    <Label {...defaultButtonProps}>
      {children}
    </Label>
  </LinkBtn>
);

export default LinkButton;
