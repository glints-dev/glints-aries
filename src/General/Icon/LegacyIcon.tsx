import * as React from 'react';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

import { ICONS } from '../../Utils/Icon/IconLibrary';

const formatWarning = (name: string) => {
  const camelCaseName = upperFirst(camelCase(name));

  return `Warning: <Icon name="${name}" /> will be deprecated in a future release.\n\nPlease use <${camelCaseName}Icon /> to instead. See http://aries.glints.design/?path=/story/general--icon for details.`;
};

const LegacyIcon: React.FunctionComponent<Props> = props => {
  const { name, color } = props;
  const iconName = name.replace(/-/g, '_');

  if (typeof console !== 'undefined') {
    console.warn(formatWarning(name));
  }

  return (
    <svg width="1em" height="1em" fill={color} viewBox="0 0 100 100">
      {(ICONS as any)[iconName.toUpperCase()]}
    </svg>
  );
};

export interface Props {
  name: string;
  color?: string;
}

export default LegacyIcon;
