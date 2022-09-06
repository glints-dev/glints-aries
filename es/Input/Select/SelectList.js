import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["value", "children"];
import * as React from 'react';
import SelectItem from './SelectItem';
import Loading from '../../General/Loading';
import { SelectListWrapper } from './SelectStyle';

var SelectList = function SelectList(_ref) {
  var activeOptionIndex = _ref.activeOptionIndex,
      options = _ref.options,
      isFocus = _ref.isFocus,
      isLoading = _ref.isLoading,
      noOptionResult = _ref.noOptionResult,
      small = _ref.small,
      handleClickOnOption = _ref.handleClickOnOption,
      handleMouseEnterOption = _ref.handleMouseEnterOption;
  return /*#__PURE__*/React.createElement(SelectListWrapper, {
    className: "select-listbox",
    role: "listbox",
    "data-testid": "listbox",
    "aria-hidden": !isFocus && true,
    open: isFocus,
    small: small
  }, options.length !== 0 && !isLoading ? options.map(function (data, index) {
    var _data$props = data.props,
        value = _data$props.value,
        children = _data$props.children,
        restProps = _objectWithoutPropertiesLoose(_data$props, _excluded);

    delete restProps.onOptionClick;
    return /*#__PURE__*/React.createElement(SelectItem, _extends({}, restProps, {
      className: activeOptionIndex === index ? 'active' : null,
      key: value,
      role: "option",
      "data-testid": "option",
      "data-id": index,
      "data-value": value,
      onClick: handleClickOnOption,
      onMouseEnter: handleMouseEnterOption,
      tabIndex: 0
    }), children);
  }) : isLoading ? /*#__PURE__*/React.createElement(SelectItem, {
    className: "select-loading",
    role: "option"
  }, /*#__PURE__*/React.createElement(Loading, null)) : Boolean(noOptionResult) && /*#__PURE__*/React.createElement(SelectItem, {
    disabled: true,
    role: "option",
    "data-testid": "option",
    "aria-hidden": false,
    "aria-disabled": "true"
  }, noOptionResult));
};

export default SelectList;