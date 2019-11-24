import * as React from 'react';

const Icon: React.FunctionComponent<Props> = props => {
  const { children, color, position } = props;

  return (
    <svg width="1em" height="1em" fill={color} viewBox="0 0 100 100">
      {children}
    </svg>
  );
};

export interface Props {
  children: React.ReactNode;
  color?: string;
  position?: string;
}

export default Icon;
