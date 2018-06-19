'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = CTAButton;