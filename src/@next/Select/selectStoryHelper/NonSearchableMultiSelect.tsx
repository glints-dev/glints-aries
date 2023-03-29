import React, { useCallback, useState } from 'react';
import { Select, SelectProps } from '../Select';
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
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();

        const options = [...selected];
        options.splice(options.indexOf(option), 1);
        setSelected(options);
      },
    [selected]
  );

  return (
    <div>
      <Select.Label>Label</Select.Label>
      <Select
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
