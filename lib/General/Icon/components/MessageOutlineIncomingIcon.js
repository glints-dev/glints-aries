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
var MessageOutlineIncomingIcon = function MessageOutlineIncomingIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(4)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.87513 11C9.87513 11.2984 9.99366 11.5845 10.2046 11.7955C10.4156 12.0065 10.7018 12.125 11.0001 12.125C11.2985 12.125 11.5846 12.0065 11.7956 11.7955C12.0066 11.5845 12.1251 11.2984 12.1251 11C12.1251 10.7016 12.0066 10.4155 11.7956 10.2045C11.5846 9.99353 11.2985 9.875 11.0001 9.875C10.7018 9.875 10.4156 9.99353 10.2046 10.2045C9.99366 10.4155 9.87513 10.7016 9.87513 11V11ZM14.5626 11C14.5626 11.2984 14.6812 11.5845 14.8921 11.7955C15.1031 12.0065 15.3893 12.125 15.6876 12.125C15.986 12.125 16.2721 12.0065 16.4831 11.7955C16.6941 11.5845 16.8126 11.2984 16.8126 11C16.8126 10.7016 16.6941 10.4155 16.4831 10.2045C16.2721 9.99353 15.986 9.875 15.6876 9.875C15.3893 9.875 15.1031 9.99353 14.8921 10.2045C14.6812 10.4155 14.5626 10.7016 14.5626 11ZM5.18763 11C5.18763 11.2984 5.30616 11.5845 5.51714 11.7955C5.72812 12.0065 6.01426 12.125 6.31263 12.125C6.611 12.125 6.89715 12.0065 7.10813 11.7955C7.31911 11.5845 7.43763 11.2984 7.43763 11C7.43763 10.7016 7.31911 10.4155 7.10813 10.2045C6.89715 9.99353 6.611 9.875 6.31263 9.875C6.01426 9.875 5.72812 9.99353 5.51714 10.2045C5.30616 10.4155 5.18763 10.7016 5.18763 11V11ZM20.6845 6.93125C20.1548 5.67266 19.3954 4.54297 18.4275 3.57266C17.4663 2.60796 16.3252 1.84114 15.0689 1.31563C13.7798 0.774219 12.4111 0.5 11.0001 0.5H10.9533C9.53295 0.507031 8.15716 0.788281 6.86341 1.34141C5.61785 1.87232 4.48747 2.64049 3.53529 3.60312C2.5767 4.57109 1.82435 5.69609 1.30404 6.95C0.764977 8.24844 0.493102 9.62891 0.500133 11.0492C0.508086 12.6769 0.893161 14.2806 1.62513 15.7344V19.2969C1.62513 19.5828 1.73872 19.857 1.94091 20.0592C2.1431 20.2614 2.41732 20.375 2.70326 20.375H6.2681C7.72192 21.107 9.32559 21.492 10.9533 21.5H11.0025C12.4064 21.5 13.7681 21.2281 15.0501 20.6961C16.3001 20.1768 17.4369 19.419 18.397 18.4648C19.365 17.5062 20.1267 16.3859 20.6587 15.1367C21.2119 13.843 21.4931 12.4672 21.5001 11.0469C21.5072 9.61953 21.2306 8.23437 20.6845 6.93125V6.93125ZM17.1431 17.1969C15.5001 18.8234 13.3204 19.7188 11.0001 19.7188H10.9603C9.54701 19.7117 8.1431 19.3602 6.90326 18.6992L6.70638 18.5938H3.40638V15.2938L3.30091 15.0969C2.63998 13.857 2.28841 12.4531 2.28138 11.0398C2.27201 8.70313 3.16498 6.50937 4.80326 4.85703C6.4392 3.20469 8.62591 2.29063 10.9626 2.28125H11.0025C12.1744 2.28125 13.3111 2.50859 14.3822 2.95859C15.4275 3.39687 16.365 4.02734 17.1712 4.83359C17.9751 5.6375 18.6079 6.57734 19.0462 7.62266C19.5009 8.70547 19.7283 9.85391 19.7236 11.0398C19.7095 13.3742 18.7931 15.5609 17.1431 17.1969V17.1969Z"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "17.5",
    cy: "6.8402",
    rx: "4.5",
    ry: "4.8695",
    fill: "#F01818"
  })));
};

var _default = MessageOutlineIncomingIcon;
exports["default"] = _default;