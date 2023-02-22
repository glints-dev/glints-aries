import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const content =
    typeof children === 'string' && !monochrome ? (
      <StyledTypography variant="body1">{children}</StyledTypography>
    ) : (
      children
    );

  const setIconColor = () => {
    let color = Blue.S99;

    if (isHovered) {
      color = Blue.S100;
    }

    if (isActive) {
      color = 'rgba(0, 86, 140, 0.9)';
    }
    return color;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <StyledLink
        href={url}
        data-underline={!removeUnderline}
        data-monochrome={monochrome}
        {...(external && { target: '_blank' })}
        {...props}
      >
        {content}
        {external && (
          <StyledIcon
            fill={setIconColor()}
            name="ri-external-link-line"
            data-hover={isHovered}
            data-active={isActive}
          />
        )}
      </StyledLink>
    </div>
  );
};
