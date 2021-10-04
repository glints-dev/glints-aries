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
  decorators: [
    Story => (
      <BaseContainer style={{ height: '200px' }}>{Story()}</BaseContainer>
    ),
  ],
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
  const [filterInput, setFilterInput] = useState<string>('');

  const options = filterInput
    ? callingCodeOptions.filter(
        option =>
          option.label.toLowerCase().includes(filterInput.toLowerCase()) ||
          option.callingCode.toString().includes(filterInput.toLowerCase())
      )
    : callingCodeOptions;

  return (
    <>
      <p>
        The phone number is +{value.callingCode || '??'}{' '}
        {value.significantNumber || '???'}
      </p>
      <PhoneNumberInput
        value={value}
        callingCodeOptions={options}
        filterValue={filterInput}
        label="Type your phone number"
        featuredOptionsLabel=""
        otherOptionsLabel=""
        callingCodePlaceholder="??"
        callingCodeFilterInputPlaceholder="Type country code or country name"
        callingCodeNoOptionsLabel=""
        {...args}
        onChange={setValue}
        onInputChange={setFilterInput}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
