import React, { useEffect, useRef } from 'react';
import { Icon } from '../../../Icon';

import { Typography } from '../../../Typography';
import { Neutral } from '../../../utilities/colors';
import {
  ActivatorSelectContextProps,
  useSelectActivator,
} from './ActivatorContext';
import { StyledSelect } from './ActivatorStyle';

export interface ActivatorSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  placeholder?: string;
  hasError?: boolean;
  width?: number;
  setWidth?: React.Dispatch<(prevState: undefined) => undefined>;
}
export const ActivatorSelect = ({
  disabled = false,
  placeholder,
  value,
  onClick,
  ...props
}: ActivatorSelectProps) => {
  const activatorRef = useRef(null);
  const hasValue = !!value;
  const activatorContext = useSelectActivator() as ActivatorSelectContextProps;
  const { onSelectClick, hasError, setWidth } = activatorContext;

  useEffect(() => {
    setWidth(activatorRef.current.getBoundingClientRect().width);
  }, [activatorRef, setWidth]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onSelectClick();
    onClick(e);
  };

  return (
    <StyledSelect
      ref={activatorRef}
      disabled={disabled}
      data-error={hasError}
      onClick={handleClick}
      {...props}
    >
      <Typography variant="body1" color={hasValue ? Neutral.B18 : Neutral.B40}>
        {hasValue ? value : placeholder}
      </Typography>
      <Icon
        height={24}
        name="ri-arrow-m-down-line"
        fill={disabled ? Neutral.B85 : Neutral.B40}
      />
    </StyledSelect>
  );
};
