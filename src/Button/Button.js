/* @flow */

import React, { Fragment } from 'react';
import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant } from '../Utils/StyleConfig';

const renderButton = ({
  variant,
  theme,
  children,
  onClick,
  className,
  hoverColor,
}: Props) => {
  switch (variant) {
    case Variant.PRIMARY:
      return (
        <PrimaryButton theme={theme} onClick={onClick} className={className} hoverColor={hoverColor}>
          {children}
        </PrimaryButton>
      );
    case Variant.SECONDARY:
      return (
        <SecondaryButton onClick={onClick} className={className} hoverColor={hoverColor}>
          {children}
        </SecondaryButton>
      );
    case Variant.GHOST:
      return (
        <GhostButton theme={theme} onClick={onClick} className={className} hoverColor={hoverColor}>
          {children}
        </GhostButton>
      );
    case Variant.LINK:
      return (
        <LinkButton theme={theme} onClick={onClick} className={className} hoverColor={hoverColor}>
          {children}
        </LinkButton>
      );
    default:
      return (
        <DefaultButton theme={theme} onClick={onClick} className={className} hoverColor={hoverColor}>
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
  hoverColor: string
}

export default Button;
