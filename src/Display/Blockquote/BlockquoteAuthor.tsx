import * as React from 'react';
import { BlockquoteAuthorWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteAuthor: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteAuthorWrapper id="blockquote-author" className={className}>
      {children}
    </BlockquoteAuthorWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteAuthor;
