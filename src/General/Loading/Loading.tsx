import * as React from 'react';
import classNames from 'classnames';
import { LoadingContainer, Spinner } from '../../Style/General/LoadingStyle';

const Loading: React.FunctionComponent<Props> = (props) => {
  const {
    className,
  } = props;

  return (
    <LoadingContainer
      className={classNames('aries-loading', className)}
      role="alert"
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
