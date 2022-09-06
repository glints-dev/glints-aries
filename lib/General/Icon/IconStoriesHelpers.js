"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IconSampler = exports.IconGallery = void 0;

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TextField = _interopRequireDefault(require("../../Input/TextField"));

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _Colors = require("../../Utils/Colors");

var AllIcons = _interopRequireWildcard(require("./components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var IconsList = _styledComponents["default"].div.withConfig({
  displayName: "IconStoriesHelpers__IconsList",
  componentId: "sc-1f4h4ya-0"
})(["display:flex;flex-wrap:wrap;font-size:20px;align-items:flex-start;"]);

var IconsSample = _styledComponents["default"].div.withConfig({
  displayName: "IconStoriesHelpers__IconsSample",
  componentId: "sc-1f4h4ya-1"
})(["flex-basis:220px;margin-right:1em;margin-top:1em;display:flex;flex-direction:", ";", ""], function (_ref) {
  var direction = _ref.direction;
  return direction;
}, function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'column' && 'align-items: center';
});

var IconName = _styledComponents["default"].code.withConfig({
  displayName: "IconStoriesHelpers__IconName",
  componentId: "sc-1f4h4ya-2"
})(["", " font-size:12px;color:", ";"], function (_ref3) {
  var direction = _ref3.direction;
  return direction === 'row' ? 'margin-left: 8px;' : 'margin-top: 8px;';
}, _Colors.Greyscale.grey);

var IconSampler = function IconSampler() {
  var icons = (0, _lodash.sampleSize)(AllIcons, 4);
  return /*#__PURE__*/_react["default"].createElement(IconsList, null, Object.values(icons).filter(function (Icon) {
    return typeof Icon === 'function';
  }).map(function (Icon) {
    return /*#__PURE__*/_react["default"].createElement(IconsSample, {
      key: Icon.name,
      direction: "column"
    }, /*#__PURE__*/_react["default"].createElement(Icon, {
      width: "32px",
      height: "32px"
    }), /*#__PURE__*/_react["default"].createElement(IconName, {
      direction: "column"
    }, Icon.name));
  }));
};

exports.IconSampler = IconSampler;

var IconGallery = function IconGallery() {
  var _useState = (0, _react.useState)(''),
      query = _useState[0],
      setQuery = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    value: query,
    label: "Filter Icons",
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    small: true,
    tabindex: 1
  }), /*#__PURE__*/_react["default"].createElement(IconsList, null, Object.values(AllIcons).filter(function (Icon) {
    return typeof Icon === 'function';
  }).filter(function (Icon) {
    return query === '' || Icon.name.toLowerCase().includes(query.toLowerCase());
  }).sort().map(function (Icon) {
    return /*#__PURE__*/_react["default"].createElement(IconsSample, {
      key: Icon.name,
      direction: "row"
    }, /*#__PURE__*/_react["default"].createElement(Icon, {
      width: "16px",
      height: "16px"
    }), /*#__PURE__*/_react["default"].createElement(IconName, {
      direction: "row"
    }, Icon.name));
  })));
};

exports.IconGallery = IconGallery;