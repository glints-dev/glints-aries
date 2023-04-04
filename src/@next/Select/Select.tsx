import React, { useCallback, useEffect, useState } from 'react';
import { Option, Section } from '../Menu';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ActivatorTextInput, OptionList } from './components';
import {
  ActivatorSelectContext,
  ActivatorTextInputContext,
} from './components/Activator/ActivatorContext';
import { ActivatorSelect } from './components/Activator/ActivatorSelect';
import { HelpTextContainer } from './SelectStyle';

export interface SelectProps {
  activator: React.ReactElement;
  allowMultiple?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  helpText?: React.ReactNode;
  /** Margin Top = 8 ; Option height = 48 ; optionListHeight = (n options * option height) + margin top; */
  listHeight?: number;
  onClose?: () => void;
  onSelect?({ value }: { value: string }): void;
  options?: Option[];
  /** true = Allow vertical scroll, default by 6 options. */
  scrollable?: boolean;
  sections?: Section[];
  selectedValues?: string[];
}

export const Select = ({
  activator,
  allowMultiple = false,
  disabled,
  hasError,
  helpText,
  onClose,
  onSelect,
  options,
  listHeight,
  scrollable,
  sections,
  selectedValues,
}: SelectProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [width, setWidth] = useState();
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
    setPopoverActive(!popoverActive);
  };

  const activatorSelectContextValue = {
    allowMultiple,
    disabled,
    hasError,
    onSelectClick: handleSelectClick,
    selectedValues,
    setWidth,
    width,
  };

  const activatorTextInputContextValue = {
    disabled,
    hasError,
    onFocus: handleFocus,
    onBlur: handleBlur,
    setWidth,
    width,
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
        <ActivatorSelectContext.Provider value={activatorSelectContextValue}>
          <ActivatorTextInputContext.Provider
            value={activatorTextInputContextValue}
          >
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
          </ActivatorTextInputContext.Provider>
        </ActivatorSelectContext.Provider>
      }
      onClose={handleClose}
      autofocusTarget="none"
      preventFocusOnClose
      fullWidth
    >
      <Popover.Pane height={optionListHeight}>
        <ActivatorSelectContext.Provider value={activatorSelectContextValue}>
          <ActivatorTextInputContext.Provider
            value={activatorTextInputContextValue}
          >
            <OptionList
              allowMultiple={allowMultiple}
              onSelect={onSelect}
              options={options}
              sections={sections}
              selectedValues={selectedValues}
            />
          </ActivatorTextInputContext.Provider>
        </ActivatorSelectContext.Provider>
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
