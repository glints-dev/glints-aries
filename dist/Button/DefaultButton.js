'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonStyle = require('./../Style/ButtonStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultButton = function DefaultButton(props) {
  var children = props.children,
      defaultButtonProps = (0, _objectWithoutProperties3.default)(props, ['children']);


  return _react2.default.createElement(
    _ButtonStyle.DefaultBtn,
    defaultButtonProps,
    children
  );
};

exports.default = DefaultButton;