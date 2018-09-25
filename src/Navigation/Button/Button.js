/* @flow */

import React, { Fragment } from 'react';

import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant } from '../../Utils/StyleConfig';

const renderButton = ({
  variant,
  theme,
  children,
  onClick,
  className,
  ...defaultProps
}: Props) => {
  switch (variant) {
    case Variant.PRIMARY:
      return (
        <PrimaryButton
          theme={theme}
          className={className}
          onClick={onClick}
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
          {...defaultProps}
        >
          {children}
        </SecondaryButton>
      );
    case Variant.GHOST:
      return (
        <GhostButton
          theme={theme}
          className={className}
          onClick={onClick}
          {...defaultProps}
        >
          {children}
        </GhostButton>
      );
    case Variant.LINK:
      return (
        <LinkButton
          theme={theme}
          className={className}
          onClick={onClick}
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
  variant: string,
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
}

export default Button;
