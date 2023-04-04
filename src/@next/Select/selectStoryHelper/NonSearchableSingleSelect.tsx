import React, { useState } from 'react';
import { Select, SelectProps } from '../Select';

export const SingleSelect = ({
  options,
  allowMultiple,
  disabled,
  ...args
}: SelectProps) => {
  const [selected, setSelected] = useState('');

  const handleSelect = ({ value }: { value: string }) => {
    setSelected(value);
  };

  return (
    <Select
      {...args}
      allowMultiple={allowMultiple}
      disabled={disabled}
      options={options}
      onSelect={handleSelect}
      selectedValues={[selected]}
      width="400px"
      label="Label"
    />
  );
};
