import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Button } from '../Button';
import { Modal, ModalProps } from './Modal';

(Modal as React.FunctionComponent<ModalProps>).displayName = 'Modal';

export default {
  title: '@next/Modal',
  component: Modal,
  decorators: [
    Story => (
      <>
        <BaseContainer>{Story()}</BaseContainer>
        <div id="glints-portal-container"></div>
      </>
    ),
  ],
} as Meta;

const Template: Story<ModalProps> = args => {
  const [showModal, setShowModal] = useState(false);
  const triggerAlert = () => {
    setShowModal(true);
  };

  const primaryAction = {
    label: 'Primary Action',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'Secondary Action',
    action: () => console.log('Secondary action!'),
  };

  return (
    <>
      <Button onClick={() => triggerAlert()}>Show Modal</Button>
      <Modal
        {...args}
        isOpen={showModal}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      >
        Content
      </Modal>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = { size: 'default', header: 'Title' };
