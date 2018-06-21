import React from 'react';
import { DefaultBtn } from './../Style/ButtonStyle';
import { Icon } from './../Style/IconStyle';

const DefaultButton = ({ children, icon }) => (
  <DefaultBtn>
    {icon
      ? <Icon image={icon} position={'left'} />
      : null
    }
    { children }
  </DefaultBtn>
);

export default DefaultButton;
