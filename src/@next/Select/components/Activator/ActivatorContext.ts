import { createContext, useContext } from 'react';
import { ActivatorSelectProps } from './ActivatorSelect';
import { ActivatorTextInputProps } from './ActivatorTextInput';

export interface ActivatorSelectContextProps extends ActivatorSelectProps {
  onSelectClick(): void;
  selectedValues?: string[];
  disabled?: boolean;
}

export interface ActivatorTextInputContextProps
  extends ActivatorTextInputProps {
  disabled?: boolean;
}

export const ActivatorContext = createContext<
  ActivatorTextInputContextProps | ActivatorSelectContextProps | undefined
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
