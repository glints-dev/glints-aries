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
var CloudUploadIcon = function CloudUploadIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M74.512 24.848c3.515.39 6.82 1.367 9.912 2.93 3.092 1.562 5.794 3.564 8.105 6.005a27.915 27.915 0 0 1 5.469 8.399C99.333 45.339 100 48.708 100 52.289c0 3.385-.52 6.77-1.563 10.156-1.041 3.386-2.555 6.43-4.54 9.131-1.986 2.702-4.46 4.932-7.422 6.69-2.963 1.757-6.397 2.701-10.303 2.832h-7.129c-.846 0-1.579-.31-2.197-.928-.619-.619-.928-1.351-.928-2.197 0-.847.31-1.58.928-2.198.618-.618 1.35-.927 2.197-.927h7.129c2.67 0 5.094-.684 7.275-2.051s4.053-3.125 5.615-5.274c1.563-2.148 2.767-4.557 3.614-7.226.846-2.67 1.27-5.339 1.27-8.008 0-2.93-.587-5.68-1.758-8.252a21.537 21.537 0 0 0-4.786-6.738 23.823 23.823 0 0 0-6.933-4.59C77.865 31.569 75.098 31 72.168 31l-2.246-.098-.684-2.148c-1.627-5.208-4.248-9.261-7.861-12.158-3.613-2.897-8.512-4.346-14.697-4.346-3.907 0-7.422.667-10.547 2.002-3.125 1.335-5.81 3.19-8.057 5.566-2.246 2.377-3.971 5.209-5.176 8.496-1.204 3.288-1.806 6.82-1.806 10.596h.097l.196 2.93-2.832.488c-3.45.586-6.38 2.442-8.79 5.567-2.408 3.125-3.613 6.64-3.613 10.546 0 4.428 1.481 8.269 4.444 11.524 2.962 3.255 6.461 4.883 10.498 4.883h8.984c.912 0 1.66.309 2.246.927.586.619.88 1.351.88 2.198 0 .846-.294 1.578-.88 2.197-.586.618-1.334.928-2.246.928h-8.984c-2.865 0-5.567-.603-8.106-1.807a21.63 21.63 0 0 1-6.69-4.932c-1.92-2.083-3.45-4.492-4.589-7.226C.569 64.398 0 61.5 0 58.44c0-5.013 1.4-9.537 4.2-13.574 2.799-4.036 6.38-6.738 10.741-8.105.26-4.362 1.221-8.415 2.881-12.158 1.66-3.744 3.874-7 6.64-9.766 2.768-2.767 6.023-4.932 9.767-6.494C37.972 6.78 42.122 6 46.679 6c3.516 0 6.739.44 9.669 1.318 2.93.88 5.566 2.133 7.91 3.76a25.048 25.048 0 0 1 6.055 5.957c1.692 2.344 3.092 4.948 4.199 7.813zM52.344 49.75l11.523 12.695c.456.456.684.993.684 1.612 0 .618-.228 1.188-.684 1.709l-.781.488c-.39.456-.895.635-1.514.537a2.861 2.861 0 0 1-1.611-.83l-6.836-7.617v31.445c0 .912-.31 1.66-.928 2.246a3.087 3.087 0 0 1-2.197.88c-.911 0-1.66-.294-2.246-.88-.586-.586-.879-1.334-.879-2.246V58.344l-6.64 7.422a2.861 2.861 0 0 1-1.612.83c-.618.097-1.156-.082-1.611-.537l-.782-.489c-.455-.52-.683-1.09-.683-1.709 0-.618.228-1.155.683-1.611l11.329-12.5v-.098l.78-.78c.196-.261.44-.44.733-.538.293-.098.57-.146.83-.146.326 0 .619.048.88.146.26.098.52.277.78.537l.782.781v.098z"
  }));
};

var _default = CloudUploadIcon;
exports["default"] = _default;