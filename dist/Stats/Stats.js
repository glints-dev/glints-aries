'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('./../Label');

var _Label2 = _interopRequireDefault(_Label);

var _StatsStyle = require('../Style/StatsStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stats = function Stats(props) {
  var caption = props.caption,
      description = props.description,
      number = props.number,
      suffix = props.suffix;

  return _react2.default.createElement(
    _StatsStyle.StatsWrapper,
    null,
    _react2.default.createElement(
      _Label2.default,
      { block: true, theme: 'secondary', size: 'small' },
      caption
    ),
    _react2.default.createElement(
      _Label2.default,
      { block: true, theme: 'red', size: 'large' },
      _react2.default.createElement(
        'b',
        null,
        '' + number + (suffix ? ' ' + suffix : '')
      )
    ),
    _react2.default.createElement(
      _Label2.default,
      null,
      description
    )
  );
};

exports.default = Stats;