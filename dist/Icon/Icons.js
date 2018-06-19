'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Provider = require('../Provider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icons = function Icons(_ref) {
  var name = _ref.name,
      iconProps = (0, _objectWithoutProperties3.default)(_ref, ['name']);
  return _react2.default.createElement(
    _Provider.UikitConsumer,
    null,
    function (uikit) {
      return _react2.default.createElement(
        _Icon2.default,
        iconProps,
        _react2.default.createElement('img', { src: uikit.getUrl('assets/icons/' + name + '.svg') })
      );
    }
  );
};

Icons.contextTypes = {
  uikitAssets: _propTypes2.default.object
};

exports.default = Icons;