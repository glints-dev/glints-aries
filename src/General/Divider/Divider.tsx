import * as React from 'react';
import { DividerContainer } from '../../Style/General/DividerStyle';

const Divider: React.FunctionComponent<Props> = (props) => {
  const {
    theme,
    className,
    style,
  } = props;

  return (
    <DividerContainer
      id="aries-divider"
      className={className}
      style={style}
      theme={theme}
    />
  );
};

interface Props {
  theme?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default Divider;
