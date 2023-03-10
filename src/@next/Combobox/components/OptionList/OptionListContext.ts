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

type ComboboxOptionListType = {
  onOptionSelect({ value }: { value: string }): void;
  selectedOptions?: string[];
};

export const ComboboxOptionListContext = createContext<
  ComboboxOptionListType | undefined
>(undefined);

export const useOptionList = () => {
  const context = useContext(ComboboxOptionListContext);
  if (!context) {
    throw new Error(
      'No ComboboxOptionListContext was provided. Your component must be wrapped in a <ComboboxOptionListContext.Provider>'
    );
  }
  return context;
};
