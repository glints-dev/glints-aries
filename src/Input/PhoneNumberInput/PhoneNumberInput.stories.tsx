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

interface StoryProps {
  initialSignificantNumber: string;
  initialFilterInput: string;
}

const Template: ComponentStory<typeof PhoneNumberInput> = (
  args: Partial<Props> & Partial<StoryProps>
) => {
  const [value, setValue] = useState<PhoneNumber>({
    callingCode: 123,
    significantNumber: args.initialSignificantNumber || null,
  });
  const [filterInput, setFilterInput] = useState<string>(
    args.initialFilterInput || ''
  );

  const options = filterInput
    ? callingCodeOptions.filter(
        option =>
          option.label.toLowerCase().includes(filterInput.toLowerCase()) ||
          option.callingCode.toString().includes(filterInput.toLowerCase())
      )
    : callingCodeOptions;

  const error =
    value.significantNumber &&
    /[a-zA-Z]/g.test(value.significantNumber) &&
    'Please include numbers only.';

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
        callingCodeNoOptionsLabel={`Sorry, there are no results for country ${filterInput}. Please try again.`}
        error={error}
        {...args}
        onChange={setValue}
        onInputChange={setFilterInput}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = { initialSignificantNumber: '1234 foo' };

export const NoCallingCodeOptions = Template.bind({});
NoCallingCodeOptions.args = { initialFilterInput: 'Buxdehude' };
