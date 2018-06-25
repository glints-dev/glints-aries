import React from 'react';
import { GhostBtn } from './../Style/ButtonStyle';

const GhostButton = (props) => {
  const { ...defaultButtonProps } = props;
  return (
    <GhostBtn {...defaultButtonProps}>{props.children}</GhostBtn>
  );
};

export default GhostButton;
