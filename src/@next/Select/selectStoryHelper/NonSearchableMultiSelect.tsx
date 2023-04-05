import React, { useState } from 'react';
import { Select, SelectProps } from '../Select';

export const NonSearchableMultiSelect = ({
  options,
  disabled,
  ...args
}: SelectProps) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = ({ value }: { value: string }) => {
    if (!selected.includes(value)) {
      setSelected([...selected, value]);
      return;
    }

    setSelected(selected.filter(option => option !== value));
  };

  const removeTag =
    ({ option }: { option: string }) =>
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();

      const options = [...selected];
      options.splice(options.indexOf(option), 1);
      setSelected(options);
    };

  return (
    <Select
      {...args}
      disabled={disabled}
      onRemoveTag={removeTag}
      options={options}
      onSelect={handleSelect}
      selectedValues={selected}
      width="400px"
    />
  );
};
