import { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

import { Button, PrimaryButton } from '../Button';
import { Spinner } from '../Spinner/Spinner';
import { Typography } from '../Typography';
import { Blue } from '../utilities/colors';
import { Modal, ModalProps } from './Modal';

(Modal as React.FunctionComponent<ModalProps>).displayName = 'Modal';

export default {
  title: '@next/Modal',
  component: Modal,
  decorators: [withGlintsPortalContainer],
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
        onClose={() => setShowModal(false)}
      ></Modal>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = { header: 'Title', children: 'Content' };

const WithSpinnerTemplate: Story<void> = () => {
  const [iOpen, setOpen] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => setOpen(true), 0);

    return () => clearTimeout(timeId);
  }, []);
  return (
    <Modal isOpen={iOpen}>
      <Spinner fill={Blue.S99} height="36px" width="36px" />
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
      >
        <Typography as="div" variant="subtitle1">
          Redirecting to payment...
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography as="div" variant="body1">
          If you haven’t been redirected, please click <a href="#">here</a>
        </Typography>
      </div>
    </Modal>
  );
};

export const WithSpinner = WithSpinnerTemplate.bind({});
WithSpinner.args = {};

const WithCustomActionsTemplate: Story<void> = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerAlert = () => {
    setShowModal(true);
  };

  const customActions = <PrimaryButton fullWidth> Custom Action</PrimaryButton>;
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
        isOpen={showModal}
        header="Title"
        onClose={() => setShowModal(false)}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        customActions={customActions}
      >
        Content
      </Modal>
    </>
  );
};

export const WithCustomActions = WithCustomActionsTemplate.bind({});
WithCustomActions.args = {};
