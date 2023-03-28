import React, { useCallback, useEffect, useState } from 'react';
import { Blue } from '../../utilities/colors';
import { space8 } from '../../utilities/spacing';
import { Select } from '../Select';
import { OptionType } from '../SelectOption';
import { StyledTag } from './SelectStoryStyle';

interface SearchableProps {
  data?: OptionType[];
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
    const filterOptions = options.filter(option =>
      option.label.match(filterRegex)
    );
    setOptions(filterOptions);
  };

  const handleSelect = ({ value }: { value: string }) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const removeTag = useCallback(
    tag => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions]
  );

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
    <div style={{ maxWidth: '600px' }}>
      <Select.Label>Label</Select.Label>
      <Select
        {...args}
        activator={
          <Select.ActivatorTextInput
            value={inputValue}
            onChange={(value: string) => handleInputChange(value)}
            placeholder="Search"
          />
        }
        onSelect={handleSelect}
        options={options}
        selectedValues={selectedOptions}
      />
      <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
    </div>
  );
};
