import React from 'react';
import { DefaultBtn } from './../Style/ButtonStyle';
import { Icon } from './../Style/IconStyle';

const DefaultButton = ({ label, icon }) => (
  <DefaultBtn>
    {icon
      ? <Icon image={icon} position={'left'} />
      : null
    }
    { label }
  </DefaultBtn>
);

export default DefaultButton;
