import * as React from 'react';
import classNames from 'classnames';

import {
  SolidButton,
  GhostButton,
  SolidShadowButton,
  LinkButton,
  StartIconContainer,
  EndIconContainer,
} from '../../Style/General/ButtonStyle';
import { Size, Theme, Variant } from '../../Utils/StyleConfig';

const renderButton: React.FunctionComponent<Props> = ({
  className,
  onClick,
  block,
  disabled,
  size,
  tag,
  theme,
  variant,
  startIcon,
  endIcon,
  children,
  ...restProps
}) => {
  const commonProps = {
    onClick,
    block,
    disabled,
    size,
    as: (tag as React.ElementType) || 'button',
    ...restProps,
  };
  const content = (
    <>
      {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      {children}
      {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
    </>
  );
  switch (variant) {
    case Variant.SOLID_SHADOW:
      return (
        <SolidShadowButton
          {...commonProps}
          className={classNames('aries-solid-shadowbtn', className)} // 'aries-primarybtn'
        >
          {content}
        </SolidShadowButton>
      );
    case Variant.GHOST:
      return (
        <GhostButton
          {...commonProps}
          className={classNames('aries-ghostbtn', className)}
        >
          {content}
        </GhostButton>
      );
    case Variant.LINK:
      return (
        <LinkButton
          {...commonProps}
          className={classNames('aries-linkbtn', className)}
        >
          {content}
        </LinkButton>
      );
    default:
      return (
        <SolidButton
          {...commonProps}
          className={classNames('aries-solidbtn', className)} // aries-defaultbtn
          theme={theme}
        >
          {content}
        </SolidButton>
      );
  }
};

const Button: React.FunctionComponent<Props> = props => renderButton(props);

export interface ButtonStyleProps {
  block?: boolean;
  disabled?: boolean;
  size?: Size;
  theme?: Theme;
}

export interface Props extends ButtonStyleProps {
  className?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  tag?: React.ElementType;
  variant?: Variant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

export default Button;
