import { Meta, Story } from '@storybook/react';
import React, { useEffect } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { InlineErrorProps, InlineError } from './InlineError';
import { TextInput } from '../TextInput';

(InlineError as React.FunctionComponent<InlineErrorProps>).displayName =
  'InlineError';

export default {
  title: '@next/InlineError',
  component: InlineError,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const DefaultTemplate: Story<InlineErrorProps> = args => {
  return <InlineError {...args} />;
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  text: 'This field is required',
};

const WithInputTemplate: Story<InlineErrorProps> = args => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  useEffect(() => {
    if (value === '') {
      setError(args.text);
    } else {
      setError('');
    }
  }, [value, args.text]);

  return (
    <>
      <TextInput value={value} onChange={e => setValue(e)} error={!!error} />
      <InlineError style={{ marginTop: 4 }} text={error} />
    </>
  );
};

export const WithInput = WithInputTemplate.bind({});

WithInput.args = {
  text: 'This field is required',
};
