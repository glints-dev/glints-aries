import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { times, constant } from 'lodash';

import { Modal, Props } from './Modal';
import { Button } from '../../General/Button/Button';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Display/Modal',
  component: Modal,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const defaultTitle = 'Lorem Ipsum';
const defaultChildren =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

interface ButtonStoryProps extends Props {
  buttonTexts?: string[];
}

const Template: Story<ButtonStoryProps> = ({
  children,
  title,
  buttonTexts = [],
  ...args
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Button
        variant="solid-blue"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        Toggle
      </Button>
      <Modal
        {...args}
        title={title || defaultTitle}
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        footer={[
          <Button
            variant="ghost"
            onClick={() => setIsModalVisible(false)}
            key="cancel"
          >
            {buttonTexts[0] || 'Cancel'}
          </Button>,
          <Button
            variant="solid-blue"
            onClick={() => setIsModalVisible(false)}
            key="save"
          >
            {buttonTexts[1] || 'Save'}
          </Button>,
        ]}
      >
        {children || defaultChildren}
      </Modal>
    </>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  title: defaultTitle,
  children: defaultChildren,
};

export const ScreenCentered = Template.bind({});
ScreenCentered.args = {
  centering: true,
};

export const ScreenCenteredWithALotOfContent = Template.bind({});
ScreenCenteredWithALotOfContent.args = {
  centering: true,
  children: times(10, constant(defaultChildren)).join(' '),
};

export const FooterResponsiveness = Template.bind({});
FooterResponsiveness.args = {
  buttonTexts: ['Looooooong Cancel', 'Loooooooong Save'],
  size: 's',
};
FooterResponsiveness.parameters = {
  docs: {
    description: {
      story:
        'If all the buttons cannot fit in one row, then they will be expanded to the 100% width of the container and break into two rows.',
    },
  },
};
