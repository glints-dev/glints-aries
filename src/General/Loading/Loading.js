/* @flow */

import React from 'react';
import { LoadingContainer, Spinner } from '../../Style/LoadingStyle';

const Loading = (props: Props) => {
  const {
    size,
    className,
  } = props;

  return (
    <LoadingContainer className={className}>
      <Spinner size={size} />
    </LoadingContainer>
  );
};

type Props = {
  size: string,
  className: string,
};

export default Loading;
