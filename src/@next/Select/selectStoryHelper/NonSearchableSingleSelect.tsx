import React, { useState } from 'react';
import { Select, SelectProps } from '../Select';
import { ActivatorSelectStyled } from './SelectStoryStyle';

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
    <div style={{ width: '200px' }}>
      <Select.Label>Label</Select.Label>
      <Select
        {...args}
        activator={
          <ActivatorSelectStyled placeholder="Placeholder" value={selected} />
        }
        allowMultiple={allowMultiple}
        disabled={disabled}
        options={options}
        onSelect={handleSelect}
        selectedValues={[selected]}
      />
    </div>
  );
};
