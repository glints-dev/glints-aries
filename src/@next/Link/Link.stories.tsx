import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Link, LinkProps } from './Link';

(Link as React.FunctionComponent<LinkProps>).displayName = 'Link';

export default {
  title: '@next/Link',
  component: Link,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const DefaultTemplate: Story<LinkProps> = args => {
  return <Link {...args}>Default Link</Link>;
};

export const Default = DefaultTemplate.bind({});

Default.args = {
  url: '#',
};
