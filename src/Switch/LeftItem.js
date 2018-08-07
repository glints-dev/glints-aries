/* @flow */

import React from 'react';
import { RadioButton } from '../RadioButton';
import { LeftItemWrapper } from '../Style/SwitchStyle';

const LeftItem = (props: Props) => {
  const {
    id,
    label,
    name,
    value,
    onClick,
  } = props;

  return (
    <LeftItemWrapper>
      <RadioButton
        id={id}
        label={label}
        name={name}
        value={value}
        onClick={onClick}
      />
    </LeftItemWrapper>
  );
};

type Props = {
  id: string,
  label: string,
  name: string,
  value: string,
  onClick: Function,
}

export default LeftItem;
