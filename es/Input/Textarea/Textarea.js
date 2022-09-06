import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["label", "value", "status", "disabled", "className", "onBlur", "onChange", "forwardedRef", "removeFloatingLabel", "small"];
import React from 'react';
import classNames from 'classnames';
import isFunction from 'lodash/isFunction';
import { TextareaContainer, TextareaInput, TextareaLabel } from './TextareaStyle';
var MIN_ROWS = 4;
var MAX_ROWS = 12; // Rows are required to set the textarea height depending on the content added.

/** Use onChange to listen to input changes. Use
 * onBlur to listen to focus loss.
 * <br/>
 * Note that currently, Textarea has some non-standard behaviour
 * when forwarding standard props: The className will be passed to
 * the internal 'container' while the ...rest is passed to the
 * internal textarea. */

export var Textarea = function Textarea(_ref) {
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
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _React$useState = React.useState(false),
      floating = _React$useState[0],
      setFloating = _React$useState[1];

  var _React$useState2 = React.useState(MIN_ROWS),
      rows = _React$useState2[0],
      setRows = _React$useState2[1];

  var innerRef = React.useRef(null);
  var textareaInputRef = forwardedRef || innerRef;

  var _React$useState3 = React.useState(0),
      textareaMaxHeight = _React$useState3[0],
      setTextareaMaxHeight = _React$useState3[1];

  React.useLayoutEffect(function () {
    var textarea = textareaInputRef.current;
    if (!textarea) return;
    setTextareaMaxHeight(~~(textarea.offsetHeight * 3.7 + 23 * 8 + 1));
  }, [textareaInputRef]);
  var handleChange = React.useCallback(function (e) {
    var currentRows = ~~(e.target.scrollHeight / 30);
    setRows(currentRows < MAX_ROWS ? currentRows : MAX_ROWS);

    if (isFunction(onChange)) {
      return onChange(e);
    }
  }, [onChange]);
  var handleFocusChange = React.useCallback(function (e) {
    setFloating(e.target.value.length > 0);

    if (onBlur !== undefined) {
      return onBlur(e);
    }
  }, [onBlur]);
  React.useEffect(function () {
    if (value && value !== '' && !floating) {
      setFloating(true);
    }
  }, [value, floating]);
  return /*#__PURE__*/React.createElement(TextareaContainer, {
    className: classNames('aries-textarea', className)
  }, /*#__PURE__*/React.createElement(TextareaInput, _extends({
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
  })), !removeFloatingLabel && /*#__PURE__*/React.createElement(TextareaLabel, {
    "data-testid": "textarea-label",
    floating: floating,
    status: status,
    small: small
  }, label));
};

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(Textarea, _extends({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = Textarea.name;
export default /*#__PURE__*/React.forwardRef(forwardRef);