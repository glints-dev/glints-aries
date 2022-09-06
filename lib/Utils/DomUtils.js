"use strict";

exports.__esModule = true;
exports.escEvent = escEvent;
exports.tabEvent = tabEvent;

// DOM utilities

/**
 * Returns a value when ESC button is triggered.
 *
 * @param  {Function} value
 * @return {Function}
 */
function escEvent(value) {
  var listener = function listener(e) {
    if (e.keyCode === 27) {
      return value();
    }

    return 0;
  };

  return listener;
}
/**
 * Returns a value when Tab button is triggered.
 *
 * @param  {Function} value
 * @return {Function}
 */


function tabEvent(value) {
  var listener = function listener(e) {
    if (e.keyCode === 9) {
      return value();
    }

    return 0;
  };

  return listener;
}