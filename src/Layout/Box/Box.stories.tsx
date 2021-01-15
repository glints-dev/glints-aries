import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box } from './index';
import { BoxProps } from './types';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import * as S from './BoxStoryStyle';
import { Shadow } from '../../Utils/Shadow';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    boxShadow: {
      type: { name: 'test', required: false },
      control: {
        type: 'select',
        options: {
          'Example: Shadow.down4': Shadow.down4,
          'Example: Shadow.up4': Shadow.up4,
        },
      },
      table: {
        type: {
          summary: 'import { Shadow } from "glints-aries"',
          detail: Object.keys(Shadow)
            .map(key => `Shadow.${key}`)
            .join(' | '),
        },
      },
    },
  },
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<BoxProps> = args => (
  <S.GreyBackground>
    <S.Box {...args}>
      <S.Content>Content</S.Content>
    </S.Box>
  </S.GreyBackground>
);

export const Interactive = Template.bind({});
Interactive.args = {
  p: 32,
  m: 64,
};

export const ResponsiveSpacing = Template.bind({});
ResponsiveSpacing.args = {
  p: { default: 32, desktopS: 64 },
  m: { default: 64, desktopS: 32 },
};
ResponsiveSpacing.parameters = {
  docs: {
    description: {
      story: `Resize the viewport to see the responsive padding and margin change\n
      Following is the Breakpoint Aliases table for Responsive Space Object\n
      | Alias    | Device         | Description                           |
      |----------|----------------|---------------------------------------|
      | default  | -              | define the base, non-responsive value |
      | mobileS  | Mobile Small   | @media screen and (min-width: 320px)  |
      | mobileM  | Mobile Medium  | @media screen and (min-width: 480px)  |
      | mobileL  | Mobile Large   | @media screen and (min-width: 640px)  |
      | tablet   | Tablet         | @media screen and (min-width: 768px)  |
      | desktopS | Desktop Small  | @media screen and (min-width: 1024px) |
      | desktopM | Desktop Medium | @media screen and (min-width: 1260px) |
      | desktopL | Desktop Large  | @media screen and (min-width: 1440px) |
      `,
    },
  },
};
