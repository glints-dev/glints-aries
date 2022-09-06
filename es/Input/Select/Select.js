import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["label", "status", "disabled", "className", "onFocus", "onBlur", "onChange", "onInputChange", "noOptionResult", "small", "disableTyping", "removeFloatingLabel", "removeDropIcon", "error", "renderError", "value", "defaultValue", "defaultOpen", "children", "isLoading", "filterFunction"];
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import get from 'lodash/get';
import toLower from 'lodash/toLower';
import classNames from 'classnames';
import SelectList from './SelectList';
import { ArrowDownIcon } from '../../General/Icon/components';
import { SelectContainer, SelectWrapper, SelectInput, SelectLabel, SelectErrorDefault } from './SelectStyle';
import { canWarn } from '../../Utils/canWarn';

var defaultFilterFunction = function defaultFilterFunction(option, search) {
  return toLower(option).includes(toLower(search));
};

var Select = function Select(props) {
  var label = props.label,
      status = props.status,
      disabled = props.disabled,
      className = props.className,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onInputChange = props.onInputChange,
      _props$noOptionResult = props.noOptionResult,
      noOptionResult = _props$noOptionResult === void 0 ? 'No results found' : _props$noOptionResult,
      small = props.small,
      disableTyping = props.disableTyping,
      removeFloatingLabel = props.removeFloatingLabel,
      removeDropIcon = props.removeDropIcon,
      error = props.error,
      renderError = props.renderError,
      value = props.value,
      defaultValue = props.defaultValue,
      _props$defaultOpen = props.defaultOpen,
      defaultOpen = _props$defaultOpen === void 0 ? false : _props$defaultOpen,
      children = props.children,
      isLoading = props.isLoading,
      _props$filterFunction = props.filterFunction,
      filterFunction = _props$filterFunction === void 0 ? defaultFilterFunction : _props$filterFunction,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded); // warn deprecated prop "status"


  React.useEffect(function warnDeprecatedProp() {
    if (status) {
      if (canWarn) {
        console.warn("Warning: Select's status prop is deprecated and will be\n        removed in a future release.\n\nPlease use the error prop instead to\n        show errors and indicate an error state.");
      }
    }
  }, [status]); // warn non-string type value, defaultValue

  React.useEffect(function warnNonStringValueAndDefaultValue() {
    var shouldWarnValue = typeof value !== 'undefined' && typeof value !== 'string';
    var shouldWarnDefaultValue = typeof defaultValue !== 'undefined' && typeof defaultValue !== 'string';

    if (shouldWarnValue || shouldWarnDefaultValue) {
      if (canWarn) {
        console.warn("Warning: glints-aries Select's value and defaultValue props can only be type of string.");
      }
    }
  }, [value, defaultValue]);

  var _React$useState = React.useState(function () {
    var initialInputValue = value || defaultValue || '';
    return String(initialInputValue);
  }),
      inputValue = _React$useState[0],
      setInputValue = _React$useState[1];

  var _React$useState2 = React.useState(Boolean(inputValue)),
      floating = _React$useState2[0],
      setFloating = _React$useState2[1];

  var _React$useState3 = React.useState(defaultOpen),
      isFocus = _React$useState3[0],
      setIsFocus = _React$useState3[1];

  var _React$useState4 = React.useState(false),
      isInputChange = _React$useState4[0],
      setIsInputChange = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      activeOptionIndex = _React$useState5[0],
      setActiveOptionIndex = _React$useState5[1];

  var _React$useState6 = React.useState(false),
      shouldScrollToActiveOption = _React$useState6[0],
      setShouldScrollToActiveOption = _React$useState6[1];

  var selectContainerRef = React.useRef();
  var selectInputRef = React.useRef(); // set options based on children and inputValue

  var availableOptions = React.useMemo(function () {
    var childrenOptions = React.Children.toArray(children);

    if (!inputValue) {
      return childrenOptions;
    }

    if (inputValue && disableTyping) {
      return childrenOptions;
    }

    if (!isInputChange) {
      // to check whether an option is selected by clicking an option
      // if so, we render all the options in the dropdown
      var isInputValueOneOfOptions = childrenOptions.some(function (data) {
        return String(data.props.children) === inputValue;
      });

      if (isInputValueOneOfOptions) {
        return childrenOptions;
      }
    }

    var matchedChildrenOptions = childrenOptions.filter(function (data) {
      return filterFunction(data.props.children, inputValue);
    });
    return matchedChildrenOptions;
  }, [children, inputValue, disableTyping, isInputChange, filterFunction]);

  var _React$useState7 = React.useState(availableOptions),
      options = _React$useState7[0],
      setOptions = _React$useState7[1];

  React.useEffect(function updateOptionsAndActiveIndex() {
    setOptions(availableOptions);

    if (!isFocus) {
      var selectedOptionIndex = availableOptions.findIndex(function (option) {
        return toLower(option.props.children).includes(toLower(inputValue));
      });

      if (activeOptionIndex !== selectedOptionIndex) {
        setActiveOptionIndex(selectedOptionIndex);
      }
    }
  }, [activeOptionIndex, availableOptions, inputValue, isFocus]);
  React.useEffect(function registerClickOutsideListener() {
    var onClickOutside = function onClickOutside(event) {
      var element = event.target;

      if (selectContainerRef.current && !ReactDOM.findDOMNode(selectContainerRef.current).contains(element)) {
        setIsFocus(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside, false);
    return function () {
      return document.removeEventListener('mousedown', onClickOutside, false);
    };
  }, []);
  React.useEffect(function handleValueChange() {
    if (value) {
      setFloating(true);
      setInputValue(String(value));
      return;
    }

    if (value === '') {
      setInputValue(value);
      setFloating(false);
    }
  }, [value]);
  var handleFocusOut = React.useCallback(function (e) {
    setFloating(e.target.value.length > 0);
    setIsInputChange(false);

    if (typeof onBlur === 'function') {
      return onBlur(e);
    }
  }, [onBlur]);
  var handleFocus = React.useCallback(function (e) {
    setIsFocus(true);

    if (typeof onFocus === 'function') {
      return onFocus(e);
    }
  }, [onFocus]);

  var handleClick = function handleClick() {
    if (!isFocus) {
      selectInputRef.current.focus();
    } else {
      selectInputRef.current.blur();
    }

    setIsFocus(!isFocus);
  };

  var handleDropIconClick = function handleDropIconClick() {
    if (!isFocus) {
      selectInputRef.current.focus();
    }

    setIsFocus(!isFocus);
  }; // Should be called when the user types into the input


  var handleInputChange = React.useCallback(function (e) {
    setInputValue(e.target.value);
    setActiveOptionIndex(0);
    setIsInputChange(true);

    if (typeof onInputChange === 'function') {
      onInputChange(e);
    }
  }, [onInputChange]);
  var getActiveElement = React.useCallback(function () {
    return selectContainerRef.current.querySelector('.active');
  }, []); // Should be called when the user selects an option

  var handleClickOnOption = React.useCallback(function (e) {
    var activeElement = e ? e.target : getActiveElement();
    if (!activeElement) return; // This is the case for the 'no results' option

    var inputValue = activeElement.textContent;
    setInputValue(inputValue);
    setIsFocus(false);
    setFloating(true);
    setIsInputChange(false);

    if (typeof onChange === 'function') {
      onChange(activeElement.dataset.value);
    }

    var activeElementIndex = Number(get(activeElement, 'dataset.id'));
    var activeChild = options[activeElementIndex];
    var onOptionClick = get(activeChild, 'props.onOptionClick');

    if (typeof onOptionClick === 'function') {
      onOptionClick(e);
    }
  }, [onChange, options, getActiveElement]);
  var scrollToActiveElement = React.useCallback(function () {
    var selectListElement = selectContainerRef.current.querySelector('.select-listbox');
    selectListElement.scrollTop = getActiveElement().offsetTop;
  }, [getActiveElement]); // Should be called when any key is pressed inside the component

  var handleKeyDown = React.useCallback(function (e) {
    if (disableTyping) {
      e.preventDefault();
    }

    var inputElement = e.target; // up arrow key

    if (e.keyCode === 38 && activeOptionIndex > 0) {
      setActiveOptionIndex(activeOptionIndex - 1);
      setShouldScrollToActiveOption(true);
    } // down arrow key
    else if (e.keyCode === 40 && activeOptionIndex < options.length - 1) {
      setActiveOptionIndex(activeOptionIndex + 1);
      setShouldScrollToActiveOption(true);
    } // enter key
    else if (e.keyCode === 13) {
      inputElement.blur();
      handleClickOnOption();
    } // escape key
    else if (e.keyCode === 27) {
      inputElement.blur();
      setIsFocus(false);
    }
  }, [disableTyping, options, activeOptionIndex, handleClickOnOption]);
  React.useEffect(function handleScrollToActiveElement() {
    if (shouldScrollToActiveOption) {
      scrollToActiveElement();
      setShouldScrollToActiveOption(false);
    }
  }, [shouldScrollToActiveOption, setShouldScrollToActiveOption, scrollToActiveElement]);
  var handleMouseEnterOption = React.useCallback(function (e) {
    var listItemElement = e.target;
    setActiveOptionIndex(Number(listItemElement.dataset.id));
  }, []);
  var deprecatedStatus = status || error && 'error';
  var shouldShowError = error && typeof error !== 'boolean';
  var completeError = null;

  if (shouldShowError) {
    if (renderError) {
      completeError = renderError(error);
    } else {
      completeError = /*#__PURE__*/React.createElement(SelectErrorDefault, {
        className: "select-error-default"
      }, error);
    }
  }

  return /*#__PURE__*/React.createElement(SelectContainer, {
    className: classNames('aries-select', className),
    ref: selectContainerRef
  }, /*#__PURE__*/React.createElement(SelectWrapper, {
    className: "select-inputwrapper",
    isFocus: isFocus,
    small: small
  }, /*#__PURE__*/React.createElement(SelectInput, _extends({
    ref: selectInputRef,
    type: "text",
    placeholder: removeFloatingLabel && label,
    role: "combobox",
    "aria-expanded": isFocus,
    "aria-autocomplete": "list",
    status: deprecatedStatus,
    disabled: disabled,
    onFocus: disableTyping ? null : handleFocus,
    onBlur: handleFocusOut,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    onClick: disableTyping ? handleClick : null,
    floating: floating,
    value: inputValue,
    small: small,
    disableTyping: disableTyping,
    readOnly: disableTyping,
    autoFocus: defaultOpen
  }, defaultProps)), !removeFloatingLabel && /*#__PURE__*/React.createElement(SelectLabel, {
    "aria-label": label,
    "data-testid": "select-label",
    floating: floating,
    status: deprecatedStatus,
    small: small
  }, label), !removeDropIcon && /*#__PURE__*/React.createElement("div", {
    className: "select-icon",
    "aria-label": "show options",
    onClick: disabled ? null : handleDropIconClick
  }, /*#__PURE__*/React.createElement(ArrowDownIcon, {
    color: "#777777"
  }))), /*#__PURE__*/React.createElement(SelectList, {
    "aria-label": "select-list",
    activeOptionIndex: activeOptionIndex,
    options: options,
    isFocus: isFocus,
    isLoading: isLoading,
    noOptionResult: noOptionResult,
    small: small,
    handleClickOnOption: handleClickOnOption,
    handleMouseEnterOption: handleMouseEnterOption
  }), completeError);
};

export var Option = function Option() {
  return null;
};
Option.displayName = 'Select.Option';
Select.Option = Option;
export default Select;