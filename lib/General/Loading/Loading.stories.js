"use strict";

exports.__esModule = true;
exports["default"] = exports.Interactive = void 0;

var React = _interopRequireWildcard(require("react"));

var _Loading = require("./Loading");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'General/Loading',
  component: _Loading.Loading,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_Loading.Loading, args);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {};