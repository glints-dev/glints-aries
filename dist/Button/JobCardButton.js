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

var CTAButton = function CTAButton(props) {
  var children = props.children;


  return _react2.default.createElement(
    _ButtonStyle.JobCardContainer,
    null,
    _react2.default.createElement(
      _ButtonStyle.JobCardBtn,
      null,
      children
    )
  );
};

var JobCardButton = function JobCardButton(_ref) {
  var children = _ref.children,
      label = _ref.label,
      icon = _ref.icon,
      defaultButtonProps = (0, _objectWithoutProperties3.default)(_ref, ['children', 'label', 'icon']);


  return _react2.default.createElement(
    _ButtonStyle.JobCardContainer,
    defaultButtonProps,
    _react2.default.createElement(
      _ButtonStyle.JobCardBtn,
      null,
      label,
      icon ? _react2.default.createElement(Icon, { image: icon, position: 'right' }) : null,
      children
    )
  );
};

exports.default = JobCardButton;