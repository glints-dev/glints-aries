'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = exports.JobDescription = exports.JobDetail = exports.Company = exports.CompanyImageWrapper = exports.CompanyWrapper = exports.Body = exports.Header = exports.JobCardContainer = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  cursor: pointer;\n  background: ', ';\n  border: 1px solid ', ';\n  width: 380px;\n\n  &:after {\n    content: \'\';\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: repeating-linear-gradient(-45deg, transparent, transparent 5px, ', ' 7px);\n    top: .5em;\n    left: .5em;\n    z-index: -1;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    opacity: 1;\n    transition: all .2s;\n  }\n'], ['\n  position: relative;\n  cursor: pointer;\n  background: ', ';\n  border: 1px solid ', ';\n  width: 380px;\n\n  &:after {\n    content: \'\';\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: repeating-linear-gradient(-45deg, transparent, transparent 5px, ', ' 7px);\n    top: .5em;\n    left: .5em;\n    z-index: -1;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    opacity: 1;\n    transition: all .2s;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  background-image: url(', ');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 12em;\n\n  label {\n    position: absolute;\n    bottom: 0;\n    left: 1.4em;\n    background: ', ';\n    color: ', ';\n    text-transform: uppercase;\n    font-weight: 600;\n    padding: .2em 1em;\n  }\n'], ['\n  position: relative;\n  background-image: url(', ');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 12em;\n\n  label {\n    position: absolute;\n    bottom: 0;\n    left: 1.4em;\n    background: ', ';\n    color: ', ';\n    text-transform: uppercase;\n    font-weight: 600;\n    padding: .2em 1em;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  padding-top: 0;\n  padding-right: 1.4em;\n  padding-bottom: 1.4em;\n  padding-left: 1.4em;\n'], ['\n  position: relative;\n  padding-top: 0;\n  padding-right: 1.4em;\n  padding-bottom: 1.4em;\n  padding-left: 1.4em;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: grid;\n  grid-template-columns: 25% 75%;\n  padding-bottom: 1.5em;\n  border-bottom: 1px solid ', ';\n'], ['\n  display: grid;\n  grid-template-columns: 25% 75%;\n  padding-bottom: 1.5em;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 4em;\n  height: 4em;\n  border: 1px solid ', ';\n  padding: .2em;\n\n  img {\n    width: 100%;\n  }\n'], ['\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 4em;\n  height: 4em;\n  border: 1px solid ', ';\n  padding: .2em;\n\n  img {\n    width: 100%;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n\n  label {\n    display: flex;\n    font-weight: bold;\n  }\n\n  span {\n    color: ', ';\n  }\n'], ['\n  position: relative;\n\n  label {\n    display: flex;\n    font-weight: bold;\n  }\n\n  span {\n    color: ', ';\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: .4em;\n  padding-top: 1.5em;\n\n  label {\n    display: flex;\n    align-items: center;\n    img {\n      height: 14px;\n      width: 14px;\n      margin-right: .6em;\n    }\n  }\n'], ['\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: .4em;\n  padding-top: 1.5em;\n\n  label {\n    display: flex;\n    align-items: center;\n    img {\n      height: 14px;\n      width: 14px;\n      margin-right: .6em;\n    }\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 2em;\n  > p {\n    font-size: 14px;\n    line-height: 1.6;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  }\n'], ['\n  margin-top: 2em;\n  > p {\n    font-size: 14px;\n    line-height: 1.6;\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  }\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  display: grid;\n  grid-template-columns: auto auto auto;\n'], ['\n  display: grid;\n  grid-template-columns: auto auto auto;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('./Colors');

require('./GlobalStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Job Card
 */

var JobCardContainer = exports.JobCardContainer = _styledComponents2.default.div(_templateObject, _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.lightgrey);

var Header = exports.Header = _styledComponents2.default.header(_templateObject2, function (props) {
  return props.FeaturedImage;
}, _Colors.PrimaryColor.glintsblue, _Colors.SecondaryColor.white);

var Body = exports.Body = _styledComponents2.default.div(_templateObject3);

var CompanyWrapper = exports.CompanyWrapper = _styledComponents2.default.div(_templateObject4, _Colors.SecondaryColor.lightgrey);

var CompanyImageWrapper = exports.CompanyImageWrapper = _styledComponents2.default.div(_templateObject5, _Colors.SecondaryColor.lightgrey);

var Company = exports.Company = _styledComponents2.default.div(_templateObject6, _Colors.PrimaryColor.glintsblue);

var JobDetail = exports.JobDetail = _styledComponents2.default.div(_templateObject7);

var JobDescription = exports.JobDescription = _styledComponents2.default.div(_templateObject8);

var Footer = exports.Footer = _styledComponents2.default.footer(_templateObject9);