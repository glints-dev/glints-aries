import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Banner, BannerProps } from './Banner';
import { Button } from '../Button';

(Banner as React.FunctionComponent<BannerProps>).displayName = 'Banner';

const defaultText = 'Content of banner';

export default {
  title: '@next/Banner',
  component: Banner,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<BannerProps> = args => {
  return <Banner {...args}>{defaultText}</Banner>;
};

export const Interactive = Template.bind({});
Interactive.args = { title: 'Title' };

const WithButtonsTemplate: Story<
  BannerProps & { buttonDisabled: boolean; buttonLoading: boolean }
> = args => {
  const action = (
    <Button disabled={args.buttonDisabled} loading={args.buttonLoading}>
      Action
    </Button>
  );
  return (
    <Banner action={action} {...args}>
      {defaultText}
    </Banner>
  );
};

export const WithButtons = WithButtonsTemplate.bind({});
WithButtons.args = {
  buttonDisabled: false,
  title: 'Title',
  buttonLoading: false,
};
