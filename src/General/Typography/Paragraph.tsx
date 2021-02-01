import * as React from 'react';
import classNames from 'classnames';

import {
  Paragraph as StyledParagraph,
  ParagraphProps,
} from './ParagraphStyles';
import { Greyscale } from '../../Utils/Colors';

export const Paragraph: React.FunctionComponent<Props> = ({
  className,
  children,
  variant = 'regular',
  bold = false,
  color = Greyscale.black,
  ellipsis = false,
  shouldSetLineHeight = false,
  ...restProps
}) => {
  return (
    <StyledParagraph
      className={classNames('aries-typography-paragraph', className)}
      variant={variant}
      bold={bold}
      color={color}
      ellipsis={ellipsis}
      shouldSetLineHeight={shouldSetLineHeight}
      {...restProps}
    >
      {children}
    </StyledParagraph>
  );
};

export interface Props extends ParagraphProps {
  className?: string;
  children: React.ReactNode;
  shouldSetLineHeight?: boolean;
}

export default Paragraph;
