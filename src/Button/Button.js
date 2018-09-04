/* @flow */

import React, { Fragment } from 'react';
import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant } from '../Utils/StyleConfig';

const renderButton = ({
  id,
  variant,
  theme,
  children,
  onClick,
  className,
  hoverColor,
  ...defaultProps,
}: Props) => {
  switch (variant) {
    case Variant.PRIMARY:
      return (
        <PrimaryButton
          id={id}
          onClick={onClick}
          theme={theme}
          className={className}
          hoverColor={hoverColor}
          {...defaultProps}
        >
          {children}
        </PrimaryButton>
      );
    case Variant.SECONDARY:
      return (
        <SecondaryButton
          id={id}
          onClick={onClick}
          className={className}
          hoverColor={hoverColor}
          {...defaultProps}
        >
          {children}
        </SecondaryButton>
      );
    case Variant.GHOST:
      return (
        <GhostButton
          id={id}
          theme={theme}
          onClick={onClick}
          className={className}
          hoverColor={hoverColor}
          {...defaultProps}
        >
          {children}
        </GhostButton>
      );
    case Variant.LINK:
      return (
        <LinkButton
          id={id}
          theme={theme}
          onClick={onClick}
          className={className}
          hoverColor={hoverColor}
          {...defaultProps}
        >
          {children}
        </LinkButton>
      );
    default:
      return (
        <DefaultButton
          id={id}
          theme={theme}
          onClick={onClick}
          className={className}
          hoverColor={hoverColor}
          {...defaultProps}
        >
          {children}
        </DefaultButton>
      );
  }
};

const Button = (props: Props) => (
  <Fragment>
    {renderButton(props)}
  </Fragment>
);

type Props = {
  id: string,
  variant: string,
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
  hoverColor: string
}

export default Button;
