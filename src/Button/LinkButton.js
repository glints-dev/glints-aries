import React from 'react';
import { LinkBtn } from './../Style/ButtonStyle';
import Label from '../Label';

const LinkButton = (props) => {
  const { ...defaultButtonProps } = props;
  return (
    <LinkBtn>
      <Label theme={props.theme}>{props.children}</Label>
    </LinkBtn>
  );
};

export default LinkButton;
