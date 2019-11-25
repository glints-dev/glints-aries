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
  let iconIndex = null;
  let content = [children];
  for(let i=0; i < childElement.length; i++) {
    if(childElement[i].props &&  childElement[i].props.position){
      iconIndex = i;
      break;
    }
  }
  if (childElement[iconIndex]) {
    content = [
      childElement[0],
      <span className="icon-content">{childElement[1]}</span>
    ];
    if (
      childElement[iconIndex].props.position &&
      childElement[iconIndex].props.position === Position.LEFT
    ) {
      content = [
        <span
          className="icon-content"
          style={{paddingRight: '10px', paddingLeft: '0'}}
        >
          {childElement[iconIndex]}
        </span>,
        childElement[0]
      ]
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
          {content}
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
          {content}
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
  shape?: string;
}

export default Button;
