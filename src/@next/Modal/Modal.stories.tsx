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
  const triggerModal = () => {
    setShowModal(true);
  };

  const primaryAction = {
    label: 'Yes',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'No',
    action: () => console.log('Secondary action!'),
  };

  return (
    <>
      <Button onClick={() => triggerModal()}>Show Modal</Button>
      <Modal
        {...args}
        isOpen={showModal}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  header: 'Title',
  headerDescription: 'Description',
  children: 'Content',
  showBackButton: true,
  showCloseButton: true,
};

const WithLargeContentTemplate: Story<void> = () => {
  const [iOpen, setOpen] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => setOpen(true), 0);

    return () => clearTimeout(timeId);
  }, []);
  return (
    <Modal isOpen={iOpen} header="Title">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </Modal>
  );
};

export const WithLargeContent = WithLargeContentTemplate.bind({});
WithLargeContent.args = {};

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
