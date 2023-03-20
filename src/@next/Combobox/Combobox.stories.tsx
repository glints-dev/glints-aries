import { Meta, Story } from '@storybook/react';
import React from 'react';

import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Option, OptionList, TextInput } from './components';
import { Combobox, ComboboxProps } from './Combobox';
import { ComboboxMultiSelect } from './comboboxStoryHelper/ComboboxMultuSelect';

(Combobox as React.FunctionComponent<ComboboxProps>).displayName = 'Combobox';

export default {
  title: '@next/Combobox',
  component: Combobox,
  subcomponents: {
    'Combobox.Option': Option,
    'Combobox.OptionList': OptionList,
    'Combobox.TextInput': TextInput,
  },
  decorators: [withGlintsPortalContainer],
} as Meta;

const countries = [
  { label: 'Cambodia', value: 'Cambodia' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Malaysia', value: 'Malaysia' },
  { label: 'Philippines', value: 'Philippines' },
  { label: 'Singapore', value: 'Singapore' },
  { label: 'Taiwan', value: 'Taiwan' },
  { label: 'Thailand', value: 'Thailand' },
  { label: 'Vietnam', value: 'Vietnam' },
];

const slicedCountries = countries.slice(0, 5);

const MultiSelectTemplate: Story<ComboboxProps> = args => (
  <ComboboxMultiSelect {...args} countries={slicedCountries} />
);

export const MultiSelect = MultiSelectTemplate.bind({});

MultiSelect.args = {
  allowMultiple: true,
};

MultiSelect.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Malaysia', value: 'Malaysia' },
        { label: 'Singapore', value: 'Singapore' },
        { label: 'Taiwan', value: 'Taiwan' },
      ];

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
        options.length > 0
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
          key={\`option-\${option}\`}
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
        <div style={{ width: '500px' }}>
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
      `,
    },
  },
};

const MultiSelectScrollableTemplate: Story<ComboboxProps> = args => (
  <ComboboxMultiSelect {...args} countries={countries} />
);

export const MultiSelectScrollable = MultiSelectScrollableTemplate.bind({});

MultiSelectScrollable.args = {
  allowMultiple: true,
};
