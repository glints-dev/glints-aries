import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '../Button';
import { AlertProps } from './Alert';
import { useAlert } from './useAlert';
import { AlertWithProvider } from './AlertWithProvider';
import { withAlertProvider } from '../../helpers/storybook/Decorators';
import { Typography } from '../Typography';

(AlertWithProvider as React.FunctionComponent<AlertProps>).displayName =
  'AlertWithProvider';

export default {
  title: '@next/AlertWithProvider',
  component: AlertWithProvider,
} as Meta;

const Template: Story<AlertProps> = args => {
  const { open: showAlert } = useAlert();

  return (
    <>
      <AlertWithProvider />
      <Button
        onClick={() =>
          showAlert({
            ...args,
          })
        }
      >
        Show Alert
      </Button>
    </>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  title: 'Title',
  content: 'Alert content',
  status: 'info',
  children: (
    <Typography as="span" variant="body2" color="#017EB7">
      Learn more
    </Typography>
  ),
};

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

      // Call "open" anywhere from your component
      import { open } from 'glints-aries/lib/@next';

      const { open } = useAlert();
      <Button
        onClick={() =>
          open({
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
