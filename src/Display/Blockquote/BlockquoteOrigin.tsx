import * as React from 'react';
import classNames from 'classnames';
import { BlockquoteOriginWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteOrigin: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteOriginWrapper className={classNames('blockquote-origin', className)}>
      {children}
    </BlockquoteOriginWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteOrigin;
