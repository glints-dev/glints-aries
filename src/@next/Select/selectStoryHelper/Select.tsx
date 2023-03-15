import React, { useState } from 'react';
import { Option as MenuOption } from '../../Menu';
import { ActivatorSelectProps } from '../components/Activator/ActivatorSelect';
import { Select as GlintsSelect } from '../Select';

interface SelectProps extends ActivatorSelectProps {
  options?: MenuOption[];
}
export const Select = ({
  options,
  disabled,
  hasError,
  value,
  ...args
}: SelectProps) => {
  const [selected, setSelected] = useState([]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <GlintsSelect.Label>Label</GlintsSelect.Label>
      <GlintsSelect
        {...args}
        activator={
          <GlintsSelect.ActivatorSelect
            disabled={disabled}
            hasError={hasError}
            placeholder="Placeholder"
            value={value}
          />
        }
      >
        <GlintsSelect.Menu
          options={options}
          onChange={setSelected}
          selectedValues={selected}
        />
      </GlintsSelect>
    </div>
  );
};
