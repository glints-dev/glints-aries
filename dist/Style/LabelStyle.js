'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelWrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: ', ';\n  color: ', ';\n  font-size: ', ';\n'], ['\n  display: ', ';\n  color: ', ';\n  font-size: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('./Colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelWrapper = exports.LabelWrapper = _styledComponents2.default.label(_templateObject, function (props) {
  return LabelStyleHandler(props).display;
}, function (props) {
  return LabelStyleHandler(props).color;
}, function (props) {
  return LabelStyleHandler(props).fontSize;
});

var LabelStyleHandler = function LabelStyleHandler(props) {
  var styles = {};
  /* controller styles by props goes here */
  switch (props.theme) {
    case 'red':
      styles.color = _Colors.PrimaryColor.glintsred;
      break;
    case 'yellow':
      styles.color = _Colors.SecondaryColor.buttercup;
      break;
    case 'blue':
      styles.color = _Colors.PrimaryColor.glintsblue;
      break;
    case 'secondary':
      styles.color = _Colors.SecondaryColor.lightgrey;
      break;
    default:
      styles.color = _Colors.SecondaryColor.black;
      break;
  }

  switch (props.size) {
    case 'xlarge':
      styles.fontSize = '2.5em';
      break;
    case 'large':
      styles.fontSize = '2em';
      break;
    case 'medium':
      styles.fontSize = '1.35em';
      break;
    case 'small':
      styles.fontSize = '.75em';
      break;
    default:
      styles.fontSize = '1em';
  }

  switch (props.block) {
    case true:
      styles.display = 'block';
      break;
    default:
      styles.display = 'inline-block';
  }

  return styles;
};