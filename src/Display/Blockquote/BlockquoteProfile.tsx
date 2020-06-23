import * as React from 'react';
import classNames from 'classnames';
import { BlockquoteProfileWrapper } from './BlockquoteStyle';

const BlockquoteProfile: React.FunctionComponent<Props> = props => {
  const { children, className } = props;

  return (
    <BlockquoteProfileWrapper
      className={classNames('blockquote-profile', className)}
    >
      {children}
    </BlockquoteProfileWrapper>
  );
};

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default BlockquoteProfile;
