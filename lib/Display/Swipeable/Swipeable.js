"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Swipeable = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SwipeableStyle = require("./SwipeableStyle");

var _SwipeableItem = _interopRequireDefault(require("./SwipeableItem"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** You can add any number of  <Swipeable.Item />  components as children of the Swipeable component, controlling the behavior of an individual swipeable item.  */
var Swipeable = function Swipeable(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React.createElement(_SwipeableStyle.SwipeableContainer, {
    className: (0, _classnames["default"])('aries-swipeable', className)
  }, children);
};

exports.Swipeable = Swipeable;
Swipeable.Item = _SwipeableItem["default"];
var _default = Swipeable;
exports["default"] = _default;