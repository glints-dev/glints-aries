import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

import styled from 'styled-components';

const TestBox = styled.div<{ fontSize: string }>`
  div {
    font-size: ${({ fontSize }) => fontSize};
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export default {
  title: 'General/Checkbox',
  component: Checkbox,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  id: 'software-engineer',
  value: 'software-engineer',
  label: 'Software Engineer',
};

export const Bordered = Template.bind({});
Bordered.args = {
  id: 'bordered-engineer',
  value: 'bordered-engineer',
  label: 'Bordered Engineer',
  border: true,
};

export const Sizes = Template.bind({});
Sizes.args = {
  id: 'large-engineer',
  value: 'large-engineer',
  label: 'Large Engineer',
  size: 'large',
};

const FontSizeStory: Story<CheckboxProps> = args => (
  <div>
    <TestBox fontSize="10px">
      <Checkbox {...args} checked={true} id="10px" value="10px" label="10px" />
    </TestBox>
    <TestBox fontSize="14px">
      <Checkbox {...args} checked={true} id="14px" value="14px" label="14px" />
    </TestBox>
    <TestBox fontSize="18px">
      <Checkbox {...args} checked={true} id="18px" value="18px" label="18px" />
    </TestBox>
    <TestBox fontSize="48px">
      <Checkbox {...args} checked={true} id="48px" value="48px" label="48px" />
    </TestBox>
  </div>
);
export const FontSize = FontSizeStory.bind({});
FontSize.parameters = {
  docs: {
    description: {
      story: `If you change the checkbox root div's font-size, the entire checkbox will adjust its size accordingly.`,
    },
  },
};
