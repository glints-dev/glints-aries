"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Textarea = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _TextareaStyle = require("./TextareaStyle");

var _excluded = ["label", "value", "status", "disabled", "className", "onBlur", "onChange", "forwardedRef", "removeFloatingLabel", "small"];
var MIN_ROWS = 4;
var MAX_ROWS = 12; // Rows are required to set the textarea height depending on the content added.

/** Use onChange to listen to input changes. Use
 * onBlur to listen to focus loss.
 * <br/>
 * Note that currently, Textarea has some non-standard behaviour
 * when forwarding standard props: The className will be passed to
 * the internal 'container' while the ...rest is passed to the
 * internal textarea. */

var Textarea = function Textarea(_ref) {
  var label = _ref.label,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'default' : _ref$status,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      forwardedRef = _ref.forwardedRef,
      _ref$removeFloatingLa = _ref.removeFloatingLabel,
      removeFloatingLabel = _ref$removeFloatingLa === void 0 ? false : _ref$removeFloatingLa,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _React$useState = _react["default"].useState(false),
      floating = _React$useState[0],
      setFloating = _React$useState[1];

  var _React$useState2 = _react["default"].useState(MIN_ROWS),
      rows = _React$useState2[0],
      setRows = _React$useState2[1];

  var innerRef = _react["default"].useRef(null);

  var textareaInputRef = forwardedRef || innerRef;

  var _React$useState3 = _react["default"].useState(0),
      textareaMaxHeight = _React$useState3[0],
      setTextareaMaxHeight = _React$useState3[1];

  _react["default"].useLayoutEffect(function () {
    var textarea = textareaInputRef.current;
    if (!textarea) return;
    setTextareaMaxHeight(~~(textarea.offsetHeight * 3.7 + 23 * 8 + 1));
  }, [textareaInputRef]);

  var handleChange = _react["default"].useCallback(function (e) {
    var currentRows = ~~(e.target.scrollHeight / 30);
    setRows(currentRows < MAX_ROWS ? currentRows : MAX_ROWS);

    if ((0, _isFunction["default"])(onChange)) {
      return onChange(e);
    }
  }, [onChange]);

  var handleFocusChange = _react["default"].useCallback(function (e) {
    setFloating(e.target.value.length > 0);

    if (onBlur !== undefined) {
      return onBlur(e);
    }
  }, [onBlur]);

  _react["default"].useEffect(function () {
    if (value && value !== '' && !floating) {
      setFloating(true);
    }
  }, [value, floating]);

  return /*#__PURE__*/_react["default"].createElement(_TextareaStyle.TextareaContainer, {
    className: (0, _classnames["default"])('aries-textarea', className)
  }, /*#__PURE__*/_react["default"].createElement(_TextareaStyle.TextareaInput, (0, _extends2["default"])({
    ref: textareaInputRef,
    placeholder: removeFloatingLabel ? label : undefined,
    rows: rows,
    status: status,
    disabled: disabled,
    onBlur: handleFocusChange,
    onChange: handleChange,
    floating: floating,
    value: value,
    "aria-label": label,
    small: small
  }, restProps, {
    style: {
      maxHeight: textareaMaxHeight + "px"
    }
  })), !removeFloatingLabel && /*#__PURE__*/_react["default"].createElement(_TextareaStyle.TextareaLabel, {
    "data-testid": "textarea-label",
    floating: floating,
    status: status,
    small: small
  }, label));
};

exports.Textarea = Textarea;

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Textarea, (0, _extends2["default"])({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = Textarea.name;

var _default = /*#__PURE__*/_react["default"].forwardRef(forwardRef);

exports["default"] = _default;