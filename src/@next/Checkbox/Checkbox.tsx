import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledColumn,
  StyledContainer,
  StyledLeftColumn,
  StyledRow,
} from './CheckboxStyle';
import { noop } from 'lodash-es';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import nextId from 'react-id-generator';

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onChange'
  > {
  id?: string;
  label?: ReactNode;
  hasError?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
  disabled?: boolean;
  helpText?: string;
  onChange?(newChecked: boolean, id: string): void;
  isPadded?: boolean;
}

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      id,
      checked,
      onChange,
      disabled,
      indeterminate,
      hasError,
      helpText,
      isPadded = true,
      ...otherProps
    }: CheckboxProps,
    ref
  ) {
    const randomId = nextId('glints-checkbox');
    const checkBoxId = id ? id : randomId;
    const labelId = `label-${checkBoxId}`;

    const inputNode = useRef<HTMLInputElement>(null);
    const [checkedState, setCheckedState] = useState<'mixed' | boolean>(false);
    const [isFocused, setIsFocused] = useState(false);
    const checkedIcon = indeterminate
      ? 'ri-checkbox-indeterminate-fill'
      : 'ri-checkbox-fill';

    useEffect(() => {
      const value = indeterminate ? 'mixed' : checked;
      setCheckedState(value);
    }, [checked, indeterminate]);

    const handleClick = () => {
      if (!inputNode.current || disabled) {
        return;
      }

      const checkedValue = !checkedState;
      setCheckedState(checkedValue);
      onChange?.(checkedValue, checkBoxId);
    };

    return (
      <StyledContainer
        ref={ref}
        aria-disabled={disabled}
        data-error={hasError}
        data-spacing={isPadded}
      >
        <StyledRow>
          <StyledLeftColumn>
            <StyledCheckboxContainer>
              <StyledCheckbox
                role="checkbox"
                aria-labelledby={labelId}
                aria-checked={checkedState}
                data-focus={isFocused}
                onClick={() => handleClick()}
                onMouseDown={() => setIsFocused(false)}
                onMouseUp={() => setIsFocused(false)}
                hasError={hasError}
              >
                <input
                  ref={inputNode}
                  disabled={disabled}
                  id={checkBoxId}
                  type="checkbox"
                  onChange={noop}
                  checked={checked}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  {...otherProps}
                />
              </StyledCheckbox>
              <Icon name={checkedIcon} />
            </StyledCheckboxContainer>
          </StyledLeftColumn>
          <StyledColumn>
            <label
              id={labelId}
              htmlFor={checkBoxId}
              onClick={e => {
                e.preventDefault();
                handleClick();
              }}
              onMouseDown={e => e.preventDefault()}
              onMouseUp={e => e.preventDefault()}
            >
              {
                <Typography as="div" variant="body1">
                  {label}
                </Typography>
              }
            </label>
          </StyledColumn>
        </StyledRow>
        {helpText && (
          <StyledRow>
            <StyledLeftColumn></StyledLeftColumn>
            <StyledColumn className="help-text">
              <Typography as="span" variant="subtitle2">
                {helpText}
              </Typography>
            </StyledColumn>
          </StyledRow>
        )}
      </StyledContainer>
    );
  }
);
