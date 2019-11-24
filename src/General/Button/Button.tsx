import * as React from 'react';

import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';
import IconButton from './IconButton';

import { Position, Variant } from '../../Utils/StyleConfig';

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
  shape = 'default',
  ...defaultProps
}) => {
  const childElement = React.Children.map(children, child => {
    return child;
  });
  if (childElement[1]) {
    if (
      childElement[1].props.position &&
      childElement[1].props.position === Position.LEFT
    ) {
      const swapElement = childElement[1];
      childElement[1] = childElement[0];
      childElement[0] = swapElement;
    }
  }
  switch (variant) {
    case Variant.PRIMARY:
      return (
        <PrimaryButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          theme={theme}
          {...defaultProps}
        >
          {childElement[0]}
          <span className="icon-content">
            {childElement[1]}
          </span>
        </PrimaryButton>
      );
    case Variant.SECONDARY:
      return (
        <SecondaryButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {childElement[0]}
          <span className="icon-content">
            {childElement[1]}
          </span>
        </SecondaryButton>
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
          theme={theme}
          {...defaultProps}
        >
          {childElement[0]}
          <span className="icon-content">
            {childElement[1]}
          </span>
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
    case Variant.ICON:
      return (
        <IconButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          shape={shape}
          {...defaultProps}
        >
          {children}
        </IconButton>
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
          {childElement[0]}
          <span className="icon-content">
            {childElement[1]}
          </span>
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
  shape?: string;
}

export default Button;
