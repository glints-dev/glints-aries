'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Unit = function Unit() {
  (0, _classCallCheck3.default)(this, Unit);
};

Unit.numToRem = memoize(function (num) {
  return (num * 0.1).toFixed(1) + 'rem';
});

Unit.formatDate = function (date) {
  return (0, _moment2.default)(date).diff(Date.now(), 'days') === 0 ? (0, _moment2.default)(date).locale('id').fromNow() : (0, _moment2.default)(date).locale('id').format('D MMMM');
};

Unit.deltaDate = function (date) {
  return date.diff((0, _moment2.default)(), 'days');
};

exports.default = Unit;