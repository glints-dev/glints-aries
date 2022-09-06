"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// GENERATE BY ./src/General/Icon/generateIcons.js
// DO NOT EDIT IT MANUALLY
var UserWrenchIcon = function UserWrenchIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(4, 4)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4.25C9.075 4.25 6.75 6.575 6.75 9.5C6.74487 10.3602 6.95239 11.2082 7.35408 11.9688C7.75578 12.7295 8.33921 13.379 9.0525 13.8597C6.3825 15.0095 4.5 17.669 4.5 20.75H6C6 17.45 8.7 14.75 12 14.75C14.925 14.75 17.25 12.425 17.25 9.5C17.25 6.575 14.925 4.25 12 4.25ZM12 5.75C14.1 5.75 15.75 7.4 15.75 9.5C15.75 11.6 14.1 13.25 12 13.25C9.9 13.25 8.25 11.6 8.25 9.5C8.25 7.4 9.9 5.75 12 5.75Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.7518 13C18.4201 12.9999 18.0925 13.0824 17.7925 13.2414C17.4925 13.4005 17.2275 13.6322 17.0166 13.92C16.8056 14.2078 16.6539 14.5445 16.5723 14.906C16.4907 15.2675 16.4813 15.6448 16.5447 16.0109L13.3349 19.7509C13.1167 20.0023 12.9963 20.3407 13.0001 20.6919C13.0039 21.0431 13.1316 21.3782 13.3551 21.6235C13.5786 21.8688 13.8797 22.0042 14.192 21.9999C14.5043 21.9956 14.8023 21.852 15.0204 21.6007L18.1998 17.9786C18.5733 18.0851 18.9649 18.0817 19.337 17.969C19.7091 17.8562 20.0491 17.6378 20.3245 17.3347C20.5999 17.0316 20.8013 16.654 20.9095 16.2381C21.0178 15.8223 21.0291 15.3821 20.9424 14.9599C20.9324 14.9111 20.9109 14.8663 20.8802 14.83C20.8495 14.7937 20.8108 14.7673 20.768 14.7535C20.7252 14.7397 20.6799 14.739 20.6368 14.7515C20.5937 14.764 20.5543 14.7892 20.5228 14.8245L19.2514 16.2541L18.1058 14.9661L19.3773 13.5365C19.4087 13.501 19.4311 13.4567 19.4422 13.4083C19.4533 13.3598 19.4527 13.3088 19.4404 13.2607C19.4282 13.2126 19.4047 13.169 19.3724 13.1346C19.3401 13.1001 19.3002 13.0759 19.2569 13.0646C19.0912 13.0217 18.9218 13.0001 18.7518 13Z",
    fill: "black"
  })));
};

var _default = UserWrenchIcon;
exports["default"] = _default;