'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeadingStyle = require('./../Style/HeadingStyle');

var _StyleConfig = require('../Utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(props) {
  var children = props.children,
      size = props.size,
      defaultLabelProps = (0, _objectWithoutProperties3.default)(props, ['children', 'size']);


  return _react2.default.createElement(
    _react.Fragment,
    null,
    size === '' + _StyleConfig.Size.LARGE ? _react2.default.createElement(
      _HeadingStyle.HeadingLarge,
      null,
      children
    ) : size === '' + _StyleConfig.Size.MEDIUM ? _react2.default.createElement(
      _HeadingStyle.HeadingMedium,
      null,
      children
    ) : size === '' + _StyleConfig.Size.SMALL ? _react2.default.createElement(
      _HeadingStyle.HeadingSmall,
      null,
      children
    ) : null
  );
};
exports.default = Heading;