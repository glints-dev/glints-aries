import React, { useEffect, useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import {
  Props,
  PhoneNumberInput,
  PhoneNumber,
  CallingCodeOption,
} from './PhoneNumberInput';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Tag } from '../..';

export default {
  title: 'Input/PhoneNumberInput',
  component: PhoneNumberInput,
  decorators: [
    Story => (
      <BaseContainer style={{ height: '400px' }}>{Story()}</BaseContainer>
    ),
  ],
} as Meta;

const callingCodeOptions: CallingCodeOption[] = [
  { label: 'Malaysia', callingCode: 60, isFeatured: true },
  { label: 'Indonesia', callingCode: 62, isFeatured: true },
  { label: 'Singapore', callingCode: 65, isFeatured: true },
  { label: 'Taiwan', callingCode: 886, isFeatured: true },
  { label: 'Vietnam', callingCode: 84, isFeatured: true },
  { label: 'Afghanistan', callingCode: 93, isFeatured: false },
  { label: 'Albania', callingCode: 355, isFeatured: false },
  { label: 'Algeria', callingCode: 213, isFeatured: false },
  { label: 'Germany', callingCode: 42, isFeatured: false },
  { label: 'United States', callingCode: 1, isFeatured: false },
];

interface StoryProps {
  initialSignificantNumber: string;
  initialFilterInput: string;
  filterDelayMs: number;
}

const Template: ComponentStory<typeof PhoneNumberInput> = (
  args: Partial<Props> & Partial<StoryProps>
) => {
  const [value, setValue] = useState<PhoneNumber>({
    callingCode: 65,
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

  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function simulateLoadingOnFilterInputChange() {
      if (args.filterDelayMs && filterInput) {
        setIsLoading(true);
        const stopLoading = () => setIsLoading(false);
        const timeout = setTimeout(stopLoading, args.filterDelayMs);
        return () => {
          clearTimeout(timeout);
          stopLoading();
        };
      }
    },
    [args.filterDelayMs, filterInput]
  );

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
        isLoadingCallingCodeOptions={isLoading}
        label="Mobile Number"
        featuredOptionsLabel="Frequently Used"
        otherOptionsLabel="The Rest Of The World"
        callingCodeFilterInputPlaceholder="Type country code or country name"
        callingCodeNoOptionsLabel={`Sorry, there are no results for country ${filterInput}. Please try again.`}
        error={error}
        {...args}
        onChange={setValue}
        onInputChange={setFilterInput}
        onBlur={console.log}
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

export const Loading = Template.bind({});
Loading.args = { filterDelayMs: 1000 };

export const WithAddon = Template.bind({});
WithAddon.args = { addon: <Tag>I am an addon :)</Tag> };
