import React, { useCallback, useState } from 'react';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { TextInput, OptionList, Option } from './components';
import { ComboboxOptionContext } from './components/OptionList/OptionListContext';
import { ComboboxTextInputContext } from './components/TextInput/TextInputContext';

export interface ComboBoxProps {
  activator: React.ReactElement;
  allowMultiple?: boolean;
  children?: React.ReactNode;
  label?: React.ReactNode;
  onClose?: () => void;
}

export const ComboBox = ({
  activator,
  allowMultiple = false,
  children,
  onClose,
}: ComboBoxProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [textInputWidth, setTextInputWidth] = useState();

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
      <Popover.Pane>
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

ComboBox.Label = Label;
ComboBox.TextInput = TextInput;
ComboBox.OptionList = OptionList;
ComboBox.Option = Option;
