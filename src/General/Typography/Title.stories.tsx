import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, Props } from './Title';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PrimaryColor } from '../../Utils/Colors';

Title.displayName = 'Typography.Title';

export default {
  title: 'Typography/Title',
  component: Title,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    color: { control: 'color' },
    tag: { control: 'radio' },
  },
} as Meta;

const Template: Story<Props> = args => (
  <Title {...args}>{args.children || 'Glints Aries'}</Title>
);

export const Interactive = Template.bind({});
Interactive.args = {};

export const Color = Template.bind({});
Color.args = { color: PrimaryColor.glintsblue };

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  ellipsis: true,
  children:
    "Tanya farnuva naar cam utinu en lokirim tanka tel' taurnin. Lirimaerea vedui' il'er Lotesse Shaalth.",
};

export const Tag = Template.bind({});
Tag.args = { tag: 'h6' };

export const Uppercase = Template.bind({});
Uppercase.args = { uppercase: true };
