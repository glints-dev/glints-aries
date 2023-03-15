import { createContext, useContext } from 'react';
import { ActivatorSelectProps } from './ActivatorSelect';
import { ActivatorTextInputProps } from './ActivatorTextInput';

export interface ActivatorSelectContextProps extends ActivatorSelectProps {
  onSelectClick(): void;
}

export const ActivatorContext = createContext<
  ActivatorTextInputProps | ActivatorSelectContextProps | undefined
>(undefined);

export const useSelectActivator = () => {
  const context = useContext(ActivatorContext);
  if (!context) {
    throw new Error(
      'No ActivatorContext was provided. Your component must be wrapped in a <ActivatorContext.Provider>'
    );
  }
  return context;
};
