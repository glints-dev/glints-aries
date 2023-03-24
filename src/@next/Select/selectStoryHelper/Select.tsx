import React, { useState } from 'react';
import { Option as MenuOption } from '../../Menu';
import { ActivatorSelectProps } from '../components/Activator/ActivatorSelect';
import { Select as GlintsSelect } from '../Select';
import { ActivatorSelectStyled } from './SelectStoryStyle';

interface SelectProps extends ActivatorSelectProps {
  options?: MenuOption[];
  allowMultiple?: boolean;
}
export const Select = ({
  options,
  disabled,
  hasError,
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
            hasError={hasError}
            placeholder="Placeholder"
            value={selected}
          />
        }
      >
        <GlintsSelect.Menu
          allowMultiple={allowMultiple}
          options={options}
          onClick={handleSelect}
          selectedValues={[selected]}
        />
      </GlintsSelect>
    </div>
  );
};
