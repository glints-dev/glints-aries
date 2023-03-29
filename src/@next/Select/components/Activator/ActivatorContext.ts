import { createContext, useContext } from 'react';
import { ActivatorSelectProps } from './ActivatorSelect';
import { ActivatorTextInputProps } from './ActivatorTextInput';

export interface ActivatorSelectContextProps extends ActivatorSelectProps {
  allowMultiple?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  onSelectClick(): void;
  selectedValues?: string[];
  setWidth?: React.Dispatch<(prevState: undefined) => undefined>;
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
