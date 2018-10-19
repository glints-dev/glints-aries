/* @flow */

import React from 'react';
import { LoadingContainer, Spinner } from '../../Style/General/LoadingStyle';

const Loading = (props: Props) => {
  const {
    size,
    className,
  } = props;

  return (
    <LoadingContainer
      className={className}
      role="alert"
      aria-busy="true"
      aria-live="polite"
    >
      <Spinner size={size} />
    </LoadingContainer>
  );
};

type Props = {
  size: string,
  className: string,
};

export default Loading;
