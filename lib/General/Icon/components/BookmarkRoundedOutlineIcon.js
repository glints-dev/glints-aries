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
var BookmarkRoundedOutlineIcon = function BookmarkRoundedOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M77.1407 93.5547C76.2096 93.548 75.2893 93.3545 74.4344 92.9854C73.5796 92.6163 72.8075 92.0793 72.1641 91.4063L49.9376 68.3594L27.8438 91.3047C26.8773 92.2885 25.6428 92.9664 24.294 93.2539C22.9452 93.5415 21.5416 93.426 20.2579 92.9219C18.9733 92.4091 17.8728 91.5216 17.0995 90.3749C16.3262 89.2282 15.9159 87.8753 15.9219 86.4922V18.0547C15.924 14.901 17.1772 11.877 19.4064 9.64627C21.6357 7.41555 24.6589 6.16039 27.8126 6.15625H72.1876C75.3412 6.16039 78.3644 7.41555 80.5937 9.64627C82.823 11.877 84.0761 14.901 84.0782 18.0547V86.6172C84.0761 88.4565 83.3445 90.2199 82.044 91.5205C80.7434 92.821 78.98 93.5526 77.1407 93.5547V93.5547ZM49.9376 62.6328C50.254 62.632 50.5674 62.6952 50.8588 62.8187C51.1501 62.9423 51.4135 63.1235 51.6329 63.3516L75.5391 88.1719C75.8484 88.4963 76.2481 88.7203 76.6863 88.8146C77.1246 88.9089 77.581 88.8692 77.9964 88.7007C78.4117 88.5322 78.7668 88.2426 79.0155 87.8697C79.2641 87.4967 79.3949 87.0576 79.3907 86.6094V18.0547C79.3886 16.1442 78.6293 14.3125 77.2791 12.9608C75.929 11.6092 74.098 10.8479 72.1876 10.8438H27.8126C25.9015 10.8458 24.0693 11.6065 22.7187 12.9585C21.3681 14.3106 20.6094 16.1436 20.6094 18.0547V86.4922C20.6053 86.9404 20.736 87.3795 20.9847 87.7525C21.2333 88.1254 21.5884 88.415 22.0038 88.5835C22.4191 88.752 22.8756 88.7917 23.3138 88.6974C23.752 88.6031 24.1517 88.3791 24.461 88.0547L48.2501 63.3516C48.4686 63.1245 48.7306 62.9438 49.0206 62.8203C49.3105 62.6968 49.6224 62.633 49.9376 62.6328V62.6328Z"
  }));
};

var _default = BookmarkRoundedOutlineIcon;
exports["default"] = _default;