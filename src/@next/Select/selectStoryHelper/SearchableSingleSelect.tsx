import React, { useState } from 'react';
import { Option } from '../../Menu';
import { Select } from '../Select';

interface SearchableSingleSelectProps {
  data?: Option[];
}

export const SearchableSingle = ({
  data,
  ...args
}: SearchableSingleSelectProps) => {
  const [selected, setSelected] = useState('');

  const handleSelect = ({ value }: { value: string }) => {
    setSelected(value);
  };

  return (
    <Select
      {...args}
      onSelect={handleSelect}
      options={data}
      selectedValues={[selected]}
      width="600px"
      searchable
      label="Label"
    />
  );
};
