'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LabelStyle = require('./../Style/LabelStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(props) {
  var children = props.children,
      size = props.size,
      variant = props.variant,
      defaultLabelProps = (0, _objectWithoutProperties3.default)(props, ['children', 'size', 'variant']);


  return _react2.default.createElement(
    _LabelStyle.LabelWrapper,
    (0, _extends3.default)({
      variant: variant,
      size: size
    }, defaultLabelProps),
    children
  );
};

// flow type checking goes here
exports.default = Label;