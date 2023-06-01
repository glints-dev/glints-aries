import React, { useState } from 'react';
import { Select, SelectProps } from '../Select';
import { SelectWrapper } from './SelectStoryStyle';

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
    <SelectWrapper style={{ display: 'flex', width: '400px' }}>
      <Select
        {...args}
        allowMultiple={allowMultiple}
        disabled={disabled}
        options={options}
        onSelect={handleSelect}
        selectedValues={[selected]}
        width="100%"
        label="Label"
      />
    </SelectWrapper>
  );
};
