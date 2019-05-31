import * as React from 'react';
import { LoadingContainer, Spinner } from '../../Style/General/LoadingStyle';

const Loading: React.FunctionComponent<Props> = (props) => {
  const {
    className,
  } = props;

  return (
    <LoadingContainer
      id="aries-loading"
      className={className}
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
