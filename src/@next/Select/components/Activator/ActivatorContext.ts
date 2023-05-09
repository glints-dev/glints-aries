import { createContext, useContext } from 'react';
import { ActivatorTextInputProps } from './ActivatorTextInput';

export interface SearchableSelectState {
  showSelected: boolean;
  showInput: boolean;
  showPlaceholder: boolean;
}

export interface ActivatorTextInputContextProps
  extends ActivatorTextInputProps {
  disabled?: boolean;
  inputValue?: string;
  updateInputValue?: (newValue: string) => void;
  searchableSelectState?: SearchableSelectState;
  updateSearchableSelectState?: (newState: SearchableSelectState) => void;
}

export const ActivatorTextInputContext = createContext<
  ActivatorTextInputContextProps | undefined
>(undefined);

export const useActivatorTextInput = () => {
  const context = useContext(ActivatorTextInputContext);
  if (!context) {
    throw new Error(
      'No ActivatorTextInputContext was provided. Your component must be wrapped in a <ActivatorTextInputContext.Provider>'
    );
  }
  return context;
};
