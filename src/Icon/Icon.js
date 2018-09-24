/* @flow */

import React from 'react';
import { ICONS } from '../Utils/IconLibrary';

const Icon = (props: Props) => {
  const { name, color } = props;
  const iconName = name.replace(/-/g, '_');

  return (
    <svg width="1em" height="1em" fill={color} viewBox="0 0 100 100">
      {ICONS[iconName.toUpperCase()]}
    </svg>
  );
};

type Props = {
  name: string,
  color: string,
}

export default Icon;
