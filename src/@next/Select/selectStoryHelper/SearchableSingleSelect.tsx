import React, { useEffect, useState } from 'react';
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

export const SearchableSingleWithInputState = ({
  data,
  ...args
}: SearchableSingleSelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSelect = ({ value }: { value: string }) => {
    setSelected(value);
  };

  return (
    <Select
      {...args}
      loadingOptions
      onSelect={handleSelect}
      options={data}
      selectedValues={[selected]}
      searchableProps={{
        inputValue,
        onInputChange: (value: string) => handleInputChange(value),
      }}
      width="600px"
      label="Label"
    />
  );
};

const filterOptions = (str: string, data: Option[]) => {
  if (str === '') {
    return data;
  }

  const filterRegex = new RegExp(str, 'i');
  const filterOptions = data.filter((option: Option) =>
    (option.label as string).match(filterRegex)
  );

  return filterOptions;
};

const mockAsyncOptions = (str: string, data: Option[]) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const filteredOptions = filterOptions(str, data);
      resolve(filteredOptions);
    }, 1000);
  });
};

export const AsyncSearchableSingleWithInputState = ({
  data,
  ...args
}: SearchableSingleSelectProps) => {
  const [loading, setLoading] = useState(true);
  const [mockData, setMockData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');

  const handleInputChange = async (value: string) => {
    setInputValue(value);
  };

  const handleSelect = ({ value }: { value: string }) => {
    setSelected(value);
  };

  useEffect(() => {
    const fetchMockData = async () => {
      try {
        setLoading(true);
        const response = await mockAsyncOptions(inputValue, data);
        setMockData(response);
        console.log(response);

        setLoading(false);
        return response;
      } catch {
        setLoading(false);
      }
    };

    fetchMockData();
  }, [data, inputValue]);

  return (
    <Select
      {...args}
      loadingOptions={loading}
      onSelect={handleSelect}
      options={mockData}
      selectedValues={[selected]}
      searchableProps={{
        inputValue,
        onInputChange: (value: string) => handleInputChange(value),
      }}
      width="600px"
      label="Label"
    />
  );
};
