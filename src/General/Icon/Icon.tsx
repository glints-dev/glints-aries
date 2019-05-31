import * as React from 'react';
import { ICONS } from '../../Utils/IconLibrary';

const Icon: React.FunctionComponent<Props> = (props) => {
  const { name, color } = props;
  const iconName = name.replace(/-/g, '_');

  return (
    <svg width="1em" height="1em" fill={color} viewBox="0 0 100 100">
      {(ICONS as any)[iconName.toUpperCase()]}
    </svg>
  );
};

interface Props {
  name: string;
  color: string;
}

export default Icon;
