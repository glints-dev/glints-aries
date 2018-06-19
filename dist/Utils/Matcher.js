"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Matcher = function Matcher() {
  (0, _classCallCheck3.default)(this, Matcher);
};

Matcher.create = function (propName, pairs) {
  var map = new Map(pairs);
  return function (props) {
    var key = props[propName];
    return map.get(key);
  };
};

exports.default = Matcher;