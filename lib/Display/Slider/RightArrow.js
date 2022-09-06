"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _components = require("../../General/Icon/components");

var _SliderStyle = require("./SliderStyle");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RightArrow = function RightArrow(props) {
  var index = props.index,
      limit = props.limit,
      nextSlide = props.nextSlide,
      arrowWhite = props.arrowWhite,
      renderRightIcon = props.renderRightIcon;
  var disabled = index === limit;
  var color = (0, _utils.getArrowColor)(arrowWhite, disabled);
  return /*#__PURE__*/React.createElement(_SliderStyle.RightArrowContainer, {
    disabled: disabled,
    onClick: nextSlide,
    "data-testid": "slider_right-arrow"
  }, renderRightIcon ? renderRightIcon(disabled) : /*#__PURE__*/React.createElement(_components.ArrowNextIcon, {
    color: color
  }));
};

var _default = RightArrow;
exports["default"] = _default;