import React from 'react';
import { SecondaryContainer, SecondaryBtn } from './../Style/ButtonStyle';

const SecondaryButton = ({ children, label, icon, ...defaultButtonProps }) =>  {

  return (
    <SecondaryContainer {...defaultButtonProps}>
      <SecondaryBtn>
        { label }
        {icon
          ? <Icon image={icon} position={'right'} />
          : null
        }
        {children}
      </SecondaryBtn>
    </SecondaryContainer>
  );
}

export default SecondaryButton;