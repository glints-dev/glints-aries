/* @flow */

import React from 'react';
import { SecondaryBtn } from './../Style/ButtonStyle';;

const SecondaryButton = (props) => {
  const { ...defaultButtonProps } = props;
  return (
    <SecondaryBtn {...defaultButtonProps}>{props.children}</SecondaryBtn>
  );
};

export default SecondaryButton;
