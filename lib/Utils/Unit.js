"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

function memoize(fn) {
  var cacheMap = new Map();
  return function (key) {
    var cacheKey = key;
    var cache = cacheMap.get(cacheKey);

    if (cache) {
      return cache;
    }

    var result = fn(key);
    cacheMap.set(cacheKey, result);
    return result;
  };
}

var Unit = function Unit() {};

exports["default"] = Unit;
Unit.numToRem = memoize(function (num) {
  return (num * 0.1).toFixed(1) + "rem";
});

Unit.formatDate = function (date) {
  return (0, _moment["default"])(date).diff(Date.now(), 'days') === 0 ? (0, _moment["default"])(date).locale('id').fromNow() : (0, _moment["default"])(date).locale('id').format('D MMMM');
};

Unit.deltaDate = function (date) {
  return date.diff((0, _moment["default"])(), 'days');
};