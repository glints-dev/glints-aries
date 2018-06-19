'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryBtn = exports.JobCardContainer = exports.JobCardBtn = exports.CTABtn = exports.CTAContainer = exports.Button = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  border: none;\n  text-transform: uppercase;\n  padding: .6em 2.5em;\n  outline: none;\n  cursor: pointer;\n'], ['\n  position: relative;\n  border: none;\n  text-transform: uppercase;\n  padding: .6em 2.5em;\n  outline: none;\n  cursor: pointer;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    transform: translate3d(-.15em, -.15em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n\n  &:active:after {\n    transform: translate3d(-.265em, -.265em, 0);\n    transition: all .2s;\n  }\n'], ['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    transform: translate3d(-.15em, -.15em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n\n  &:active:after {\n    transform: translate3d(-.265em, -.265em, 0);\n    transition: all .2s;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n  font-size: 14px;\n\n  &:hover {\n    transform: translate3d(.15em, .15em, 0);\n    transition: all .2s;\n  }\n\n  &:active {\n    transform: translate3d(.265em, .265em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n  font-size: 14px;\n\n  &:hover {\n    transform: translate3d(.15em, .15em, 0);\n    transition: all .2s;\n  }\n\n  &:active {\n    transform: translate3d(.265em, .265em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n  font-size: 14px;\n'], ['\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n  font-size: 14px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    opacity: 0;\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n    cursor: pointer;\n  }\n\n    &:hover {\n      ', ' {\n        background-color: ', ';\n        transition: all .2s;\n      }\n    }\n\n    &:hover:after {\n      opacity: 1;\n      transition: all .2s;\n    }\n\n    &:active {\n      ', ' {\n        background-color: ', ';\n        color: ', ';\n        transition: all .2s;\n        transform: translate3d(.265em, .265em, 0);\n      }\n    }\n\n    &:active:after {\n      background-color: ', ';\n      transform: translate3d(-.265em, -.265em, 0);\n      transition: all .2s;\n    }\n'], ['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    opacity: 0;\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n    cursor: pointer;\n  }\n\n    &:hover {\n      ', ' {\n        background-color: ', ';\n        transition: all .2s;\n      }\n    }\n\n    &:hover:after {\n      opacity: 1;\n      transition: all .2s;\n    }\n\n    &:active {\n      ', ' {\n        background-color: ', ';\n        color: ', ';\n        transition: all .2s;\n        transform: translate3d(.265em, .265em, 0);\n      }\n    }\n\n    &:active:after {\n      background-color: ', ';\n      transform: translate3d(-.265em, -.265em, 0);\n      transition: all .2s;\n    }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n    border: 2px solid ', ';\n    color: ', ';\n    transition: background-color .5s;\n\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n      transition: background-color .5s;\n    }\n\n    &:active {\n      background-color: ', ';\n      color: ', ';\n      border: 2px solid ', ';\n      transition: background-color .5s; \n    }\n'], ['\n    border: 2px solid ', ';\n    color: ', ';\n    transition: background-color .5s;\n\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n      transition: background-color .5s;\n    }\n\n    &:active {\n      background-color: ', ';\n      color: ', ';\n      border: 2px solid ', ';\n      transition: background-color .5s; \n    }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('./Colors');

require('./GlobalStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = _styledComponents2.default.button(_templateObject);

/*
 * CTA Button
 */

var CTAContainer = exports.CTAContainer = _styledComponents2.default.div(_templateObject2, _Colors.PrimaryColor.glintsyellow, _Colors.SecondaryColor.black);

var CTABtn = exports.CTABtn = Button.extend(_templateObject3, _Colors.PrimaryColor.glintsred, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black);

/*
 * Job Card Button
 */

var JobCardBtn = exports.JobCardBtn = Button.extend(_templateObject4, _Colors.SecondaryColor.whitesmoke, _Colors.SecondaryColor.black);

var JobCardContainer = exports.JobCardContainer = _styledComponents2.default.div(_templateObject5, _Colors.PrimaryColor.glintsred, JobCardBtn, _Colors.PrimaryColor.glintsyellow, JobCardBtn, _Colors.SecondaryColor.black, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black);

/*
 * Secondary Button
 */

var SecondaryBtn = exports.SecondaryBtn = Button.extend(_templateObject6, _Colors.PrimaryColor.glintsred, _Colors.PrimaryColor.glintsred, _Colors.PrimaryColor.glintsred, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black);