import React from 'react';

export type OptionType = {
  label: string;
  value: string;
};

export const Option = ({ label, value }: OptionType) => {
  return <li value={value}>{label}</li>;
};
