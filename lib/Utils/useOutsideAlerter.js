"use strict";

exports.__esModule = true;
exports.useOutsideAlerter = void 0;

var _react = require("react");

/**
 * Hook that alerts clicks outside of the passed ref
 */
var useOutsideAlerter = function useOutsideAlerter(ref, callback) {
  (0, _react.useEffect)(function callCallbackOnOutsideClick() {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ref]);
};

exports.useOutsideAlerter = useOutsideAlerter;