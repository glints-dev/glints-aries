import * as React from 'react';
import { BlockquoteOriginWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteOrigin: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteOriginWrapper id="blockquote-origin" className={className}>
      {children}
    </BlockquoteOriginWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteOrigin;
