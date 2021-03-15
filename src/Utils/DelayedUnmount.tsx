import React, { useLayoutEffect, useState } from 'react';

interface Props {
  mount: boolean;
  delay?: number;
}

export const DelayedUnmount: React.FC<Props> = ({
  children,
  mount,
  delay = 300,
}) => {
  const [shouldRender, setShouldRender] = useState(false);

  useLayoutEffect(
    function setToRender() {
      if (mount) setShouldRender(true);
    },
    [mount]
  );

  useLayoutEffect(() => {
    if (!mount) {
      const timeout = setTimeout(() => setShouldRender(false), delay);
      return () => clearTimeout(timeout);
    }
  }, [mount, delay]);
  return shouldRender && <>{children}</>;
};
