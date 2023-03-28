import React, { useCallback, useState } from 'react';
import { Select as GlintsSelect, SelectProps } from '../Select';
import { ActivatorSelectStyled } from './SelectStoryStyle';

export const NonSearchableMultiSelect = ({
  options,
  disabled,
  ...args
}: SelectProps) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = ({ value }: { value: string }) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(option => option !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const removeTag = useCallback(
    ({ option }: { option: string }) =>
      () => {
        console.log('option', option);
        const options = [...selected];
        options.splice(options.indexOf(option), 1);
        setSelected(options);
      },
    [selected]
  );

  console.log('selected', selected);
  return (
    <div>
      <GlintsSelect.Label>Label</GlintsSelect.Label>
      <GlintsSelect
        {...args}
        activator={
          <ActivatorSelectStyled
            disabled={disabled}
            placeholder="Placeholder"
            onRemoveTag={removeTag}
          />
        }
        options={options}
        onSelect={handleSelect}
        selectedValues={selected}
      />
    </div>
  );
};
