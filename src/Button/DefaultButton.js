import React from 'react';
import { DefaultBtn } from '../Style/ButtonStyle';

const DefaultButton = (props) => {
  const {
    children,
    theme,
    ...defaultButtonProps
  } = props;

  return (
    <DefaultBtn theme={theme} {...defaultButtonProps}>
      { children }
    </DefaultBtn>
  );
};

export default DefaultButton;
