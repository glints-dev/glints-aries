import * as React from 'react';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { ICONS } from '../../Utils/Icon/IconLibrary';

var formatWarning = function formatWarning(name) {
  var camelCaseName = upperFirst(camelCase(name));
  return "Warning: <Icon name=\"" + name + "\" /> will be deprecated in a future release.\n\nPlease use <" + camelCaseName + "Icon /> to instead. See http://aries.glints.design/?path=/story/general--icon for details.";
};

var LegacyIcon = function LegacyIcon(props) {
  var name = props.name,
      color = props.color;
  var iconName = name.replace(/-/g, '_');

  if (typeof console !== 'undefined') {
    console.warn(formatWarning(name));
  }

  return /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    fill: color,
    viewBox: "0 0 100 100"
  }, ICONS[iconName.toUpperCase()]);
};

export default LegacyIcon;