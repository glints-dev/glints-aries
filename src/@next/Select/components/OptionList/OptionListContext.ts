import { createContext, useContext } from 'react';

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
