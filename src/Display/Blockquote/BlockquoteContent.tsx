import * as React from 'react';
import classNames from 'classnames';
import { BlockquoteContentWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteContent: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteContentWrapper className={classNames('blockquote-contentwrapper', className)}>
      {children}
    </BlockquoteContentWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteContent;
