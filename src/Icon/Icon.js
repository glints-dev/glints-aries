/* @flow */

import React from 'react';
import { ICONS } from '../Utils/IconLibrary';

const Icon = (props: Props) => {
  const { name, size, color } = props;
  const iconName = name.replace(/-/g, "_");
  
  return (
    <svg width={`${size}px`} height={`${size}px`} fill={color} viewBox="0 0 512 512">
        {ICONS[iconName.toUpperCase()]}
    </svg>
  );
}

type Props = {
    name: string,
    color: string,
    size: string,
}

export default Icon;
