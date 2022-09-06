"use strict";

exports.__esModule = true;
exports.RadioLabel = exports.RadioIcon = exports.RadioContainer = exports.Border = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../../Utils/Colors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getStateColor = function getStateColor(_ref, checked) {
  var disabled = _ref.disabled,
      error = _ref.error,
      border = _ref.border,
      theme = _ref.theme;

  if (disabled) {
    return _Colors.Greyscale.lightgrey;
  } else if (error) {
    return _Colors.PrimaryColor.glintsred;
  } else if (theme === 'white') {
    return _Colors.Greyscale.white;
  } else if (!checked) {
    return _Colors.Greyscale.grey;
  } else if (border) {
    return _Colors.SecondaryColor.actionblue;
  } else {
    return _Colors.SecondaryColor.darkgreen;
  }
};

var showSolidCircleStyle = (0, _styledComponents.css)(["&:after{opacity:1;transform:scale(1,1);}"]);

var RadioIcon = _styledComponents["default"].span.withConfig({
  displayName: "RadioButtonStyle__RadioIcon",
  componentId: "sc-1dmv219-0"
})(["display:inline-flex;align-items:center;justify-content:center;height:", ";width:", ";margin-right:10px;border-radius:50%;border-style:solid;border-width:2px;border-color:", ";&:after{content:'';display:inline-block;height:", ";width:", ";border-radius:50%;opacity:0;transform:scale(0,0);transition:all 0.2s cubic-bezier(0.64,0.57,0.67,1.53);background-color:", ";}"], function (_ref2) {
  var size = _ref2.size;
  return size === 'regular' ? '18px' : '15px';
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'regular' ? '18px' : '15px';
}, function (props) {
  return getStateColor(props, false);
}, function (_ref4) {
  var size = _ref4.size;
  return size === 'regular' ? '8px' : '7px';
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'regular' ? '8px' : '7px';
}, function (props) {
  return getStateColor(props, true);
});

exports.RadioIcon = RadioIcon;

var RadioLabel = _styledComponents["default"].span.withConfig({
  displayName: "RadioButtonStyle__RadioLabel",
  componentId: "sc-1dmv219-1"
})(["font-size:", ";outline:none;color:", ";"], function (_ref6) {
  var size = _ref6.size;
  return size === 'regular' ? '16px' : '14px';
}, function (_ref7) {
  var disabled = _ref7.disabled,
      theme = _ref7.theme;

  if (disabled) {
    return _Colors.Greyscale.lightgrey;
  } else if (theme === 'white') {
    return _Colors.Greyscale.white;
  } else {
    return _Colors.Greyscale.black;
  }
});

exports.RadioLabel = RadioLabel;

var Border = _styledComponents["default"].span.withConfig({
  displayName: "RadioButtonStyle__Border",
  componentId: "sc-1dmv219-2"
})(["display:flex;align-items:center;padding:15px 10px;border-style:solid;border-width:1px;border-radius:2px;border-color:", ";", ";"], function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled ? _Colors.Greyscale.lightgrey : '#aaa';
}, function (_ref9) {
  var disabled = _ref9.disabled,
      error = _ref9.error;

  if (disabled) {
    return null;
  } else if (error) {
    return (0, _styledComponents.css)(["background-color:rgba(236,39,43,0.1);border-color:", ";", "{border-color:", ";}"], _Colors.PrimaryColor.glintsred, RadioIcon, _Colors.Greyscale.grey);
  }

  return (0, _styledComponents.css)(["&:hover{background-color:rgba(1,126,183,0.1);border-color:", ";}"], _Colors.SecondaryColor.actionblue);
});

exports.Border = Border;

var RadioContainer = _styledComponents["default"].label.withConfig({
  displayName: "RadioButtonStyle__RadioContainer",
  componentId: "sc-1dmv219-3"
})(["position:relative;display:inline-flex;align-items:center;cursor:", ";user-select:none;text-align:left;input{display:none;&:checked + ", "{", " border-color:", ";}&:checked + ", "{background-color:transparent;border-color:", ";", "{", " border-color:", ";}}}&:focus{outline:none;}", ""], function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, RadioIcon, showSolidCircleStyle, function (props) {
  return getStateColor(props, true);
}, Border, function (props) {
  return getStateColor(props, true);
}, RadioIcon, showSolidCircleStyle, function (props) {
  return getStateColor(props, true);
}, function (_ref11) {
  var disabled = _ref11.disabled,
      error = _ref11.error,
      border = _ref11.border;

  if (!disabled && !error && !border) {
    return (0, _styledComponents.css)(["&:hover{", "{border-color:", ";}}"], RadioIcon, _Colors.SecondaryColor.darkgreen);
  }
});

exports.RadioContainer = RadioContainer;