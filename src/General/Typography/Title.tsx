import * as React from 'react';
import classNames from 'classnames';

import { Title as StyledTitle } from './TitleStyles';
import { Greyscale } from '../../Utils/Colors';

const Title: React.FunctionComponent<Props> = (props: Props) => {
  const {
    className,
    children,
    color = Greyscale.black,
    ellipsis,
    tag = 'h1',
    uppercase = false,
    ...restProps
  } = props;

  return (
    <StyledTitle
      className={classNames('aries-typography-title', className)}
      as={tag}
      color={color}
      ellipsis={ellipsis}
      uppercase={uppercase}
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
  uppercase?: boolean;
}

export default Title;
