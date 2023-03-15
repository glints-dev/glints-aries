import { createContext, useContext } from 'react';

type SelectOptionType = {
  /** Show checkbox to visually support multiple selection */
  allowMultiple?: boolean;
};

export const SelectOptionContext = createContext<SelectOptionType | undefined>(
  undefined
);

export const useOption = () => {
  const context = useContext(SelectOptionContext);
  if (!context) {
    throw new Error(
      'No SelectOptionContext was provided. Your component must be wrapped in a <SelectOptionContext.Provider>'
    );
  }
  return context;
};

type SelectOptionListType = {
  onOptionSelect({ value }: { value: string }): void;
  selectedOptions?: string[];
};

export const SelectOptionListContext = createContext<
  SelectOptionListType | undefined
>(undefined);

export const useOptionList = () => {
  const context = useContext(SelectOptionListContext);
  if (!context) {
    throw new Error(
      'No SelectOptionListContext was provided. Your component must be wrapped in a <SelectOptionListContext.Provider>'
    );
  }
  return context;
};
