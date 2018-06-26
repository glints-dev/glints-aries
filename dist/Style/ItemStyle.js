'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemContent = exports.ItemImgWrapper = exports.ItemWrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  width: 100%;\n  min-height: 0;\n  background: 0 0;\n  padding: ', ';\n  border: none;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-transition: -webkit-box-shadow .1s ease;\n  transition: -webkit-box-shadow .1s ease;\n  transition: box-shadow .1s ease;\n  transition: box-shadow .1s ease,-webkit-box-shadow .1s ease;\n  z-index: \'\';\n'], ['\n  display: flex;\n  width: 100%;\n  min-height: 0;\n  background: 0 0;\n  padding: ', ';\n  border: none;\n  border-radius: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-transition: -webkit-box-shadow .1s ease;\n  transition: -webkit-box-shadow .1s ease;\n  transition: box-shadow .1s ease;\n  transition: box-shadow .1s ease,-webkit-box-shadow .1s ease;\n  z-index: \'\';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 0 0 auto;\n  display: block;\n  float: none;\n  margin: 0;\n  padding: .2em;\n  border: 1px solid #C6C6C6;\n'], ['\n  flex: 0 0 auto;\n  display: block;\n  float: none;\n  margin: 0;\n  padding: .2em;\n  border: 1px solid #C6C6C6;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  min-width: 0;\n  width: auto;\n  display: block;\n  margin-left: 0;\n  -ms-flex-item-align: top;\n  align-self: top;\n  padding-left: 1.2em;\n\n  h4 {\n    font-size: 1.1em;\n    line-height: 1.15em;\n    margin-bottom: .2em;\n  }\n\n  a {\n    color: ', ';\n    tet-decoration: none;\n\n    &:hover {\n      text-decoration: none;\n      opacity: .75;\n    }\n  }\n'], ['\n  min-width: 0;\n  width: auto;\n  display: block;\n  margin-left: 0;\n  -ms-flex-item-align: top;\n  align-self: top;\n  padding-left: 1.2em;\n\n  h4 {\n    font-size: 1.1em;\n    line-height: 1.15em;\n    margin-bottom: .2em;\n  }\n\n  a {\n    color: ', ';\n    tet-decoration: none;\n\n    &:hover {\n      text-decoration: none;\n      opacity: .75;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('./Colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemWrapper = exports.ItemWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.paddingSize;
});

var ItemImgWrapper = exports.ItemImgWrapper = _styledComponents2.default.span(_templateObject2);

var ItemContent = exports.ItemContent = _styledComponents2.default.div(_templateObject3, _Colors.PrimaryColor.glintsblue);