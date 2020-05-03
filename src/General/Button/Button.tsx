import * as React from 'react';

import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant } from '../../Utils/StyleConfig';
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
    case Variant.PRIMARY:
      return (
        <PrimaryButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {content}
        </PrimaryButton>
      );
    case Variant.GHOST:
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
    case Variant.LINK:
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
        <DefaultButton
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
        </DefaultButton>
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
