import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["label", "showHoverLine", "dropDownPlacement", "noLineBreak", "iconDefaultColor", "showFullWidth", "disabled", "hoverToOpen", "onChange", "children", "leftIcon", "className", "itemElement"];
import * as React from 'react';
import classNames from 'classnames';
import { ArrowDownIcon } from '../../General/Icon/components';
import { escEvent } from '../../Utils/DomUtils';
import { DropdownContainer, DropdownWrapper, DropdownHeader, DropdownBody, DropdownItemWrapper, IconWrapper } from './DropdownStyle';
import DropdownItem from './DropdownItem';
export var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
      _ref$showHoverLine = _ref.showHoverLine,
      showHoverLine = _ref$showHoverLine === void 0 ? false : _ref$showHoverLine,
      _ref$dropDownPlacemen = _ref.dropDownPlacement,
      dropDownPlacement = _ref$dropDownPlacemen === void 0 ? 'left' : _ref$dropDownPlacemen,
      _ref$noLineBreak = _ref.noLineBreak,
      noLineBreak = _ref$noLineBreak === void 0 ? false : _ref$noLineBreak,
      _ref$iconDefaultColor = _ref.iconDefaultColor,
      iconDefaultColor = _ref$iconDefaultColor === void 0 ? 'black' : _ref$iconDefaultColor,
      _ref$showFullWidth = _ref.showFullWidth,
      showFullWidth = _ref$showFullWidth === void 0 ? false : _ref$showFullWidth,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$hoverToOpen = _ref.hoverToOpen,
      hoverToOpen = _ref$hoverToOpen === void 0 ? false : _ref$hoverToOpen,
      onChange = _ref.onChange,
      children = _ref.children,
      leftIcon = _ref.leftIcon,
      className = _ref.className,
      itemElement = _ref.itemElement,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var dropdownBodyRef = React.useRef(null);

  var _React$useState = React.useState(label),
      dropdownLabel = _React$useState[0],
      setDropdownLabel = _React$useState[1];

  var _React$useState2 = React.useState(false),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      cursor = _React$useState3[0],
      setCursor = _React$useState3[1];

  var handleOpen = function handleOpen() {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  var hoverOpen = function hoverOpen() {
    if (hoverToOpen) {
      setIsOpen(true);
    }
  };

  var hoverClose = function hoverClose() {
    if (hoverToOpen) {
      setIsOpen(false);
      setCursor(0);
    }
  };

  var handleClose = function handleClose() {
    setIsOpen(false);
    setCursor(0);
  };

  var handleClickItem = function handleClickItem(onClick) {
    return function (e) {
      var itemElement = e.target;

      if (itemElement.dataset.value) {
        setDropdownLabel(itemElement.innerHTML);

        if (onChange && typeof onChange === 'function') {
          onChange(itemElement.dataset.value);
        }
      }

      if (onClick && typeof onClick === 'function') {
        onClick(e);
      }

      setIsOpen(false);
    };
  };

  var handleMouseEnter = setCursor;

  var handleKeyDown = function handleKeyDown(e) {
    e.preventDefault(); // Up Arrow

    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && // Down Arrow
    cursor < React.Children.count(children) - 1) {
      setCursor(cursor + 1);
    } else if (e.keyCode === 13) {
      // Enter
      setDropdownLabel(dropdownBodyRef.current.querySelector('.active').innerHTML);
      setIsOpen(false);
    }
  };

  React.useEffect(function () {
    var handleEscKeydown = escEvent(handleClose);
    document.addEventListener('keydown', handleEscKeydown, false);
    return function () {
      document.removeEventListener('keydown', handleEscKeydown, false);
    };
  }, []);
  var LeftIcon = leftIcon;
  return /*#__PURE__*/React.createElement(DropdownContainer, _extends({
    className: classNames('aries-dropdown', className),
    tabIndex: 0,
    onClick: handleOpen,
    onMouseEnter: hoverOpen,
    onMouseLeave: hoverClose,
    onBlur: handleClose,
    onKeyDown: handleKeyDown,
    role: "menuitem",
    "aria-label": dropdownLabel,
    "aria-haspopup": "true"
  }, defaultProps), /*#__PURE__*/React.createElement(DropdownWrapper, {
    className: "dropdown-contentwrapper",
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(DropdownHeader, {
    className: "dropdown-content",
    isOpen: isOpen,
    disabled: disabled,
    showHoverLine: showHoverLine,
    showFullWidth: showFullWidth,
    iconDefaultColor: iconDefaultColor
  }, LeftIcon, /*#__PURE__*/React.createElement("span", null, itemElement ? itemElement : dropdownLabel), /*#__PURE__*/React.createElement(IconWrapper, {
    isOpen: isOpen
  }, /*#__PURE__*/React.createElement(ArrowDownIcon, {
    color: !disabled ? iconDefaultColor : '#777777'
  }))), /*#__PURE__*/React.createElement(DropdownBody, {
    className: "dropdown-listbox",
    role: "listbox",
    "aria-hidden": !isOpen && true,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    open: isOpen,
    dropDownPlacement: dropDownPlacement,
    noLineBreak: noLineBreak,
    showFullWidth: showFullWidth,
    showHoverLine: showHoverLine,
    ref: dropdownBodyRef
  }, React.Children.toArray(children).filter(Boolean).map(function (item, index) {
    var dropDownItemClassName = item.props.className || '';
    return /*#__PURE__*/React.createElement(DropdownItemWrapper, {
      className: classNames({
        active: cursor === index
      }, "" + dropDownItemClassName),
      role: "option",
      "data-value": item.props.value,
      key: item.key,
      onMouseDown: handleClickItem(item.props.onClick),
      onMouseEnter: function onMouseEnter() {
        return handleMouseEnter(index);
      },
      tabIndex: 0,
      showFullWidth: showFullWidth
    }, item.props.children);
  }))));
};
Dropdown.Item = DropdownItem;
export default Dropdown;