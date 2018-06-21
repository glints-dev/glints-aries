import React from 'react';
import { DefaultBtn } from './../Style/ButtonStyle';
import { Icon } from './../Style/IconStyle';

const DefaultButton = (props) => {
  const {
    children,
    icon,
    ...defaultButtonProps
  } = props;
  
  return (
    <DefaultBtn {...defaultButtonProps}>
      {icon
        ? <Icon image={icon} position={'left'} />
        : null
      }
      { children }
    </DefaultBtn>
  )
};

export default DefaultButton;
