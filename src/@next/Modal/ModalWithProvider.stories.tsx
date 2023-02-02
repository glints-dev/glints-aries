import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { useModal } from './useModal';
import { ModalWithProvider } from './ModalWithProvider';
import {
  withGlintsPortalContainer,
  withModalProvider,
} from '../../helpers/storybook/Decorators';

(ModalWithProvider as React.FunctionComponent<void>).displayName =
  'ModalWithProvider';

export default {
  title: '@next/ModalWithProvider',
  component: ModalWithProvider,
} as Meta;

const Template: Story<void> = () => {
  const { open: showModal } = useModal();

  const primaryAction = {
    label: 'Primary Action',
    action: () => console.log('Primary action!'),
  };
  const secondaryAction = {
    label: 'Secondary Action',
    action: () => console.log('Secondary action!'),
  };

  const showModalArgs = {
    header: 'Title',
    children: 'Content',
    primaryAction,
    secondaryAction,
  };

  return (
    <>
      <ModalWithProvider />
      <Button onClick={() => showModal(showModalArgs)}>Show Modal</Button>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {};

Interactive.decorators = [withGlintsPortalContainer, withModalProvider];
Interactive.parameters = {
  docs: {
    source: {
      code: `
      // Add "ModalProvider" in your root app 
      import { ModalProvider } from 'glints-aries/lib/@next';

      // index.js
      ReactDOM.render(
        <ModalProvider>
         <App />
        </ModalProvider>,
        document.getElementById('root')
      );

      // Add "ModalWithProvider" component in the root so it's accessible from anywhere
      // app.js
      <>
        <ModalWithProvider />
        <Dashboard />
      </>  

      // Call "showModal" anywhere from your component
      import { useModal } from 'glints-aries/lib/@next';

      const { showModal } = useModal();
      const primaryAction = {
        label: 'Primary Action',
        action: () => console.log('Primary action!'),
      };
      const secondaryAction = {
        label: 'Secondary Action',
        action: () => console.log('Secondary action!'),
      };
    
      const showModalArgs = {
        header: 'Title',
        children: 'Content',
        primaryAction,
        secondaryAction,
      };

      <Button
        onClick={() =>
          showModal(showModalArgs)
        }
      >
        Show Modal
      </Button>
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};
