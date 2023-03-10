import { createContext, useContext } from 'react';
import { ComboboxTextInputProps } from './TextInput';

export const ComboboxTextInputContext = createContext<
  ComboboxTextInputProps | undefined
>(undefined);

export const useComboboxTextInput = () => {
  const context = useContext(ComboboxTextInputContext);
  if (!context) {
    throw new Error(
      'No TextInputContext was provided. Your component must be wrapped in a <TextInputContext.Provider>'
    );
  }
  return context;
};
