import * as React from 'react';
import { BlockquoteProfileWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteProfile: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteProfileWrapper id="blockquote-profile" className={className}>
      {children}
    </BlockquoteProfileWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteProfile;
