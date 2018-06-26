'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeadingSmall = exports.HeadingMedium = exports.HeadingLarge = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    display: inline-flex;\n    position: relative;\n    text-transform: uppercase;\n\n    &:after {\n        content: \'\';\n        position: absolute;\n        background: ', ';\n        width: 100%;\n        height: .6em;\n        z-index: -1;\n        left: 0;\n        bottom: 0;\n    }\n'], ['\n    display: inline-flex;\n    position: relative;\n    text-transform: uppercase;\n\n    &:after {\n        content: \'\';\n        position: absolute;\n        background: ', ';\n        width: 100%;\n        height: .6em;\n        z-index: -1;\n        left: 0;\n        bottom: 0;\n    }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    ', ';\n'], ['\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('../Style/Colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var highlight = (0, _styledComponents.css)(_templateObject, _Colors.PrimaryColor.glintsyellow);

var HeadingLarge = exports.HeadingLarge = _styledComponents2.default.h1(_templateObject2, highlight);

var HeadingMedium = exports.HeadingMedium = _styledComponents2.default.h3(_templateObject2, highlight);

var HeadingSmall = exports.HeadingSmall = _styledComponents2.default.h6(_templateObject2, highlight);