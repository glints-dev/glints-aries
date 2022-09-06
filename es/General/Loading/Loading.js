import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import { LoadingContainer, Spinner } from './LoadingStyle';
/** The loading spinner does not support resizing at the moment, but as a workaround you can use the className attribute to change it's styles manually. */

export var Loading = function Loading(props) {
  var className = props.className;
  return /*#__PURE__*/React.createElement(LoadingContainer, _extends({
    "data-testid": "alert"
  }, props, {
    className: classNames('aries-loading', className),
    role: "alert",
    "aria-busy": "true",
    "aria-live": "polite"
  }), /*#__PURE__*/React.createElement(Spinner, null));
};
export default Loading;