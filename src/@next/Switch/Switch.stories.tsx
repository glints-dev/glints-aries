import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Switch } from './Switch';

(Switch as React.FunctionComponent).displayName = 'Switch';

export default {
  title: '@next/Switch',
  component: Switch,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story = args => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <>
      <div>The checkbox checked is {checked ? 'true' : 'false'}</div>
      <div>
        <Switch
          {...args}
          value={'switch'}
          onChange={() => setChecked(!checked)}
        />
      </div>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {};
