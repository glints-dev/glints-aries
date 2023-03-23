import React, { useCallback, useEffect, useState } from 'react';
import { Menu } from '../Menu';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ActivatorTextInput, OptionList, Option } from './components';
import { ActivatorContext } from './components/Activator/ActivatorContext';
import { ActivatorSelect } from './components/Activator/ActivatorSelect';
import { SelectOptionContext } from './components/OptionList/OptionListContext';
import { HelpTextContainer } from './SelectStyle';

export interface SelectProps {
  activator: React.ReactElement;
  allowMultiple?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  helpText?: React.ReactNode;
  label?: React.ReactNode;
  onClose?: () => void;
  /** Margin Top = 8 ; Option height = 48 ; optionListHeight = (n options * option height) + margin top; */
  listHeight?: number;
  /** true = Allow vertical scroll, default by 6 options. */
  scrollable?: boolean;
}

export const Select = ({
  activator,
  allowMultiple = false,
  children,
  disabled,
  helpText,
  onClose,
  listHeight,
  scrollable,
}: SelectProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [textInputWidth, setTextInputWidth] = useState();
  const [optionListHeight, setOptionListHeight] = useState('');

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

  const handleSelectClick = () => {
    setPopoverActive(true);
  };

  const activatorContextValue = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onSelectClick: handleSelectClick,
    textInputWidth,
    setTextInputWidth,
  };

  const optionContextValue = {
    allowMultiple,
  };

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

  return (
    <Popover
      active={popoverActive}
      activator={
        <ActivatorContext.Provider value={activatorContextValue}>
          {activator}
          {helpText && (
            <HelpTextContainer>
              <Typography
                as="span"
                variant="subtitle2"
                color={disabled ? Neutral.B85 : Neutral.B40}
              >
                {helpText}
              </Typography>
            </HelpTextContainer>
          )}
        </ActivatorContext.Provider>
      }
      onClose={handleClose}
      autofocusTarget="none"
      preventFocusOnClose
      fullWidth
    >
      <Popover.Pane height={optionListHeight}>
        <SelectOptionContext.Provider value={optionContextValue}>
          <ActivatorContext.Provider value={activatorContextValue}>
            {children}
          </ActivatorContext.Provider>
        </SelectOptionContext.Provider>
      </Popover.Pane>
    </Popover>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <Typography as="span" variant="subtitle2" color={Neutral.B18}>
    {children}
  </Typography>
);

Select.Label = Label;
Select.ActivatorTextInput = ActivatorTextInput;
Select.ActivatorSelect = ActivatorSelect;
Select.OptionList = OptionList;
Select.Option = Option;
Select.Menu = Menu;
