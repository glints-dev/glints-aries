'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JobBannerStyle = require('../Style/JobBannerStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JobBanner = function JobBanner(props) {
  var children = props.children,
      imgUrl = props.imgUrl,
      variant = props.variant;

  return _react2.default.createElement(
    _JobBannerStyle.BannerWrapper,
    { imgUrl: imgUrl },
    _react2.default.createElement(
      _JobBannerStyle.BannerLabel,
      { variant: variant },
      children
    )
  );
};

// typecheck goes here
exports.default = JobBanner;