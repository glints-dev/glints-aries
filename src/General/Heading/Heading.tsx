import React, { HTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import { HeadingContainer } from './HeadingStyle';

export const Heading: FC<Props> = props => {
  const {
    className,
    inline = false,
    children,
    uppercaseText = false,
    ...defaultProps
  } = props;

  return (
    <HeadingContainer
      role="heading"
      className={classNames('aries-heading', className)}
      inline={inline}
      uppercaseText={uppercaseText}
      {...defaultProps}
    >
      <span className="heading-text">{children}</span>
    </HeadingContainer>
  );
};

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  inline?: boolean;
  uppercaseText?: boolean;
}

export default Heading;
