import * as React from 'react';

import SolidButton from './SolidButton';
import SolidShadowButton from './SolidShadowButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { ButtonVariant } from '../../Utils/StyleConfig';
import {
  StartIconContainer,
  EndIconContainer,
} from '../../Style/General/ButtonStyle';

const renderButton: React.FunctionComponent<Props> = ({
  children,
  block,
  className,
  disabled,
  onClick,
  removeHoverEffect,
  small,
  theme,
  variant,
  startIcon,
  endIcon,
  ...defaultProps
}) => {
  const content = (
    <>
      {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      {children}
      {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
    </>
  );

  switch (variant) {
    case ButtonVariant.SOLID_SHADOW:
      return (
        <SolidShadowButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {content}
        </SolidShadowButton>
      );
    case ButtonVariant.GHOST:
      return (
        <GhostButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {content}
        </GhostButton>
      );
    case ButtonVariant.LINK:
      return (
        <LinkButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          {...defaultProps}
        >
          {children}
        </LinkButton>
      );
    default:
      return (
        <SolidButton
          theme={theme}
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {content}
        </SolidButton>
      );
  }
};

const Button: React.FunctionComponent<Props> = props => (
  <React.Fragment>{renderButton(props)}</React.Fragment>
);

export interface Props {
  children: React.ReactNode;
  block?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  removeHoverEffect?: boolean;
  small?: boolean;
  theme?: string;
  variant?: string;
  tag?: React.ElementType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default Button;
