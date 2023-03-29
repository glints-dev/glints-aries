import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { InlineError } from '../InlineError';

import { Select, SelectProps } from './Select';
import { NonSearchableMultiSelect } from './selectStoryHelper/NonSearchableMultiSelect';
import { SearchableSelect } from './selectStoryHelper/Searchable';
import { SingleSelect } from './selectStoryHelper/NonSearchableSingleSelect';

(Select as React.FunctionComponent<SelectProps>).displayName = 'Select';

export default {
  title: '@next/Select',
  component: Select,
  subcomponents: {
    'Select.Label': Select.Label,
    'Select.ActivatorTextInput': Select.ActivatorTextInput,
    'Select.ActivatorSelect': Select.ActivatorSelect,
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

const options = [
  {
    active: false,
    disabled: false,
    id: '1',
    label: 'All status',
    value: 'All status',
  },
  {
    active: false,
    disabled: false,
    id: '2',
    label: 'Completed',
    value: 'Completed',
  },
  {
    active: false,
    disabled: false,
    id: '3',
    label: 'Pending',
    value: 'Pending',
  },
  {
    active: false,
    disabled: false,
    id: '4',
    label: 'Expired',
    value: 'Expired',
  },
  {
    active: false,
    disabled: false,
    id: '5',
    label: 'Cancelled',
    value: 'Cancelled',
  },
];

const NonSearchableSingleSelectTemplate: Story<SelectProps> = args => {
  return <SingleSelect options={options} {...args} />;
};

export const NonSearchableSingleSelect = NonSearchableSingleSelectTemplate.bind(
  {}
);

NonSearchableSingleSelect.args = {};

NonSearchableSingleSelect.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

      const [selected, setSelected] = useState('');

      const handleSelect = ({ value }: { value: string }) => {
        setSelected(value);
      };
    
      return (
        <div style={{ width: '200px' }}>
          <Select.Label>Label</Select.Label>
          <Select
            options={options}
            activator={
              <Select.ActivatorSelect placeholder="Placeholder" value={selected} />
            }
            options={options}
            onSelect={handleSelect}
            selectedValues={[selected]}
          />
        </div>
      );
      `,
    },
  },
};

const NonSearchableMultiSelectTemplate: Story<SelectProps> = args => {
  return <NonSearchableMultiSelect options={options} {...args} allowMultiple />;
};

export const NonSearchableAllowMulti = NonSearchableMultiSelectTemplate.bind(
  {}
);

NonSearchableAllowMulti.args = {};

NonSearchableAllowMulti.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

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
            allowMultiple
            activator={
              <Select.ActivatorSelect
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
      `,
    },
  },
};

const WithErrorNonSearchableTemplate: Story<SelectProps> = args => {
  return <SingleSelect options={options} {...args} />;
};

export const WithErrorNonSearchable = WithErrorNonSearchableTemplate.bind({});

WithErrorNonSearchable.args = {
  hasError: true,
};

WithErrorNonSearchable.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

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
            allowMultiple
            activator={
              <Select.ActivatorSelect
                disabled={disabled}
                placeholder="Placeholder"
                onRemoveTag={removeTag}
              />
            }
            hasError
            options={options}
            onSelect={handleSelect}
            selectedValues={selected}
          />
        </div>
      );
      `,
    },
  },
};

const NonSearchableDisabledTemplate: Story<SelectProps> = args => {
  return <SingleSelect options={options} {...args} disabled />;
};

export const NonSearchableDisabled = NonSearchableDisabledTemplate.bind({});

NonSearchableDisabledTemplate.args = {};

NonSearchableDisabledTemplate.parameters = {
  docs: {
    source: {
      code: `
      const options = [
        {
          active: false,
          disabled: false,
          id: '1',
          label: 'All status',
          value: 'All status',
        },
        {
          active: false,
          disabled: false,
          id: '2',
          label: 'Completed',
          value: 'Completed',
        },
        {
          active: false,
          disabled: false,
          id: '3',
          label: 'Pending',
          value: 'Pending',
        },
        {
          active: false,
          disabled: false,
          id: '4',
          label: 'Expired',
          value: 'Expired',
        },
        {
          active: false,
          disabled: false,
          id: '5',
          label: 'Cancelled',
          value: 'Cancelled',
        },
      ];

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
            allowMultiple
            activator={
              <Select.ActivatorSelect
                disabled={disabled}
                placeholder="Placeholder"
                onRemoveTag={removeTag}
              />
            }
            disabled
            options={options}
            onSelect={handleSelect}
            selectedValues={selected}
          />
        </div>
      );
      `,
    },
  },
};

const slicedCountries = countries.slice(0, 5);

const SearchableMultiSelectTemplate: Story<SelectProps> = args => {
  return <SearchableSelect data={slicedCountries} {...args} />;
};

export const SearchableMultiSelect = SearchableMultiSelectTemplate.bind({});

SearchableMultiSelect.args = {
  allowMultiple: true,
};

SearchableMultiSelect.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Malaysia', value: 'Malaysia' },
        { label: 'Singapore', value: 'Singapore' },
        { label: 'Taiwan', value: 'Taiwan' },
        { label: 'Vietnam', value: 'Vietnam' },
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
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
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
        <div style={{ maxWidth: '600px' }}>
          <Select.Label>Label</Select.Label>
          <Select
            allowMultiple
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
      `,
    },
  },
};

const MultiSelectScrollableTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const MultiSelectScrollable = MultiSelectScrollableTemplate.bind({});

MultiSelectScrollable.args = {
  allowMultiple: true,
  scrollable: true,
};

MultiSelectScrollable.parameters = {
  docs: {
    source: {
      code: `
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
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
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
        <div style={{ maxWidth: '600px' }}>
          <Select.Label>Label</Select.Label>
          <Select
            allowMultiple
            scrollable
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
      `,
    },
  },
};

const WithInlineErrorTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const WithInlineError = WithInlineErrorTemplate.bind({});

WithInlineError.args = {
  allowMultiple: true,
  scrollable: true,
  helpText: <InlineError text="Error message" />,
  hasError: true,
};

WithInlineError.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Malaysia', value: 'Malaysia' },
        { label: 'Singapore', value: 'Singapore' },
        { label: 'Taiwan', value: 'Taiwan' },
        { label: 'Vietnam', value: 'Vietnam' },
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
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
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
        <div style={{ maxWidth: '600px' }}>
          <Select.Label>Label</Select.Label>
          <Select
            allowMultiple
            hasError
            helpText={<InlineError text="Error message" />}
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
      `,
    },
  },
};

const SearchableDisabledTemplate: Story<SelectProps> = args => (
  <SearchableMultiSelect {...args} data={countries} />
);

export const SearchableDisabled = SearchableDisabledTemplate.bind({});

SearchableDisabled.args = {
  disabled: true,
};

SearchableDisabled.parameters = {
  docs: {
    source: {
      code: `
      const countries = [
        { label: 'Indonesia', value: 'Indonesia' },
        { label: 'Malaysia', value: 'Malaysia' },
        { label: 'Singapore', value: 'Singapore' },
        { label: 'Taiwan', value: 'Taiwan' },
        { label: 'Vietnam', value: 'Vietnam' },
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
        const filterOptions = options.filter((option: Option) =>
          (option.label as string).match(filterRegex)
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
        <div style={{ maxWidth: '600px' }}>
          <Select.Label>Label</Select.Label>
          <Select
            allowMultiple
            disabled
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
      `,
    },
  },
};
