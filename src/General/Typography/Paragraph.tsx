import * as React from 'react';
import classNames from 'classnames';

import {
  Paragraph as StyledParagraph,
  ParagraphProps,
} from './ParagraphStyles';
import { SecondaryColor } from '../../Utils/Colors';

const Paragraph: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    variant = 'regular',
    bold,
    color = SecondaryColor.black,
    ellipsis,
    ...restProps
  } = props;

  return (
    <StyledParagraph
      className={classNames('aries-typography-paragraph', className)}
      variant={variant}
      bold={bold}
      color={color}
      ellipsis={ellipsis}
      {...restProps}
    >
      {children}
    </StyledParagraph>
  );
};

interface Props extends ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

export default Paragraph;
