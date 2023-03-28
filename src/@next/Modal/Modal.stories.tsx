import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
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
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: {
        ...MINIMAL_VIEWPORTS,
        smallHeightDesktop: {
          name: 'Small Height Desktop',
          styles: {
            width: '1240px',
            height: '400px',
          },
        },
      },
    },
  },
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
    <Modal isOpen={iOpen} header="Desiderata">
      Go placidly amid the noise and the haste, and remember what peace there
      may be in silence. As far as possible, without surrender, be on good terms
      with all persons. Speak your truth quietly and clearly; and listen to
      others, even to the dull and the ignorant; they too have their story.
      Avoid loud and aggressive persons; they are vexatious to the spirit. If
      you compare yourself with others, you may become vain or bitter, for
      always there will be greater and lesser persons than yourself. Enjoy your
      achievements as well as your plans. Keep interested in your own career,
      however humble; it is a real possession in the changing fortunes of time.
      Exercise caution in your business affairs, for the world is full of
      trickery. But let this not blind you to what virtue there is; many persons
      strive for high ideals, and everywhere life is full of heroism. Be
      yourself. Especially do not feign affection. Neither be cynical about
      love; for in the face of all aridity and disenchantment, it is as
      perennial as the grass. Take kindly the counsel of the years, gracefully
      surrendering the things of youth. Nurture strength of spirit to shield you
      in sudden misfortune. But do not distress yourself with dark imaginings.
      Many fears are born of fatigue and loneliness. Beyond a wholesome
      discipline, be gentle with yourself. You are a child of the universe no
      less than the trees and the stars; you have a right to be here. And
      whether or not it is clear to you, no doubt the universe is unfolding as
      it should. Therefore be at peace with God, whatever you conceive Him to
      be. And whatever your labors and aspirations, in the noisy confusion of
      life, keep peace in your soul. With all its sham, drudgery and broken
      dreams, it is still a beautiful world. Be cheerful. Strive to be happy.
    </Modal>
  );
};

export const WithLargeContent = WithLargeContentTemplate.bind({});
WithLargeContent.args = {};

const WithOverlflowContentTemplate: Story<void> = () => {
  const [iOpen, setOpen] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => setOpen(true), 0);

    return () => clearTimeout(timeId);
  }, []);

  const customActions = <PrimaryButton fullWidth>Custom Action</PrimaryButton>;

  return (
    <Modal
      isOpen={iOpen}
      header="Overflowing content"
      customActions={customActions}
    >
      Please Use smaller viewport to test overflow. Choose smallHeightDesktop in
      the viewport dropdown.
      <br />
      <br />
      Go placidly amid the noise and the haste, and remember what peace there
      may be in silence. As far as possible, without surrender, be on good terms
      with all persons. Speak your truth quietly and clearly; and listen to
      others, even to the dull and the ignorant; they too have their story.
      Avoid loud and aggressive persons; they are vexatious to the spirit. If
      you compare yourself with others, you may become vain or bitter, for
      always there will be greater and lesser persons than yourself. Enjoy your
      achievements as well as your plans. Keep interested in your own career,
      however humble; it is a real possession in the changing fortunes of time.
      Exercise caution in your business affairs, for the world is full of
      trickery. But let this not blind you to what virtue there is; many persons
      strive for high ideals, and everywhere life is full of heroism. Be
      yourself. Especially do not feign affection. Neither be cynical about
      love; for in the face of all aridity and disenchantment, it is as
      perennial as the grass. Take kindly the counsel of the years, gracefully
      surrendering the things of youth. Nurture strength of spirit to shield you
      in sudden misfortune. But do not distress yourself with dark imaginings.
      Many fears are born of fatigue and loneliness. Beyond a wholesome
      discipline, be gentle with yourself. You are a child of the universe no
      less than the trees and the stars; you have a right to be here. And
      whether or not it is clear to you, no doubt the universe is unfolding as
      it should. Therefore be at peace with God, whatever you conceive Him to
      be. And whatever your labors and aspirations, in the noisy confusion of
      life, keep peace in your soul. With all its sham, drudgery and broken
      dreams, it is still a beautiful world. Be cheerful. Strive to be happy.
    </Modal>
  );
};

export const WithOverflowContent = WithOverlflowContentTemplate.bind({});
WithOverflowContent.args = {};
WithOverflowContent.parameters = {
  viewport: {
    defaultViewport: 'smallHeightDesktop',
  },
};

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
