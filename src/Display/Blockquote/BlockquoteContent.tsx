import * as React from 'react';
import { BlockquoteContentWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteContent: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteContentWrapper id="blockquote-contentwrapper" className={className}>
      {children}
    </BlockquoteContentWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteContent;
