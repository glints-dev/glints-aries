import * as React from 'react';

import SolidButton from './SolidButton';
import SolidShadowButton from './SolidShadowButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { ButtonVariant, ButtonTheme } from '../../Utils/StyleConfig';
import {
  StartIconContainer,
  EndIconContainer,
  WhiteGreyBtn,
} from '../../Style/General/ButtonStyle';

const SOLID_BUTTON_THEME_MAP = {
  [ButtonVariant.SOLID_WHITE]: ButtonTheme.WHITE,
  [ButtonVariant.SOLID_BLUE]: ButtonTheme.BLUE,
};

const renderButton: React.FunctionComponent<Props> = ({
  children,
  block,
  className,
  disabled,
  onClick,
  small,
  variant = ButtonVariant.SOLID_WHITE,
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
    case ButtonVariant.YELLOW:
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
          {...defaultProps}
        >
          {content}
        </GhostButton>
      );
    case ButtonVariant.WHITE_GREY:
      return (
        <WhiteGreyBtn
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {content}
        </WhiteGreyBtn>
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
          theme={SOLID_BUTTON_THEME_MAP[variant]}
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
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
  small?: boolean;
  variant?: string;
  tag?: React.ElementType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default Button;
