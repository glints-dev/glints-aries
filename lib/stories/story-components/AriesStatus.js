"use strict";

exports.__esModule = true;
exports.AriesStatus = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var QUERY = 'SELECT * WHERE K<>"Removing" ORDER BY I DESC';

var AriesStatus = function AriesStatus() {
  var _useState = (0, _react.useState)(''),
      data = _useState[0],
      setData = _useState[1];

  (0, _react.useEffect)(function fetchStatusFromGoogleSheets() {
    fetch("https://docs.google.com/spreadsheets/u/0/d/1O9WY_x9MmzRIbskPE-2_TsKgOz3N7C61iEqcx6zWln8/gviz/tq?tqx=out:html&tq=" + encodeURIComponent(QUERY)).then(function (res) {
      return res.text();
    }).then(function (result) {
      setData(result);
    }, function (error) {
      console.error(error);
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data
    }
  });
};

exports.AriesStatus = AriesStatus;