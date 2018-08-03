/* @flow */

import React from 'react';
import { RadioButton } from '../RadioButton';
import { RightItemWrapper } from '../Style/SwitchStyle';

const RightItem = (props: Props) => {
  const { id, label, name, value, onClick } = props;

  return (
    <RightItemWrapper>
      <RadioButton
        id={id}
        label={label}
        name={name}
        value={value}
        onChange={onClick}
      />
    </RightItemWrapper>
  );
};

type Props = {
  id: string,
  label: string,
  name: string,
  value: string,
  onClick: Function,
}

export default RightItem;
