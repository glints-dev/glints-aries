'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background: url(', ');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 12px;\n  width: 12px;\n\n  ', '\n'], ['\n  background: url(', ');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 12px;\n  width: 12px;\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = exports.Icon = _styledComponents2.default.i(_templateObject, function (props) {
  return props.image;
}, function (props) {
  if (props.position === 'left') {
    return 'margin-right: .8em;';
  } else {
    return 'margin-left: .8em;';
  }
});