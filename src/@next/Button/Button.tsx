import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import { Typography } from '../Typography';
import { StyledButton } from './ButtonStyle';

export type ButtonSize = 'default' | 'slim' | 'large';
export type IconPosition = 'left' | 'right';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children?: React.ReactNode;
  /** Indicate if the button is currently selected  */
  active?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  loading?: boolean;
}

export const Button = ({
  children,
  icon,
  iconPosition = 'left',
  active,
  fullWidth,
  loading,
  ...otherProps
}: ButtonProps) => {
  const content =
    typeof children === 'string' ? (
      <Typography variant="button"> {children}</Typography>
    ) : (
      children
    );

  const renderIcon = (position: IconPosition) => {
    if (icon && position === iconPosition) {
      return icon;
    }

    return null;
  };

  return (
    <StyledButton
      data-active={active}
      data-full-width={fullWidth}
      data-loading={loading}
      data-icon={!!icon}
      {...otherProps}
      onMouseUp={e => e.currentTarget.blur()}
    >
      {loading && <Spinner />}
      {renderIcon('left')}
      {content}
      {renderIcon('right')}
    </StyledButton>
  );
};
