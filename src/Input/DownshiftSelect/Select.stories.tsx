import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Select, Props, ItemProps, Item } from './Select';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import styled from 'styled-components';

import * as Components from './SelectStyle';
import { SecondaryColor } from '../../Utils/Colors';
import { Button } from '../../General/Button/Button';
import { Box } from '../../Layout/Box';
import { identity, sample, sampleSize } from 'lodash';
import { TextField } from '../..';

const StoryContainer = styled(BaseContainer)`
  min-height: 250px;
`;

export default {
  title: 'Input/DownshiftSelect',

  component: Select,
  argTypes: {
    components: {
      control: null,
    },
    transformFunction: {
      control: null,
    },
    items: {
      control: null,
    },
    downshift: {
      control: null,
    },
    selectedItem: {
      control: null,
    },
    inputValue: {
      control: null,
    },
    onInputValueChange: {
      control: null,
    },
  },
  decorators: [Story => <StoryContainer>{Story()}</StoryContainer>],
} as Meta;

const items: Item[] = [
  'Software Engineer',
  'Software Tester',
  'Back-end Engineer',
  'Front-end Engineer',
].map(label => ({ value: label, label }));

const componentNames = Object.keys(Components).filter(
  name => !name.startsWith('_')
);

const CustomLabel = styled.label`
  color: green;
`;

const CustomStyledItem = styled(Select.Components.Item)`
  display: flex;
  justify-content: space-between;
  &[aria-selected='true'] {
    color: ${SecondaryColor.darkgreen};
  }
`;

const CustomItem: React.FC<ItemProps> = props => {
  return (
    <CustomStyledItem {...props}>
      <span>{props.children}</span>
      <code>{JSON.stringify(props.item)}</code>
    </CustomStyledItem>
  );
};

const Template: Story<Props> = args => (
  <Select
    items={items}
    {...args}
    inputValue={undefined}
    onInputValueChange={undefined}
    onClear={undefined}
    onIsOpenChange={undefined}
    onSelectedItemChange={undefined}
  />
);

export const Interactive = Template.bind({});
Interactive.args = { label: 'Select An Item', helperText: 'Type to filter' };
Interactive.parameters = {
  docs: {
    description: {
      story: `You can pass a transformFunction to make the combobox filter the provided items according to custom logic. In the example above, the filter function uses String.includes instead of the default String.startsWith.`,
    },
  },
};

export const RealisticExample: Story<Props> = () => {
  const [selectedItem, setSelectedItem] = useState<Item>(null);
  return (
    <>
      <Select
        label="Select a Job"
        items={items}
        selectedItem={selectedItem}
        onSelectedItemChange={setSelectedItem}
      />
      <Box mt={16}>
        Selected Job: {selectedItem ? selectedItem.label : 'none'}
      </Box>
    </>
  );
};
RealisticExample.parameters = {
  docs: {
    description: {
      story:
        'The Select is built with async items in mind. Just update the items at any time.',
    },
  },
};

export const TransformFunctionForCustomFilter = Template.bind({});
TransformFunctionForCustomFilter.args = {
  transformFunction: (items: Item[], inputValue: string) =>
    items.filter(item =>
      item.label.toLowerCase().startsWith(inputValue.toLowerCase())
    ),
};
TransformFunctionForCustomFilter.parameters = {
  docs: {
    description: {
      story: `You can pass a transformFunction to make the combobox filter the provided items according to custom logic. In the example above, the filter function uses String.startsWith instead of the default String.includes.`,
    },
  },
};

export const TransformFunctionForNoFilter = Template.bind({});
TransformFunctionForNoFilter.args = {
  transformFunction: (items: Item[]) => items,
};
TransformFunctionForNoFilter.parameters = {
  docs: {
    description: {
      story: `You can pass an identity function as transformFunction to disable filtering (useful if you are controlling the items in an external state).`,
    },
  },
};

export const CustomComponents = Template.bind({});
CustomComponents.args = {
  components: { Label: CustomLabel, Item: CustomItem },
};
CustomComponents.parameters = {
  docs: {
    description: {
      story: `You can override the components that comprise the Combobox. These components are available at the moment: ${componentNames.map(
        name => `${name}`
      )}`,
    },
  },
};

export const RemoveToggleButton = Template.bind({});
RemoveToggleButton.args = {
  components: { ToggleButton: () => null as React.FC },
};
RemoveToggleButton.parameters = {
  docs: {
    description: {
      story:
        'Remove the toggle button by passing components={{ ToggleButton: () => null }}',
    },
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  isLoading: true,
};

export const InitiallyOpen = Template.bind({});
InitiallyOpen.args = {
  isOpenInitially: false,
};
InitiallyOpen.parameters = {
  docs: {
    description: {
      story:
        'Pass isOpenInitially=true to open and focus the Select on render. (Set to false in this story because it would steal focus from the other stories otherwise).',
    },
  },
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'I am helpful text',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'I am placeholder',
};

export const Label = Template.bind({});
Label.args = {
  label: 'I am label',
};

export const DownshiftOptions = Template.bind({});
DownshiftOptions.args = {
  downshift: {
    defaultHighlightedIndex: 2,
  },
};
DownshiftOptions.parameters = {
  docs: {
    description: {
      story:
        'If the options afforded by the Select component are not enough, you can also use the downshift prop to pass custom options to the internal useCombobox hook. You can read the documentation <a href="https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md">here</a>. Use this with caution, future versions of this component might break your custom functionality.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Select An Option',
  placeholder: 'I am placeholder',
  helperText: 'I am helper text',
};

export const DisableTyping = Template.bind({});
DisableTyping.args = {
  disableTyping: true,
  transformFunction: identity,
};
DisableTyping.parameters = {
  docs: {
    description: {
      story:
        "With disableTyping=true, the internal input will be set to readonly. This is helpful when there's only a small or fixed amount of items. This can be combined with setting transformFunction to the identity function to disable the filtering after an option has been chosen.",
    },
  },
};

export const DisabledOptions = Template.bind({});
DisabledOptions.args = {
  items: items.map(item => ({ ...item, disabled: true })),
};
DisabledOptions.parameters = {
  docs: {
    description: {
      story: "Use the items' disabled prop to disable individual items.",
    },
  },
};

export const ControlledSelectedItem: Story<Props> = () => {
  const [selectedItem, setSelectedItem] = useState<Item>(null);
  return (
    <>
      <Box mb={8}>
        <Button
          variant="solid-blue"
          onClick={() => setSelectedItem(sample(items))}
        >
          Select Random Item
        </Button>
        &nbsp;&nbsp;
        <Button variant="solid-blue" onClick={() => setSelectedItem(null)}>
          Reset
        </Button>
        &nbsp;&nbsp;
        {selectedItem
          ? `Selected item is ${selectedItem.label}`
          : 'No item selected'}
      </Box>
      <Select
        items={items}
        selectedItem={selectedItem}
        onSelectedItemChange={(item: Item) => setSelectedItem(item)}
      />
    </>
  );
};
ControlledSelectedItem.parameters = {
  docs: {
    description: {
      story:
        'Use selectedItem and setSelectedItem to control the currently selected item. <strong>In many cases, you will want to use this to react to selections made by the user.</strong> Use null as the controlled selectedItem when no item is selected: So if you want to have a controlled Select with no item selected by default, use useState(null).',
    },
  },
};

export const ControlledIsOpen: Story<Props> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Box mb={8}>
        <Button variant="solid-blue" onClick={() => setIsOpen(true)}>
          Open Select
        </Button>
        &nbsp;&nbsp;Select is {isOpen ? 'open' : 'closed'}
      </Box>
      <Select
        items={items}
        isOpen={isOpen}
        onIsOpenChange={(newState: boolean) => setIsOpen(newState)}
      />
    </>
  );
};
ControlledIsOpen.parameters = {
  docs: {
    description: {
      story:
        "Use isOpen and onIsOpenChange to control the state of the Select's menu. Note that clicking outside of the Select closes the select (calls onIsOpenChange with false) so if you're trying to build a 'toggle' button, clicking that button will first close the menu.",
    },
  },
};

export const ControlledInputValue: Story<Props> = () => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <>
      <Box mb={8}>
        <TextField
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
          placeholder="foo"
        />
      </Box>
      <Box mb={8}>
        Input value is <code>{JSON.stringify(inputValue)}</code>
      </Box>
      <Select
        items={items}
        inputValue={inputValue}
        onInputValueChange={(inputValue: string) => setInputValue(inputValue)}
      />
    </>
  );
};
ControlledInputValue.parameters = {
  docs: {
    description: {
      story:
        "Use inputValue and setInputValue to control the input value (this value is used for the search function, don't confuse it with selectedItem",
    },
  },
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Username',
  invalid: true,
  helperText: 'Username is required',
};
Invalid.parameters = {
  docs: {
    description: {
      story:
        'Use invalid=true to toggle the Select into an error state. It is recommended that you use helperText to describe the error when you do this.',
    },
  },
};

export const DisableAutocomplete = Template.bind({});
DisableAutocomplete.args = {
  autocomplete: 'off',
};
DisableAutocomplete.parameters = {
  docs: {
    description: {
      story:
        "Intrinsic props are usually passed down to the internal input element, so to disable autocompletion just pass autocomplete='off'.",
    },
  },
};

export const FocusCallbacks: Story<Props> = () => {
  const [onFocusCalls, setOnFocusCalls] = useState<number>(0);
  const [onBlurCalls, setOnBlurCalls] = useState<number>(0);
  return (
    <>
      <Box mb={8}>
        <code>onFocus</code> called {onFocusCalls} times.
      </Box>
      <Box mb={8}>
        <code>onBlur</code> called {onBlurCalls} times.
      </Box>
      <Select
        items={items}
        data-test="foo"
        onFocus={() => setOnFocusCalls(onFocusCalls + 1)}
        onBlur={() => setOnBlurCalls(onBlurCalls + 1)}
      />
    </>
  );
};
FocusCallbacks.parameters = {
  docs: {
    description: {
      story:
        'Intrinsic props are usually passed down to the internal input element, so you can simply use onFocus and onBlur to capture those events.',
    },
  },
};

export const OnClearCallback: Story<Props> = () => {
  const [onClearCalls, setOnClearCalls] = useState<number>(0);
  return (
    <>
      <Box mb={8}>
        <code>onClear</code> called {onClearCalls} times.
      </Box>
      <Select items={items} onClear={() => setOnClearCalls(onClearCalls + 1)} />
    </>
  );
};
OnClearCallback.parameters = {
  docs: {
    description: {
      story: 'Use onClear to capture the when the clear-button is clicked.',
    },
  },
};

const ShortContainer = styled(Select.Components.Container)`
  max-width: 280px;
`;

export const ConfigurableWidth = Template.bind({});
ConfigurableWidth.args = {
  components: { Container: ShortContainer },
  items: [
    ...items,
    {
      ...items[0],
      label: "This Option Is Long! I Hope It Doesn't Get Truncated!",
    },
  ],
};
ConfigurableWidth.parameters = {
  docs: {
    description: {
      story:
        "By default, the select has a 100% width. To change the width, just pass a custom Container subcomponent. Note that you might also have to adjust other subcomponent's styles if you want to make it really short (less than 300px).",
    },
  },
};

const SmallContainer = styled(Select.Components.Container)`
  max-width: 200px;
  font-size: 11px;
`;

export const Small = Template.bind({});
Small.args = {
  label: "I'm so small!",
  placeholder: 'Try typing here :-P',
  components: { Container: SmallContainer },
  helperText: 'Why would you do this to me?',
};
Small.parameters = {
  docs: {
    description: {
      story:
        "<p>By default, the Select dictates a font-size of 16px that cascades through (almost) all sub-components. Appropriate spaces are defined using em, so if you want to resize the Select, just change the container's font-size.</p><p>The exception to the 16px default is the helper text, which also just uses an em relative value.</p>",
    },
  },
};

const StyledEmptyList = styled(Select.Components.EmptyList)`
  display: flex;
  justify-content: center;
  color: green;
`;

export const EmptyListText = Template.bind({});
EmptyListText.args = {
  emptyListText: '¯\\_(ツ)_/¯',
  components: {
    EmptyList: StyledEmptyList,
  },
};
EmptyListText.parameters = {
  docs: {
    description: {
      story:
        'When, after applying the transformFunction the list of items is empty, a special message will be shown in the dropdown. This message can be customized with emptyListText. You can also style this',
    },
  },
};

export const AsyncItems: Story<Props> = () => {
  const [sampleItems, setSampleItems] = useState<Item[]>(sampleSize(items, 2));
  return (
    <>
      <Box mb={8}>
        <Button
          variant="solid-blue"
          onClick={() => setSampleItems(sampleSize(items, 2))}
        >
          Randomize Items
        </Button>
      </Box>
      <Select items={sampleItems} />
    </>
  );
};
AsyncItems.parameters = {
  docs: {
    description: {
      story:
        'The Select is built with async items in mind. Just update the items at any time.',
    },
  },
};
