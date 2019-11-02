import * as React from 'react';
import classNames from 'classnames';

import { Title as StyledTitle } from './TitleStyles';
import { SecondaryColor } from '../../Style/Colors';

const Title: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    color = SecondaryColor.black,
    ellipsis,
    tag = 'h1',
    ...restProps
  } = props;

  return (
    <StyledTitle
      className={classNames('aries-typography-title', className)}
      as={tag}
      color={color}
      ellipsis={ellipsis}
      {...restProps}
    >
      {children}
    </StyledTitle>
  );
};

export type tagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  className?: string;
  children: React.ReactNode;
  color?: string;
  ellipsis?: boolean;
  tag?: tagType;
}

export default Title;
