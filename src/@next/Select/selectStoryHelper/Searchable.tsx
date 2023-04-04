import React, { useEffect, useState } from 'react';
import { Option } from '../../Menu';
import { Blue } from '../../utilities/colors';
import { space8 } from '../../utilities/spacing';
import { Select } from '../Select';
import { StyledTag } from './SelectStoryStyle';

interface SearchableProps {
  data?: Option[];
}

export const SearchableSelect = ({ data, ...args }: SearchableProps) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  const [options, setOptions] = useState(data);

  const handleInputChange = (value: string) => {
    setInputValue(value);

    if (value === '') {
      setOptions(data);
      return;
    }

    const filterRegex = new RegExp(value, 'i');
    const filterOptions = options.filter((option: Option) =>
      (option.label as string).match(filterRegex)
    );
    setOptions(filterOptions);
  };

  const handleSelect = ({ value }: { value: string }) => {
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
      return;
    }

    setSelectedOptions(selectedOptions.filter(option => option !== value));
  };

  const removeTag = (tag: Option) => () => {
    const options = [...selectedOptions];
    options.splice(options.indexOf(tag), 1);
    setSelectedOptions(options);
  };

  const tagsMarkup = selectedOptions.map(option => (
    <StyledTag
      key={`option-${option}`}
      onRemove={removeTag(option)}
      textColor={Blue.S99}
    >
      {option}
    </StyledTag>
  ));

  useEffect(() => {
    if (options.length === 0) {
      setIsSearchEmpty(true);
    }

    if (options.length > 0 && isSearchEmpty === true) {
      setIsSearchEmpty(false);
    }
  }, [isSearchEmpty, options]);

  return (
    <div>
      <Select
        {...args}
        onSelect={handleSelect}
        options={options}
        selectedValues={selectedOptions}
        width="600px"
        searchableProps={{
          inputValue,
          onInputChange: (value: string) => handleInputChange(value),
        }}
        label="Label"
      />
      <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
    </div>
  );
};
