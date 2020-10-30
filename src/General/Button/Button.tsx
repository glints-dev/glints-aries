import React from 'react';

import SolidButton from './SolidButton';
import SolidShadowButton from './SolidShadowButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { ButtonVariant, ButtonTheme } from '../../Utils/StyleConfig';
import {
  StartIconContainer,
  EndIconContainer,
  WhiteGreyBtn,
} from './ButtonStyle';

const SOLID_BUTTON_THEME_MAP = {
  [ButtonVariant.SOLID_WHITE]: ButtonTheme.WHITE,
  [ButtonVariant.SOLID_BLUE]: ButtonTheme.BLUE,
};

export const transformVariant = (variant: string, theme?: string) => {
  if (theme) {
    console.warn(
      `Warning: Button's theme prop is deprecated and will be removed in a future release.\nPlease use the variant prop instead.`
    );
  }

  if (
    (variant === ButtonVariant.SOLID_WHITE || variant === 'default') &&
    theme &&
    theme !== ButtonTheme.WHITE
  ) {
    console.warn(
      `Warning: Button's 'default' variant is deprecated and will be removed in a future release.\nPlease use the 'solid-blue' or 'solid-white' variant instead.`
    );
    return ButtonVariant.SOLID_BLUE;
  } else if (variant === 'primary') {
    console.warn(
      `Warning: Button's 'primary' variant is deprecated and will be removed in a future release.\nPlease use the 'yellow' variant instead.`
    );
    return ButtonVariant.YELLOW;
  } else if (Object.values(ButtonVariant).includes(variant)) {
    return variant;
  }
  return ButtonVariant.SOLID_WHITE;
};

export const Button: React.FC<Props> = ({
  children,
  block = false,
  className,
  disabled = false,
  onClick,
  small = false,
  variant = ButtonVariant.SOLID_WHITE,
  startIcon,
  endIcon,
  theme,
  ...defaultProps
}) => {
  const content = (
    <>
      {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      {children}
      {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
    </>
  );

  const transformedVariant = transformVariant(variant, theme);

  switch (transformedVariant) {
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
          {content}
        </LinkButton>
      );
    default:
      return (
        <SolidButton
          theme={SOLID_BUTTON_THEME_MAP[transformedVariant]}
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

export type ButtonVariantType =
  | 'solid-white'
  | 'solid-blue'
  | 'yellow'
  | 'ghost'
  | 'white-grey'
  | 'link';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Make the button fit to its parent width. */
  block?: boolean;
  className?: string;
  /** Sets Button to disable state. */
  disabled?: boolean;
  /** Callback when click. */
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  /** Sets Button to small version. */
  small?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariantType;
  /** Changes the tag with which the button will render. */
  tag?: React.ElementType;
  /** Element placed before the children. */
  startIcon?: React.ReactNode;
  /** Element placed after the children. */
  endIcon?: React.ReactNode;
  /** Deprecated! */
  theme?: string;
  ref?: React.RefObject<HTMLButtonElement>;
}

const forwardRef = (
  props: Props,
  forwardedRef: React.RefObject<HTMLButtonElement>
) => <Button ref={forwardedRef} {...props} />;

forwardRef.displayName = Button.name;

export default React.forwardRef(forwardRef);
