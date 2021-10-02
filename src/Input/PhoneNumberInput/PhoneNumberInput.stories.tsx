import React, { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import {
  Props,
  PhoneNumberInput,
  PhoneNumber,
  CallingCodeOption,
} from './PhoneNumberInput';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Input/PhoneNumberInput',
  component: PhoneNumberInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const callingCodeOptions: CallingCodeOption[] = [
  { label: 'Singapore', callingCode: 65, isFeatured: true },
  { label: 'Afghanistan', callingCode: 93, isFeatured: false },
];

const Template: ComponentStory<typeof PhoneNumberInput> = (
  args: Partial<Props>
) => {
  const [value, setValue] = useState<PhoneNumber>({
    callingCode: 123,
    significantNumber: null,
  });
  const [filterInput, setFilterInput] = useState<string | null>(null);

  const options = filterInput
    ? callingCodeOptions.filter(
        option =>
          option.label.toLowerCase().includes(filterInput) ||
          option.callingCode.toString().includes(filterInput)
      )
    : callingCodeOptions;

  console.log({ args });
  return (
    <PhoneNumberInput
      value={value}
      callingCodeOptions={options}
      label=""
      featuredOptionsLabel=""
      otherOptionsLabel=""
      callingCodePlaceholder=""
      callingCodeInputPlaceholder=""
      callingCodeNoOptionsLabel=""
      {...args}
      onChange={setValue}
      onInputChange={setFilterInput}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
