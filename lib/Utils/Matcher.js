"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var Matcher = function Matcher() {};

exports["default"] = Matcher;

Matcher.create = function (propName, pairs) {
  var map = new Map(pairs);
  return function (props) {
    var key = props[propName];
    return map.get(key);
  };
};