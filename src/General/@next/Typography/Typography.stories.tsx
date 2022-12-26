import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';
import { BaseContainer } from '../../../Layout/GlintsContainer/GlintsContainer';
import * as Colors from '../../../Utils/@next/colors';

(Typography as React.FunctionComponent<TypographyProps>).displayName =
  'Typography.Paragraph';

export default {
  title: 'Typography/@next/Typography',
  component: Typography,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    as: { control: 'text' },
    color: { control: 'color' },
  },
} as Meta;

const defaultText =
  "Tanya farnuva naar cam utinu en lokirim tanka tel' taurnin. Lirimaerea vedui' il'er Lotesse Shaalth.";

const Template: Story<TypographyProps> = args => (
  <Typography {...args}>{args.children || defaultText}</Typography>
);

export const Interactive = Template.bind({});
Interactive.args = {};

export const Color = Template.bind({});
Color.args = { color: Colors.Blue.Brand };

export const Variant = Template.bind({});
Variant.args = { variant: 'body1' };
