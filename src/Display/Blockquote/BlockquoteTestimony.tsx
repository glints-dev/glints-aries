import * as React from 'react';
import classNames from 'classnames';
import { BlockquoteTestimonyWrapper } from './BlockquoteStyle';

const BlockquoteTestimony: React.FunctionComponent<Props> = props => {
  const { children, className } = props;

  return (
    <BlockquoteTestimonyWrapper
      className={classNames('blockquote-testimony', className)}
    >
      {children}
    </BlockquoteTestimonyWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteTestimony;
