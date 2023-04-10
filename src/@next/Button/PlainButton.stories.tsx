import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonProps } from './Button';
import { PlainButton } from './PlainButtonStyle';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Icon } from '../Icon';

(PlainButton as React.FunctionComponent<ButtonProps>).displayName =
  'PlainButton';

const defaultText = 'Label';

export default {
  title: '@next/PlainButton',
  component: PlainButton,
  decorators: [withGlintsPortalContainer],
} as Meta;

const Template: Story<ButtonProps> = args => (
  <PlainButton {...args}>{defaultText}</PlainButton>
);

export const Interactive = Template.bind({});
Interactive.args = {
  size: 'default',
  icon: <Icon name="ri-arrow-up-down-fill" />,
  iconPosition: 'left',
  disabled: false,
};

Interactive.parameters = {
  docs: {
    source: {
      code: `
<PlainButton
  size='default'
  icon={<Icon name="ri-arrow-up-down-fill" />}
  iconPosition='left'
>
  Label
</PlainButton>
      `,
    },
  },
};
