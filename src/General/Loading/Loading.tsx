import * as React from 'react';
import classNames from 'classnames';
import { LoadingContainer, Spinner } from './LoadingStyle';

const Loading: React.FunctionComponent<Props> = props => {
  const { className } = props;

  return (
    <LoadingContainer
      className={classNames('aries-loading', className)}
      role="alert"
      data-testid="alert"
      aria-busy="true"
      aria-live="polite"
    >
      <Spinner />
    </LoadingContainer>
  );
};

interface Props {
  className?: string;
}

export default Loading;
