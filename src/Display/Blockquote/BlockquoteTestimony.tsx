import * as React from 'react';
import { BlockquoteTestimonyWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteTestimony: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteTestimonyWrapper id="blockquote-testimony" className={className}>
      {children}
    </BlockquoteTestimonyWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteTestimony;
