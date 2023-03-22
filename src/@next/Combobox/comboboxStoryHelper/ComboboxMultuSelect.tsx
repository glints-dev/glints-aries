import React, { useCallback, useEffect, useState } from 'react';
import { Blue } from '../../utilities/colors';
import { space8 } from '../../utilities/spacing';
import { Combobox } from '../Combobox';
import { OptionType } from '../components/OptionList/Option';
import { StyledTag } from './TagStyle';

interface ComboboxMultiSelectProps {
  countries: OptionType[];
}
export const ComboboxMultiSelect = ({
  countries,
  ...args
}: ComboboxMultiSelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  const [options, setOptions] = useState(countries);

  const handleInputChange = (value: string) => {
    setInputValue(value);

    if (value === '') {
      setOptions(countries);
      return;
    }

    const filterRegex = new RegExp(value, 'i');
    const filterOptions = options.filter(country =>
      country.label.match(filterRegex)
    );
    setOptions(filterOptions);
  };

  const handleSelect = (selected: string) => {
    if (selectedOptions.includes(selected)) {
      setSelectedOptions(selectedOptions.filter(option => option !== selected));
    } else {
      setSelectedOptions([...selectedOptions, selected]);
    }
  };

  const optionsMarkup =
    options?.length > 0
      ? options.map(option => {
          const { label, value } = option;

          return (
            <Combobox.Option
              key={value}
              label={label}
              value={value}
              selected={selectedOptions.includes(value)}
            />
          );
        })
      : null;

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
    <div style={{ maxWidth: '500px' }}>
      <Combobox.Label>Label</Combobox.Label>
      <Combobox
        {...args}
        activator={
          <Combobox.TextInput
            value={inputValue}
            onChange={(value: string) => handleInputChange(value)}
            placeholder="Search"
          />
        }
      >
        <Combobox.OptionList onSelect={handleSelect} isEmpty={isSearchEmpty}>
          {optionsMarkup}
        </Combobox.OptionList>
      </Combobox>
      <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
    </div>
  );
};
