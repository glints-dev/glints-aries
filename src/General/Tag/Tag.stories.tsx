import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tag, { Props } from './Tag';

import { CloseIcon } from '../Icon/components';
import styled from 'styled-components';

const TagStack = styled('div')`
  div {
    margin-right: 20px;
  }
`;

export default {
  title: 'General/Tag',
  component: Tag,
  argTypes: {
    icon: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<Props> = args => <Tag {...args}>hello</Tag>;

export const Interactive = Template.bind({});
Interactive.args = {
  icon: <CloseIcon onClick={() => alert('Clicked!')}></CloseIcon>,
  onClick: () => alert('Clicked!'),
};

export const BasicTag: Story<Props> = () => (
  <TagStack>
    <Tag>Default</Tag>
    <Tag block>Block</Tag>
    <Tag outline>Outline</Tag>
    <Tag block outline>
      Block and Outline
    </Tag>
  </TagStack>
);

export const ButtonTag: Story<Props> = () => (
  <TagStack>
    <Tag
      variant="button"
      icon={<CloseIcon onClick={() => alert('Clicked!')} />}
    >
      Close
    </Tag>
  </TagStack>
);

export const ActionTag: Story<Props> = () => (
  <TagStack>
    <Tag variant="action" action="add" onClick={() => alert('Clicked!')}>
      Add
    </Tag>
    <Tag variant="action" action="reset" onClick={() => alert('Clicked!')}>
      Reset
    </Tag>
  </TagStack>
);
