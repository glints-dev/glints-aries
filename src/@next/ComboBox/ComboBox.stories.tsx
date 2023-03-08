import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { ComboBox, ComboBoxProps } from './ComboBox';

(ComboBox as React.FunctionComponent<ComboBoxProps>).displayName = 'ComboBox';

export default {
  title: '@next/ComboBox',
  component: ComboBox,
  decorators: [
    Story => (
      <>
        <BaseContainer>{Story()}</BaseContainer>
        <div id="glints-portal-container"></div>
      </>
    ),
  ],
} as Meta;

const DefaultTemplate: Story<ComboBoxProps> = args => {
  const [value, setValue] = useState('');
  const options = [
    { label: 'Indonesia', value: 'Indonesia' },
    { label: 'Malaysia', value: 'Malaysia' },
    { label: 'Singapore', value: 'Singapore' },
    { label: 'Taiwan', value: 'Taiwan' },
    { label: 'Vietnam', value: 'Vietnam' },
  ];

  return (
    <div style={{ width: '500px' }}>
      <ComboBox
        {...args}
        activator={
          <ComboBox.TextInput
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        }
      >
        <ComboBox.OptionList options={options} />
      </ComboBox>
    </div>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {};
