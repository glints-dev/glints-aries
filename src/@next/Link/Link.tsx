import React from 'react';
import { Icon } from '../Icon';
import { Blue } from '../utilities/colors';
import { StyledIcon, StyledLink, StyledTypography } from './LinkStyle';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  id?: string;
  url?: string;
  external?: boolean;
  monochrome?: boolean;
  removeUnderline?: boolean;
}

export const Link = ({
  children,
  external = false,
  monochrome = false,
  removeUnderline = false,
  url,
  ...props
}: LinkProps) => {
  const content =
    typeof children === 'string' && !monochrome ? (
      <StyledTypography variant="body1">{children}</StyledTypography>
    ) : (
      children
    );

  return (
    <StyledLink
      href={url}
      data-underline={!removeUnderline}
      data-monochrome={monochrome}
      {...props}
    >
      {content}
      {external && <StyledIcon fill={Blue.S99} name="ri-external-link-line" />}
    </StyledLink>
  );
};
