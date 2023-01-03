import React from 'react';
import Typography from '../Typography';
import { BasicButton } from './ButtonStyle';

export type ButtonSize = 'default' | 'slim' | 'large';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children?: React.ReactNode;
  active?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = ({ children, ...otherProps }: ButtonProps) => {
  const content =
    typeof children === 'string' ? (
      <Typography variant="caption"> {children}</Typography>
    ) : (
      children
    );

  return (
    <BasicButton {...otherProps} onMouseUp={e => e.currentTarget.blur()}>
      {content}
    </BasicButton>
  );
};
