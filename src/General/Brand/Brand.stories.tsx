import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Brand } from './index';
import { Props as BrandProps } from './Brand';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Brand',
  component: Brand,
  argTypes: {
    asset: {
      control: {
        type: 'radio',
        options: [
          'glints-white',
          'glints-taploker-white',
          'glints-tapjobs-white',
          'glints',
          'glints-tapjobs',
          'glints-taploker',
        ],
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['horizontal', 'square'],
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
    onContextMenu: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<BrandProps> = args => <Brand {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  asset: 'glints',
};

export const RedirectToGlintsWhenRightClick = Template.bind({});
RedirectToGlintsWhenRightClick.args = {
  asset: 'glints',
  variant: 'square',
  rightClickURL: 'https://glints.com',
};
