import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonProps } from './Button';
import { DestructivePlainButton } from './DestructivePlainButtonStyle';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Icon } from '../Icon';

(DestructivePlainButton as React.FunctionComponent<ButtonProps>).displayName =
  'DestructivePlainButton';

const defaultText = 'Label';

export default {
  title: '@next/DestructivePlainButton',
  component: DestructivePlainButton,
  decorators: [withGlintsPortalContainer],
} as Meta;

const Template: Story<ButtonProps> = args => (
  <DestructivePlainButton {...args}>{defaultText}</DestructivePlainButton>
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
<DestructivePlainButton
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
