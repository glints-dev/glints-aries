import * as React from 'react';
import classNames from 'classnames';

import { Title as StyledTitle } from './TitleStyles';

const Title: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    color,
    ellipsis,
    tag = 'h1',
    ...defaultProps
  } = props;

  return (
    <StyledTitle
      className={classNames('aries-typography-title', className)}
      as={tag}
      color={color}
      ellipsis={ellipsis}
      {...defaultProps}
    >
      {children}
    </StyledTitle>
  );
};

interface Props {
  className?: string;
  children: React.ReactNode;
  color?: string;
  ellipsis?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default Title;
