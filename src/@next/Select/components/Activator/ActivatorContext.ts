import { createContext, useContext } from 'react';
import { ActivatorSelectProps } from './ActivatorSelect';
import { ActivatorTextInputProps } from './ActivatorTextInput';

export interface ActivatorSelectContextProps extends ActivatorSelectProps {
  allowMultiple?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  onSelectClick(): void;
}

export interface SearchableSelectState {
  showSelected: boolean;
  showInput: boolean;
  showPlaceholder: boolean;
}

export interface ActivatorTextInputContextProps
  extends ActivatorTextInputProps {
  disabled?: boolean;
  searchableSelectState?: SearchableSelectState;
  updateSearchableSelectState?: (newState: SearchableSelectState) => void;
}

export const ActivatorSelectContext = createContext<
  ActivatorSelectContextProps | undefined
>(undefined);

export const ActivatorTextInputContext = createContext<
  ActivatorTextInputContextProps | undefined
>(undefined);

export const useActivatorSelect = () => {
  const context = useContext(ActivatorSelectContext);
  if (!context) {
    throw new Error(
      'No ActivatorSelectContext was provided. Your component must be wrapped in a <ActivatorSelectContext.Provider>'
    );
  }
  return context;
};

export const useActivatorTextInput = () => {
  const context = useContext(ActivatorTextInputContext);
  if (!context) {
    throw new Error(
      'No ActivatorTextInputContext was provided. Your component must be wrapped in a <ActivatorTextInputContext.Provider>'
    );
  }
  return context;
};
