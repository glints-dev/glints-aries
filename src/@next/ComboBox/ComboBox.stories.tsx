import { Meta, Story } from '@storybook/react';
import React, { useCallback, useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Blue } from '../utilities/colors';
import { space8 } from '../utilities/spacing';

import { ComboBox, ComboBoxProps } from './ComboBox';
import { StyledTag } from './comboboxStoryHelper/TagStyle';

(ComboBox as React.FunctionComponent<ComboBoxProps>).displayName = 'ComboBox';

export default {
  title: '@next/ComboBox',
  component: ComboBox,
  decorators: [
    Story => (
      <>
        <BaseContainer>{Story()}</BaseContainer>
        <div id="glints-portal-container"></div>
      </>
    ),
  ],
} as Meta;

const countries = [
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Malaysia', value: 'Malaysia' },
  { label: 'Singapore', value: 'Singapore' },
  { label: 'Taiwan', value: 'Taiwan' },
  { label: 'Vietnam', value: 'Vietnam' },
];

const MultiSelectTemplate: Story<ComboBoxProps> = args => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
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
    options.length > 0
      ? options.map(option => {
          const { label, value } = option;

          return (
            <ComboBox.Option
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

  return (
    <div style={{ width: '500px' }}>
      <ComboBox.Label>Label</ComboBox.Label>
      <ComboBox
        {...args}
        activator={
          <ComboBox.TextInput
            value={inputValue}
            onChange={(value: string) => handleInputChange(value)}
          />
        }
      >
        <ComboBox.OptionList onSelect={handleSelect}>
          {optionsMarkup}
        </ComboBox.OptionList>
      </ComboBox>
      <div style={{ paddingTop: space8 }}>{tagsMarkup}</div>
    </div>
  );
};

export const MultiSelect = MultiSelectTemplate.bind({});

MultiSelect.args = {
  allowMultiple: true,
};
