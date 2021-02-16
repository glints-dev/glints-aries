import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { LoadingContainer, Spinner } from './LoadingStyle';

/** The loading spinner does not support resizing at the moment, but as a workaround you can use the <code>className</code> attribute to change it's styles manually. */
export const Loading: FC<Props> = props => {
  const { className } = props;

  return (
    <LoadingContainer
      data-testid="alert"
      {...props}
      className={classNames('aries-loading', className)}
      role="alert"
      aria-busy="true"
      aria-live="polite"
    >
      <Spinner />
    </LoadingContainer>
  );
};

export type Props = HTMLAttributes<HTMLDivElement>;

export default Loading;
