'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  padding: 0 1.4em;\n'], ['\n  display: block;\n  padding: 0 1.4em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border: 0;\n  height: 0;\n  border-bottom: 1px solid #C6C6C6;'], ['\n  border: 0;\n  height: 0;\n  border-bottom: 1px solid #C6C6C6;\\\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider() {
  return _react2.default.createElement(
    DividerWrapper,
    null,
    _react2.default.createElement(StyledDivider, null)
  );
};

var DividerWrapper = _styledComponents2.default.span(_templateObject);

var StyledDivider = _styledComponents2.default.hr(_templateObject2);

exports.default = Divider;