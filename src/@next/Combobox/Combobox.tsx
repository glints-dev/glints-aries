import React, { useCallback, useEffect, useState } from 'react';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { TextInput, OptionList, Option } from './components';
import { ComboboxOptionContext } from './components/OptionList/OptionListContext';
import { ComboboxTextInputContext } from './components/TextInput/TextInputContext';

export interface ComboboxProps {
  activator: React.ReactElement;
  allowMultiple?: boolean;
  children?: React.ReactNode;
  label?: React.ReactNode;
  onClose?: () => void;
  /** Margin Top = 8 ; Option height = 48 ; optionListHeight = (n options * option height) + margin top; */
  listHeight?: number;
  /** true = Allow vertical scroll, default by 6 options. */
  scrollable?: boolean;
}

export const Combobox = ({
  activator,
  allowMultiple = false,
  children,
  onClose,
  listHeight,
  scrollable,
}: ComboboxProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [textInputWidth, setTextInputWidth] = useState();
  const [optionListHeight, setOptionListHeight] = useState('');

  useEffect(() => {
    if (listHeight) {
      setOptionListHeight(`${listHeight + 24}px`);

      return;
    }

    if (scrollable) {
      setOptionListHeight(`${296 + 24}px`);

      return;
    }
  }, [listHeight, scrollable]);

  const handleClose = useCallback(() => {
    setPopoverActive(false);
    onClose?.();
  }, [onClose]);

  const handleFocus = () => {
    setPopoverActive(true);
  };

  const handleBlur = () => {
    if (popoverActive) {
      handleClose();
    }
  };

  const textInputContextValue = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    textInputWidth,
    setTextInputWidth,
  };

  const optionContextValue = {
    allowMultiple,
  };

  return (
    <Popover
      active={popoverActive}
      activator={
        <ComboboxTextInputContext.Provider value={textInputContextValue}>
          {activator}
        </ComboboxTextInputContext.Provider>
      }
      onClose={handleClose}
      autofocusTarget="none"
      preventFocusOnClose
      fullWidth
    >
      <Popover.Pane height={optionListHeight}>
        <ComboboxOptionContext.Provider value={optionContextValue}>
          <ComboboxTextInputContext.Provider value={textInputContextValue}>
            {children}
          </ComboboxTextInputContext.Provider>
        </ComboboxOptionContext.Provider>
      </Popover.Pane>
    </Popover>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <Typography as="span" variant="subtitle2" color={Neutral.B18}>
    {children}
  </Typography>
);

Combobox.Label = Label;
Combobox.TextInput = TextInput;
Combobox.OptionList = OptionList;
Combobox.Option = Option;
