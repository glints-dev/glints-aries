import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '../Button';
import { AlertProps } from './Alert';
import { useAlert } from './useAlert';
import { AlertWithProvider } from './AlertWithProvider';
import { withAlertProvider } from '../../../.storybook/Decorators';

(AlertWithProvider as React.FunctionComponent<AlertProps>).displayName =
  'AlertWithProvider';

export default {
  title: '@next/AlertWithProvider',
  component: AlertWithProvider,
} as Meta;

const Template: Story = () => {
  const { showAlert } = useAlert();

  return (
    <>
      <AlertWithProvider />
      <Button
        onClick={() =>
          showAlert({
            title: 'Title',
            content: 'Content',
            children: <a href="#">Learn more</a>,
          })
        }
      >
        Show Alert
      </Button>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {};
Interactive.decorators = [withAlertProvider];
Interactive.parameters = {
  docs: {
    source: {
      code: `
      // Add "AlertProvider" in your root app 
      import { AlertProvider } from 'glints-aries/lib/@next';

      // index.js
      ReactDOM.render(
        <AlertProvider>
         <App />
        </AlertProvider>,
        document.getElementById('root')
      );

      // Add "AlertWithProvider" component in the root so it's accessible from anywhere
      // app.js
      <>
        <AlertWithProvider />
        <Dashboard />
      </>  

      // Call "showAlert" anywhere from your component
      <Button
        onClick={() =>
          showAlert({
            title: 'Title',
            content: 'Content',
            children: <a href="#">Learn more</a>,
          })
        }
      >
        Show Alert
      </Button>
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};
