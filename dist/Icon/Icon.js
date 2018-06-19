'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  ', ';\n  ', ';\n'], ['\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  ', ';\n  ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n      background-color: ', ';\n    '], ['\n      background-color: ', ';\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n      border-radius: 50%;\n    '], ['\n      border-radius: 50%;\n    ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: ', ';\n  height: ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _Matcher = require('../Utils/Matcher');

var _Matcher2 = _interopRequireDefault(_Matcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconSizeHandler = _Matcher2.default.create('size', [['default', '2.4rem'], ['medium', '2.0rem'], ['small', '1.8rem'], ['xsmall', '1.2rem']]);

var IconWrapper = _styledComponents2.default.span(_templateObject, function (props) {
  return props.backgroundColor && (0, _styledComponents.css)(_templateObject2, _Matcher2.default.create('backgroundColor', [['regular', '#000000'], ['cyan', '#00a1b0'], ['gray', '#999999'], ['red', '#f44336'], ['green', '#4CAF50'], ['blue', '#2196F3'], ['orange', '#FF9800'], ['white', '#FFFFFF'], ['purple', '#673AB7']]));
}, function (props) {
  return props.rounded && (0, _styledComponents.css)(_templateObject3);
});

var IconContentWrapper = _styledComponents2.default.div(_templateObject4, iconSizeHandler, iconSizeHandler);

var Icon = function Icon(_ref) {
  var children = _ref.children,
      padding = _ref.padding,
      iconProps = (0, _objectWithoutProperties3.default)(_ref, ['children', 'padding']);
  return _react2.default.createElement(
    IconWrapper,
    iconProps,
    _react2.default.createElement(
      _View2.default,
      { padding: padding },
      _react2.default.createElement(
        IconContentWrapper,
        iconProps,
        _react2.default.cloneElement(children, {
          style: {
            display: 'block',
            width: iconSizeHandler(iconProps),
            height: iconSizeHandler(iconProps)
          }
        })
      )
    )
  );
};

Icon.defaultProps = {
  size: 'default'
};

exports.default = Icon;