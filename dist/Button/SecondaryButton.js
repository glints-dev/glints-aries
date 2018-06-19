'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonStyle = require('./../Style/ButtonStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var SecondaryButton = function SecondaryButton(props) {
  return _react2.default.createElement(
    _ButtonStyle.SecondaryBtn,
    null,
    props.children
  );
};

exports.default = SecondaryButton;