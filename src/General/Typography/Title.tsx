import * as React from 'react';
import classNames from 'classnames';

import { Title as StyledTitle } from './TitleStyles';
import { Greyscale } from '../../Utils/Colors';

export const Title: React.FunctionComponent<Props> = ({
  className,
  children,
  color = Greyscale.black,
  ellipsis = false,
  tag = 'h1',
  uppercase = false,
  ...restProps
}) => {
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

export interface Props {
  className?: string;
  children: React.ReactNode;
  /** Sets the Title's color */
  color?: string;
  /** Display ellipsis when the title overflows */
  ellipsis?: boolean;
  /** Sets the title tag to one of the heading tags */
  tag?: tagType;
  /** Makes the title in all upper case */
  uppercase?: boolean;
}

export default Title;
