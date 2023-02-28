import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { AlertProvider } from '../../@next/Alert/AlertProvider';
import { ModalProvider } from '../../@next/Modal/ModalProvider';

export const withAlertProvider: DecoratorFn = Story => (
  <AlertProvider>
    <Story />
  </AlertProvider>
);

export const withModalProvider: DecoratorFn = Story => (
  <ModalProvider>
    <Story />
  </ModalProvider>
);

export const withGlintsPortalContainer: DecoratorFn = Story => (
  <>
    <div id="glints-portal-container"></div>
    <Story />
  </>
);
