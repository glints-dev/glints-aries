import * as React from 'react';

import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant } from '../../Utils/StyleConfig';

const renderButton: React.FunctionComponent<Props> = ({
  className,
  variant,
  theme,
  children,
  block,
  small,
  removeHoverEffect,
  onClick,
  ...defaultProps
}) => {
  switch (variant) {
    case Variant.PRIMARY:
      return (
        <PrimaryButton
          className={className}
          theme={theme}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {children}
        </PrimaryButton>
      );
    case Variant.SECONDARY:
      return (
        <SecondaryButton
          className={className}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {children}
        </SecondaryButton>
      );
    case Variant.GHOST:
      return (
        <GhostButton
          className={className}
          theme={theme}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {children}
        </GhostButton>
      );
    case Variant.LINK:
      return (
        <LinkButton
          className={className}
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
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {children}
        </DefaultButton>
      );
  }
};

const Button: React.FunctionComponent<Props> = props => (
  <React.Fragment>{renderButton(props)}</React.Fragment>
);

export interface Props {
  variant?: string;
  theme?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  block?: boolean;
  small?: boolean;
  children: React.ReactNode;
  className?: string;
  removeHoverEffect?: boolean;
}

export default Button;
