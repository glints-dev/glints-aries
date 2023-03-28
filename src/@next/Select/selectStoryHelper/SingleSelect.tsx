import React, { useState } from 'react';
import { Select as GlintsSelect, SelectProps } from '../Select';
import { ActivatorSelectStyled } from './SelectStoryStyle';

export const SingleSelect = ({
  options,
  allowMultiple,
  disabled,
  ...args
}: SelectProps) => {
  console.log('args', args, disabled);
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
