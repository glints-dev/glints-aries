import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Paragraph, Props } from './Paragraph';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PrimaryColor } from '../../Utils/Colors';
import { PARAGRAPH_FONT_SIZES, PARAGRAPH_VARIANTS } from './ParagraphStyles';

Paragraph.displayName = 'Typography.Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    variant: {
      description: Object.values(PARAGRAPH_VARIANTS)
        .map(variant => `${variant} (${PARAGRAPH_FONT_SIZES[variant]}px)`)
        .join(' · '),
    },
    color: { control: 'color' },
  },
} as Meta;

const defaultText =
  "Tanya farnuva naar cam utinu en lokirim tanka tel' taurnin. Lirimaerea vedui' il'er Lotesse Shaalth.";

const Template: Story<Props> = args => (
  <Paragraph {...args}>{args.children || defaultText}</Paragraph>
);

export const Interactive = Template.bind({});
Interactive.args = {};

export const Color = Template.bind({});
Color.args = { color: PrimaryColor.glintsblue };

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  ellipsis: true,
  children:
    "'Quel re amrun undome Beikaerea lle auta yeste' Mellonea. Guinahiroo ai' atar diola lle Mith'quessir. Tanya nae sai eina quel undome mani naa tanya nat' loomi en gurth. A! manke naa nae lle tinechor Tarion. Guinahiroo tanya awra! Heruamin Hallaerea. Mani uma lle merna ten' ta toror' taur'ohtarie Iire Cermie. Mankoi bragol alaa Morierea tal dagore.",
};

export const Bold = Template.bind({});
Bold.args = { bold: true };

export const Variant = Template.bind({});
Variant.args = { variant: 'subtitle' };

export const ShouldSetLineHeight = Template.bind({});
ShouldSetLineHeight.args = { shouldSetLineHeight: 'subtitle' };
