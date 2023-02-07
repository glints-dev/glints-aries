import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Typography } from '../Typography';
import { Red } from '../utilities/colors';
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

const MonochromeTemplate: Story<LinkProps> = args => {
  return <Link {...args} />;
};

const RedTypography = (
  <Typography as="a" color={Red.Brand}>
    Monochrome Red
  </Typography>
);
export const Monochrome = MonochromeTemplate.bind({});
Monochrome.parameters = {
  docs: {
    description: {
      story:
        "Makes the link color the same as the current text color and adds an underline. When using `<Typography>` component, make sure to specify `as='a'`",
    },
  },
};
Monochrome.args = {
  monochrome: true,
  children: RedTypography,
  url: '#',
};
