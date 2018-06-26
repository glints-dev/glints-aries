'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerLabel = exports.BannerWrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 12em;\n  background-image: url(', '); \n'], ['\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 12em;\n  background-image: url(', '); \n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  bottom: 0;\n  left: 1.4em;\n  background-color: ', ';\n  color: #FFFFFF;\n  text-transform: uppercase;\n  font-weight: 600;\n  padding: .2em 1em;\n'], ['\n  position: absolute;\n  bottom: 0;\n  left: 1.4em;\n  background-color: ', ';\n  color: #FFFFFF;\n  text-transform: uppercase;\n  font-weight: 600;\n  padding: .2em 1em;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Colors = require('./Colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Wrapper
 */
var BannerWrapper = exports.BannerWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.imgUrl;
});

var BannerLabel = exports.BannerLabel = _styledComponents2.default.label(_templateObject2, function (props) {
  return BannerStyleHandler(props).backgroundColor;
});

var BannerStyleHandler = function BannerStyleHandler(props) {
  var styles = {};
  /* controller styles by props goes here */
  switch (props.variant) {
    case 'primary':
      styles.backgroundColor = _Colors.PrimaryColor.glintsblue;
      break;
    case 'secondary':
      styles.backgroundColor = _Colors.SecondaryColor.grey;
      break;
    case 'danger':
      styles.backgroundColor = _Colors.PrimaryColor.glintsred;
      break;
    case 'warning':
      styles.backgroundColor = _Colors.SecondaryColor.buttercup;
      break;
    default:
      styles.backgroundColor = _Colors.SecondaryColor.black;
      break;
  }

  return styles;
};