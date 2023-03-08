import { createContext, useContext } from 'react';

type ComboboxOptionType = {
  // Show checkbox to visually support multiple selection
  allowMultiple?: boolean;
};

export const ComboboxOptionContext = createContext<
  ComboboxOptionType | undefined
>(undefined);

export const useOption = () => {
  const context = useContext(ComboboxOptionContext);
  if (!context) {
    throw new Error(
      'No ComboboxOptionContext was provided. Your component must be wrapped in a <ComboboxOptionContext.Provider>'
    );
  }
  return context;
};
