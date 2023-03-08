import React, { useCallback, useState } from 'react';
import { Popover } from '../Popover';
import { TextInput, OptionList, Option } from './components';
import { TextInputContext } from './components/TextInput/TextInputContext';

export interface ComboBoxProps {
  activator: React.ReactElement;
  allowMultiple?: boolean;
  children?: React.ReactNode;
  /** Text to display when there are no options */
  noOptionsMessage?: React.ReactNode;
  onClose?: () => void;
}

export const ComboBox = ({
  activator,
  // allowMultiple = false,
  children,
  onClose,
}: ComboBoxProps) => {
  const [popoverActive, setPopoverActive] = useState(false);

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
  };

  return (
    <Popover
      active={popoverActive}
      activator={
        <TextInputContext.Provider value={textInputContextValue}>
          {activator}
        </TextInputContext.Provider>
      }
      onClose={handleClose}
      autofocusTarget="none"
      preventFocusOnClose
    >
      <Popover.Pane>{children}</Popover.Pane>
    </Popover>
  );
};

ComboBox.TextInput = TextInput;
ComboBox.OptionList = OptionList;
ComboBox.Option = Option;
