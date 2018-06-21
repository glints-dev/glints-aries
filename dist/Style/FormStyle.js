'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.TextFieldInput = exports.TextFieldLabel = exports.TextFieldContainer = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: ', ';\n'], ['\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  left: 1em;\n  background: ', ';\n  color: ', ';\n  transition: all .2s;\n  pointer-events: none;\n  font-weight: 300;\n\n  ', '\n'], ['\n  position: absolute;\n  left: 1em;\n  background: ', ';\n  color: ', ';\n  transition: all .2s;\n  pointer-events: none;\n  font-weight: 300;\n\n  ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  padding: 1em 2em 1em 1em;\n  border: 2px solid ', ';\n  font-weight: 600;\n  transition: all .5s;\n\n  ', '\n    \n\n  &:disabled {\n    cursor: default;\n    background: ', ';\n\n    + ', ' {\n      background: transparent;\n      color: ', ';\n    }\n\n    &:hover {\n      border: 2px solid ', ';\n    }\n  }\n\n  &:hover {\n    border: 2px solid ', ';\n    transition: all .5s;\n\n    ', '\n\n    + label {\n      color: ', ';\n    }\n  }\n\n  &:focus {\n    border: 2px solid ', ';\n\n    ', '\n\n    + ', ' {\n      transform: translate3d(-.5em, -2em, 0);\n      transition: all .2s;\n      color: ', ';\n      font-size: 12px;\n    }\n  }\n'], ['\n  position: relative;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  padding: 1em 2em 1em 1em;\n  border: 2px solid ', ';\n  font-weight: 600;\n  transition: all .5s;\n\n  ', '\n    \n\n  &:disabled {\n    cursor: default;\n    background: ', ';\n\n    + ', ' {\n      background: transparent;\n      color: ', ';\n    }\n\n    &:hover {\n      border: 2px solid ', ';\n    }\n  }\n\n  &:hover {\n    border: 2px solid ', ';\n    transition: all .5s;\n\n    ', '\n\n    + label {\n      color: ', ';\n    }\n  }\n\n  &:focus {\n    border: 2px solid ', ';\n\n    ', '\n\n    + ', ' {\n      transform: translate3d(-.5em, -2em, 0);\n      transition: all .2s;\n      color: ', ';\n      font-size: 12px;\n    }\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  right: .6em;\n  height: ', ';\n  width: ', ';\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n\n  ', '\n'], ['\n  position: absolute;\n  right: .6em;\n  height: ', ';\n  width: ', ';\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n\n  ', '\n']);

// Assets


var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('./Colors');

require('./GlobalStyle');

var _checkmarkGreen = require('./../../assets/image/checkmark-green.png');

var _checkmarkGreen2 = _interopRequireDefault(_checkmarkGreen);

var _exclamation = require('./../../assets/image/exclamation.png');

var _exclamation2 = _interopRequireDefault(_exclamation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Text Field
 */

var TextFieldContainer = exports.TextFieldContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size;
});

var TextFieldLabel = exports.TextFieldLabel = _styledComponents2.default.label(_templateObject2, _Colors.SecondaryColor.white, function (props) {
  return props.floating ? '' + _Colors.SecondaryColor.black : '' + _Colors.SecondaryColor.grey;
}, function (props) {
  if (props.floating) {
    return '\n        transform: translate3d(-.5em, -2em, 0);\n        transition: all .2s;\n        font-size: 12px;\n      ';
  }
});

var TextFieldInput = exports.TextFieldInput = _styledComponents2.default.input(_templateObject3, _Colors.SecondaryColor.lightgrey, function (props) {
  if (props.status === 'error') {
    if (props.floating) {
      return '\n          border: 2px solid ' + _Colors.PrimaryColor.glintsred + ';\n        ';
    }
  }
}, _Colors.SecondaryColor.whitesmoke, TextFieldLabel, _Colors.SecondaryColor.grey, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.black, function (props) {
  if (props.status === 'error') {
    return '\n          border: 2px solid ' + _Colors.PrimaryColor.glintsred + ';\n        ';
  }
}, _Colors.SecondaryColor.black, _Colors.SecondaryColor.black, function (props) {
  if (props.status === 'error') {
    return '\n          border: 2px solid ' + _Colors.PrimaryColor.glintsred + ';\n        ';
  }
}, TextFieldLabel, _Colors.SecondaryColor.black);

var Icon = exports.Icon = _styledComponents2.default.i(_templateObject4, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  if (props.status === 'success') {
    return '\n        background-image: url(' + _checkmarkGreen2.default + ');\n      ';
  } else if (props.status === 'error') {
    return '\n        background-image: url(' + _exclamation2.default + ');\n      ';
  }
});