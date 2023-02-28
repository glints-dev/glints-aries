import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Checkbox } from '../Checkbox';
import { Switch } from './Switch';

(Switch as React.FunctionComponent).displayName = 'Switch';

export default {
  title: '@next/Switch',
  component: Switch,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const DefaultTemplate: Story = args => {
  const [checked, setChecked] = useState(args.checked);
  const [isDisabled, setIsDisabled] = useState(args.disabled);

  return (
    <>
      <div>The checkbox checked is {checked ? 'true' : 'false'}</div>
      <Checkbox
        label="Set disable"
        onChange={() => setIsDisabled(!isDisabled)}
      />
      <div>
        <Switch
          {...args}
          disabled={isDisabled}
          value={'switch'}
          onChange={() => setChecked(!checked)}
        />
      </div>
    </>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {};

const SwitchWithIconTemplate: Story = args => {
  const [checked, setChecked] = useState(args.checked);
  const [isDisabled, setIsDisabled] = useState(args.disabled);
  return (
    <>
      <div>The checkbox checked is {checked ? 'true' : 'false'}</div>
      <Checkbox
        label="Set disable"
        onChange={() => setIsDisabled(!isDisabled)}
      />
      <div>
        <Switch
          {...args}
          disabled={isDisabled}
          value={'switch'}
          onChange={() => setChecked(!checked)}
          withIcon={true}
        />
      </div>
    </>
  );
};

export const WithIcon = SwitchWithIconTemplate.bind({});

WithIcon.args = {};
