import React, { useState } from 'react';
import { Select as GlintsSelect, SelectProps } from '../Select';
import { ActivatorSelectStyled } from './SelectStoryStyle';

export const Select = ({
  options,
  disabled,
  allowMultiple,
  ...args
}: SelectProps) => {
  const [selected, setSelected] = useState('');

  const handleSelect = ({ value }: { value: string }) => {
    setSelected(value);
  };

  return (
    <div style={{ width: '200px' }}>
      <GlintsSelect.Label>Label</GlintsSelect.Label>
      <GlintsSelect
        {...args}
        activator={
          <ActivatorSelectStyled
            disabled={disabled}
            placeholder="Placeholder"
            value={selected}
          />
        }
        allowMultiple={allowMultiple}
        options={options}
        onSelect={handleSelect}
        selectedValues={[selected]}
      />
    </div>
  );
};
