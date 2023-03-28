import React, { useCallback, useEffect, useState } from 'react';
import { Menu, Option, Section } from '../Menu';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ActivatorTextInput, OptionList } from './components';
import { ActivatorContext } from './components/Activator/ActivatorContext';
import { ActivatorSelect } from './components/Activator/ActivatorSelect';
import { HelpTextContainer } from './SelectStyle';

export interface SelectProps {
  activator: React.ReactElement;
  allowMultiple?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  hasError?: boolean;
  helpText?: React.ReactNode;
  label?: React.ReactNode;
  listHeight?: number;
  onClose?: () => void;
  /** Margin Top = 8 ; Option height = 48 ; optionListHeight = (n options * option height) + margin top; */
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
    setPopoverActive(true);
  };

  const activatorContextValue = {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onSelectClick: handleSelectClick,
    width,
    setWidth,
    hasError,
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
        <ActivatorContext.Provider value={activatorContextValue}>
          <OptionList
            allowMultiple={allowMultiple}
            onSelect={onSelect}
            options={options}
            sections={sections}
            selectedValues={selectedValues}
          />
        </ActivatorContext.Provider>
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
Select.Menu = Menu;
