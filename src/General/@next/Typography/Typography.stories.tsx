import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';
import { BaseContainer } from '../../../Layout/GlintsContainer/GlintsContainer';
import * as Colors from '../../../Utils/@next/colors';

Typography.displayName = 'Typography.Paragraph';

export default {
  title: 'Typography/@next/Typography',
  component: Typography,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
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

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  ellipsis: true,
  children:
    "'Quel re amrun undome Beikaerea lle auta yeste' Mellonea. Guinahiroo ai' atar diola lle Mith'quessir. Tanya nae sai eina quel undome mani naa tanya nat' loomi en gurth. A! manke naa nae lle tinechor Tarion. Guinahiroo tanya awra! Heruamin Hallaerea. Mani uma lle merna ten' ta toror' taur'ohtarie Iire Cermie. Mankoi bragol alaa Morierea tal dagore.",
};

export const Bold = Template.bind({});
Bold.args = { bold: true };

export const Variant = Template.bind({});
Variant.args = { variant: 'body1' };
