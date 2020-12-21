import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Brand } from './index';
import { Props as BrandProps } from './Brand';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Brand',
  component: Brand,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<BrandProps> = args => <Brand {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  asset: 'glints-black',
};
