import React, { useLayoutEffect, useState } from 'react';
export var DelayedUnmount = function DelayedUnmount(_ref) {
  var children = _ref.children,
      mount = _ref.mount,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 300 : _ref$delay;

  var _useState = useState(false),
      shouldRender = _useState[0],
      setShouldRender = _useState[1];

  useLayoutEffect(function setToRender() {
    if (mount) setShouldRender(true);
  }, [mount]);
  useLayoutEffect(function () {
    if (!mount) {
      var timeout = setTimeout(function () {
        return setShouldRender(false);
      }, delay);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [mount, delay]);
  return shouldRender && /*#__PURE__*/React.createElement(React.Fragment, null, children);
};