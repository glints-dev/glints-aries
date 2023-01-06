import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroupStyle';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PrimaryButton } from '../Button/PrimaryButtonStyle';
import { Button } from '../Button/Button';
import { OutlineButton } from '../Button/OutlineButtonStyle';

(ButtonGroup as React.FunctionComponent<ButtonGroupProps>).displayName =
  'ButtonGroup';

export default {
  title: '@next/ButtonGroup',
  component: ButtonGroup,
  decorators: [
    Story => (
      <BaseContainer style={{ width: '1000px' }}>{Story()}</BaseContainer>
    ),
  ],
} as Meta;

const Template: Story<ButtonGroupProps> = args => {
  const { segmented } = args;
  const children = segmented ? (
    <>
      <OutlineButton>Label</OutlineButton>
      <OutlineButton>Label</OutlineButton>
      <OutlineButton>Label</OutlineButton>
      <OutlineButton>Label</OutlineButton>
      <OutlineButton>Label</OutlineButton>
    </>
  ) : (
    <>
      <Button>Label</Button>
      <PrimaryButton>Label</PrimaryButton>
    </>
  );
  return <ButtonGroup {...args}>{children}</ButtonGroup>;
};

export const Interactive = Template.bind({});
Interactive.args = { segmented: false, fullWidth: false };
