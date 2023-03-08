import { createContext, useContext } from 'react';
import { ComboBoxTextInputProps } from './TextInput';

export const ComboboxTextInputContext = createContext<
  ComboBoxTextInputProps | undefined
>(undefined);

export const useComboBoxTextInput = () => {
  const context = useContext(ComboboxTextInputContext);
  if (!context) {
    throw new Error(
      'No TextInputContext was provided. Your component must be wrapped in a <TextInputContext.Provider>'
    );
  }
  return context;
};
