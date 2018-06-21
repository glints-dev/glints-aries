'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryBtn = exports.JobCardContainer = exports.JobCardBtn = exports.CTABtn = exports.CTAContainer = exports.DefaultBtn = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  text-transform: uppercase;\n  outline: none;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 14px;\n  padding: .8em .6em;\n  min-width: 8.5em;\n'], ['\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  text-transform: uppercase;\n  outline: none;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 14px;\n  padding: .8em .6em;\n  min-width: 8.5em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1;\n  background: ', ';\n  transition: all .5s;\n\n  &:hover {\n    background: ', ';\n    transition: all .5s;\n  }\n\n  &:active {\n    background: ', ';\n    color: ', ';\n    transition: all .5s;\n  }\n'], ['\n  flex: 1;\n  background: ', ';\n  transition: all .5s;\n\n  &:hover {\n    background: ', ';\n    transition: all .5s;\n  }\n\n  &:active {\n    background: ', ';\n    color: ', ';\n    transition: all .5s;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    transform: translate3d(-.15em, -.15em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n\n  &:active:after {\n    transform: translate3d(-.265em, -.265em, 0);\n    transition: all .2s;\n  }\n'], ['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    transform: translate3d(-.15em, -.15em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n\n  &:active:after {\n    transform: translate3d(-.265em, -.265em, 0);\n    transition: all .2s;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1;\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n\n  &:hover {\n    transform: translate3d(.15em, .15em, 0);\n    transition: all .2s;\n  }\n\n  &:active {\n    transform: translate3d(.265em, .265em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n'], ['\n  flex: 1;\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n\n  &:hover {\n    transform: translate3d(.15em, .15em, 0);\n    transition: all .2s;\n  }\n\n  &:active {\n    transform: translate3d(.265em, .265em, 0);\n    transition: all .2s;\n    background-color: ', ';\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  25%, 75% {\n    transform: translate3d(0, 0, 0);\n  }\n\n  50%, 100% {\n    transform: translate3d(-.265em, -.265em, 0);\n  }\n'], ['\n  25%, 75% {\n    transform: translate3d(0, 0, 0);\n  }\n\n  50%, 100% {\n    transform: translate3d(-.265em, -.265em, 0);\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1;\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n  z-index: 2;\n'], ['\n  flex: 1;\n  background-color: ', ';\n  color: ', ';\n  transition: all .2s;\n  z-index: 2;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    opacity: 0;\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n    cursor: pointer;\n    transform: translate3d(-.265em, -.265em, 0);\n    z-index: 1;\n  }\n\n  &:hover {\n    ', ' {\n      background-color: ', ';\n      transform: translate3d(-.265em, -.265em, 0);\n      transition: transform .2s;\n    }\n  }\n\n  &:hover:after {\n    opacity: 1;\n    transition: opacity .8s linear;\n    animation: ', ' .5s linear;\n  }\n\n  &:active {\n    ', ' {\n      background-color: ', ';\n      color: ', ';\n      transition: all .2s;\n      transform: translate3d(0, 0, 0);\n    }\n  }\n\n  &:active:after {\n    background-color: ', ';\n    transform: translate3d(-.45em, -.5em, 0);\n    transition: all .2s;\n  }\n'], ['\n  position: relative;\n  display: inline-flex;\n\n  &:after {\n    content: \'\';\n    opacity: 0;\n    background-color: ', ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: .5em;\n    left: .5em;\n    transition: all .2s;\n    cursor: pointer;\n    transform: translate3d(-.265em, -.265em, 0);\n    z-index: 1;\n  }\n\n  &:hover {\n    ', ' {\n      background-color: ', ';\n      transform: translate3d(-.265em, -.265em, 0);\n      transition: transform .2s;\n    }\n  }\n\n  &:hover:after {\n    opacity: 1;\n    transition: opacity .8s linear;\n    animation: ', ' .5s linear;\n  }\n\n  &:active {\n    ', ' {\n      background-color: ', ';\n      color: ', ';\n      transition: all .2s;\n      transform: translate3d(0, 0, 0);\n    }\n  }\n\n  &:active:after {\n    background-color: ', ';\n    transform: translate3d(-.45em, -.5em, 0);\n    transition: all .2s;\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1;\n  border: 2px solid ', ';\n  color: ', ';\n  transition: background-color .5s;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n    transition: background-color .5s;\n  }\n\n  &:active {\n    background-color: ', ';\n    color: ', ';\n    border: 2px solid ', ';\n    transition: background-color .5s; \n  }\n'], ['\n  flex: 1;\n  border: 2px solid ', ';\n  color: ', ';\n  transition: background-color .5s;\n\n  &:hover {\n    background-color: ', ';\n    color: ', ';\n    transition: background-color .5s;\n  }\n\n  &:active {\n    background-color: ', ';\n    color: ', ';\n    border: 2px solid ', ';\n    transition: background-color .5s; \n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('./Colors');

require('./GlobalStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _styledComponents2.default.button(_templateObject);

/*
 * Default Button
 */

var DefaultBtn = exports.DefaultBtn = Button.extend(_templateObject2, _Colors.SecondaryColor.white, _Colors.SecondaryColor.whitesmoke, _Colors.SecondaryColor.black, _Colors.SecondaryColor.white);

/*
 * CTA Button
 */

var CTAContainer = exports.CTAContainer = _styledComponents2.default.div(_templateObject3, _Colors.PrimaryColor.glintsyellow, _Colors.SecondaryColor.black);

var CTABtn = exports.CTABtn = Button.extend(_templateObject4, _Colors.PrimaryColor.glintsred, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black);

/*
 * Job Card Button
 */

var Bouncing = (0, _styledComponents.keyframes)(_templateObject5);

var JobCardBtn = exports.JobCardBtn = Button.extend(_templateObject6, _Colors.SecondaryColor.whitesmoke, _Colors.SecondaryColor.black);

var JobCardContainer = exports.JobCardContainer = _styledComponents2.default.div(_templateObject7, _Colors.PrimaryColor.glintsred, JobCardBtn, _Colors.PrimaryColor.glintsyellow, Bouncing, JobCardBtn, _Colors.SecondaryColor.black, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black);

/*
 * Secondary Button
 */

var SecondaryBtn = exports.SecondaryBtn = Button.extend(_templateObject8, _Colors.PrimaryColor.glintsred, _Colors.PrimaryColor.glintsred, _Colors.PrimaryColor.glintsred, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black);