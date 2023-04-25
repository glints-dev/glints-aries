import { createContext, useContext } from 'react';
import { Option } from '../../../Menu';

export interface OptionListContextProps {
  options?: Option[];
  menuOptions?: Option[];
  updateMenuOptions?: (newState: Option[]) => void;
}
export const OptionListContext = createContext<
  OptionListContextProps | undefined
>(undefined);

export const useOptionList = () => {
  const context = useContext(OptionListContext);
  if (!context) {
    throw new Error(
      'No OptionListContext was provided. Your component must be wrapped in a <OptionListContext.Provider>'
    );
  }
  return context;
};
