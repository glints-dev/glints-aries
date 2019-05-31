import * as React from 'react';
import classNames from 'classnames';
import { BlockquoteAuthorWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteAuthor: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteAuthorWrapper className={classNames('blockquote-author', className)}>
      {children}
    </BlockquoteAuthorWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteAuthor;
