import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { AlertProvider } from '../src/@next/Alert/AlertProvider';

// Receive a component and apply a bordered container with max width of 400px.
export const withAlertProvider: DecoratorFn = Story => (
  <AlertProvider>
    <Story />
  </AlertProvider>
);
