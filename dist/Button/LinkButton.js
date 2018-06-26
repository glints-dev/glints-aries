'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonStyle = require('./../Style/ButtonStyle');

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkButton = function LinkButton(props) {
  var defaultButtonProps = (0, _objectWithoutProperties3.default)(props, []);

  return _react2.default.createElement(
    _ButtonStyle.LinkBtn,
    null,
    _react2.default.createElement(
      _Label2.default,
      { theme: props.theme },
      props.children
    )
  );
};

exports.default = LinkButton;