"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.TransformFunctionForNoFilter = exports.TransformFunctionForCustomFilter = exports.Small = exports.RemoveToggleButton = exports.RealisticExample = exports.Placeholder = exports.OnClearCallback = exports.LoadingState = exports.Label = exports.Invalid = exports.Interactive = exports.InitiallyOpen = exports.HelperText = exports.Groups = exports.FocusCallbacks = exports.EmptyListText = exports.DownshiftOptions = exports.DisabledOptions = exports.Disabled = exports.DisableTyping = exports.DisableAutocomplete = exports.CustomComponents = exports.ControlledSelectedItem = exports.ControlledIsOpen = exports.ControlledInputValue = exports.ConfigurableWidth = exports.AsyncItems = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Select = require("./Select");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Components = _interopRequireWildcard(require("./SelectStyle"));

var _Colors = require("../../Utils/Colors");

var _Button = require("../../General/Button/Button");

var _Box = require("../../Layout/Box");

var _lodash = require("lodash");

var _ = require("../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var StoryContainer = (0, _styledComponents["default"])(_GlintsContainer.BaseContainer).withConfig({
  displayName: "Selectstories__StoryContainer",
  componentId: "sc-qzffum-0"
})(["min-height:250px;"]);
var _default = {
  title: 'Input/DownshiftSelect',
  component: _Select.Select,
  argTypes: {
    components: {
      control: null
    },
    transformFunction: {
      control: null
    },
    items: {
      control: null
    },
    downshift: {
      control: null
    },
    selectedItem: {
      control: null
    },
    inputValue: {
      control: null
    },
    onInputValueChange: {
      control: null
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(StoryContainer, null, Story());
  }]
};
exports["default"] = _default;
var items = [{
  label: 'Software Engineer',
  value: 'v0',
  category: 'Software Engineering'
}, {
  label: 'Software Tester',
  value: 'v1',
  category: 'Quality Assurance'
}, {
  label: 'Back-end Engineer',
  value: 'v2',
  category: 'Software Engineering'
}, {
  label: 'Front-end Engineer',
  value: 'v3',
  category: 'Software Engineering'
}];
var componentNames = Object.keys(Components).filter(function (name) {
  return !name.startsWith('_');
});

var CustomLabel = _styledComponents["default"].label.withConfig({
  displayName: "Selectstories__CustomLabel",
  componentId: "sc-qzffum-1"
})(["color:green;"]);

var CustomStyledItem = (0, _styledComponents["default"])(_Select.Select.Components.Item).withConfig({
  displayName: "Selectstories__CustomStyledItem",
  componentId: "sc-qzffum-2"
})(["display:flex;justify-content:space-between;&[aria-selected='true']{color:", ";}"], _Colors.SecondaryColor.darkgreen);

var CustomItem = function CustomItem(props) {
  return /*#__PURE__*/_react["default"].createElement(CustomStyledItem, props, /*#__PURE__*/_react["default"].createElement("span", null, props.children), /*#__PURE__*/_react["default"].createElement("code", null, JSON.stringify(props.item)));
};

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Select.Select, (0, _extends2["default"])({
    items: items
  }, args, {
    inputValue: undefined,
    onInputValueChange: undefined,
    onClear: undefined,
    onIsOpenChange: undefined,
    onSelectedItemChange: undefined
  }));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  label: 'Select An Item',
  helperText: 'Type to filter'
};
Interactive.parameters = {
  docs: {
    description: {
      story: "You can pass a transformFunction to make the combobox filter the provided items according to custom logic. In the example above, the filter function uses String.includes instead of the default String.startsWith."
    }
  }
};

var RealisticExample = function RealisticExample() {
  var _useState = (0, _react.useState)(null),
      selectedItem = _useState[0],
      setSelectedItem = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    label: "Select a Job",
    items: items,
    selectedItem: selectedItem,
    onSelectedItemChange: setSelectedItem
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mt: 16
  }, "Selected Job: ", selectedItem ? selectedItem.label : 'none'));
};

exports.RealisticExample = RealisticExample;
RealisticExample.parameters = {
  docs: {
    description: {
      story: 'The Select is built with async items in mind. Just update the items at any time.'
    }
  }
};
var Groups = Template.bind({});
exports.Groups = Groups;
Groups.args = {
  groupKey: 'category'
};
Groups.parameters = {
  docs: {
    description: {
      story: "You can pass groupKey to group items by that key. This will also be used as the header for the group."
    }
  }
};
var TransformFunctionForCustomFilter = Template.bind({});
exports.TransformFunctionForCustomFilter = TransformFunctionForCustomFilter;
TransformFunctionForCustomFilter.args = {
  transformFunction: function transformFunction(items, inputValue) {
    return items.filter(function (item) {
      return item.label.toLowerCase().startsWith(inputValue.toLowerCase());
    });
  }
};
TransformFunctionForCustomFilter.parameters = {
  docs: {
    description: {
      story: "You can pass a transformFunction to make the combobox filter the provided items according to custom logic. In the example above, the filter function uses String.startsWith instead of the default String.includes."
    }
  }
};
var TransformFunctionForNoFilter = Template.bind({});
exports.TransformFunctionForNoFilter = TransformFunctionForNoFilter;
TransformFunctionForNoFilter.args = {
  transformFunction: function transformFunction(items) {
    return items;
  }
};
TransformFunctionForNoFilter.parameters = {
  docs: {
    description: {
      story: "You can pass an identity function as transformFunction to disable filtering (useful if you are controlling the items in an external state)."
    }
  }
};
var CustomComponents = Template.bind({});
exports.CustomComponents = CustomComponents;
CustomComponents.args = {
  components: {
    Label: CustomLabel,
    Item: CustomItem
  }
};
CustomComponents.parameters = {
  docs: {
    description: {
      story: "You can override the components that comprise the Combobox. These components are available at the moment: " + componentNames.map(function (name) {
        return "" + name;
      })
    }
  }
};
var RemoveToggleButton = Template.bind({});
exports.RemoveToggleButton = RemoveToggleButton;
RemoveToggleButton.args = {
  components: {
    ToggleButton: function ToggleButton() {
      return null;
    }
  }
};
RemoveToggleButton.parameters = {
  docs: {
    description: {
      story: 'Remove the toggle button by passing components={{ ToggleButton: () => null }}'
    }
  }
};
var LoadingState = Template.bind({});
exports.LoadingState = LoadingState;
LoadingState.args = {
  isLoading: true
};
var InitiallyOpen = Template.bind({});
exports.InitiallyOpen = InitiallyOpen;
InitiallyOpen.args = {
  isOpenInitially: false
};
InitiallyOpen.parameters = {
  docs: {
    description: {
      story: 'Pass isOpenInitially=true to open and focus the Select on render. (Set to false in this story because it would steal focus from the other stories otherwise).'
    }
  }
};
var HelperText = Template.bind({});
exports.HelperText = HelperText;
HelperText.args = {
  helperText: 'I am helpful text'
};
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = {
  placeholder: 'I am placeholder'
};
var Label = Template.bind({});
exports.Label = Label;
Label.args = {
  label: 'I am label'
};
var DownshiftOptions = Template.bind({});
exports.DownshiftOptions = DownshiftOptions;
DownshiftOptions.args = {
  downshift: {
    defaultHighlightedIndex: 2
  }
};
DownshiftOptions.parameters = {
  docs: {
    description: {
      story: 'If the options afforded by the Select component are not enough, you can also use the downshift prop to pass custom options to the internal useCombobox hook. You can read the documentation <a href="https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md">here</a>. Use this with caution, future versions of this component might break your custom functionality.'
    }
  }
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true,
  label: 'Select An Option',
  placeholder: 'I am placeholder',
  helperText: 'I am helper text'
};
var DisableTyping = Template.bind({});
exports.DisableTyping = DisableTyping;
DisableTyping.args = {
  disableTyping: true,
  transformFunction: _lodash.identity
};
DisableTyping.parameters = {
  docs: {
    description: {
      story: "With disableTyping=true, the internal input will be set to readonly. This is helpful when there's only a small or fixed amount of items. This can be combined with setting transformFunction to the identity function to disable the filtering after an option has been chosen."
    }
  }
};
var DisabledOptions = Template.bind({});
exports.DisabledOptions = DisabledOptions;
DisabledOptions.args = {
  items: items.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      disabled: true
    });
  })
};
DisabledOptions.parameters = {
  docs: {
    description: {
      story: "Use the items' disabled prop to disable individual items."
    }
  }
};

var ControlledSelectedItem = function ControlledSelectedItem() {
  var _useState2 = (0, _react.useState)(null),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setSelectedItem((0, _lodash.sample)(items));
    }
  }, "Select Random Item"), "\xA0\xA0", /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setSelectedItem(null);
    }
  }, "Reset"), "\xA0\xA0", selectedItem ? "Selected item is " + selectedItem.label : 'No item selected'), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    items: items,
    selectedItem: selectedItem,
    onSelectedItemChange: function onSelectedItemChange(item) {
      return setSelectedItem(item);
    }
  }));
};

exports.ControlledSelectedItem = ControlledSelectedItem;
ControlledSelectedItem.parameters = {
  docs: {
    description: {
      story: 'Use selectedItem and setSelectedItem to control the currently selected item. <strong>In many cases, you will want to use this to react to selections made by the user.</strong> Use null as the controlled selectedItem when no item is selected: So if you want to have a controlled Select with no item selected by default, use useState(null).'
    }
  }
};

var ControlledIsOpen = function ControlledIsOpen() {
  var _useState3 = (0, _react.useState)(false),
      isOpen = _useState3[0],
      setIsOpen = _useState3[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Open Select"), "\xA0\xA0Select is ", isOpen ? 'open' : 'closed'), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    items: items,
    isOpen: isOpen,
    onIsOpenChange: function onIsOpenChange(newState) {
      return setIsOpen(newState);
    }
  }));
};

exports.ControlledIsOpen = ControlledIsOpen;
ControlledIsOpen.parameters = {
  docs: {
    description: {
      story: "Use isOpen and onIsOpenChange to control the state of the Select's menu. Note that clicking outside of the Select closes the select (calls onIsOpenChange with false) so if you're trying to build a 'toggle' button, clicking that button will first close the menu."
    }
  }
};

var ControlledInputValue = function ControlledInputValue() {
  var _useState4 = (0, _react.useState)(''),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, /*#__PURE__*/_react["default"].createElement(_.TextField, {
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    placeholder: "foo"
  })), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, "Input value is ", /*#__PURE__*/_react["default"].createElement("code", null, JSON.stringify(inputValue))), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    items: items,
    inputValue: inputValue,
    onInputValueChange: function onInputValueChange(inputValue) {
      return setInputValue(inputValue);
    }
  }));
};

exports.ControlledInputValue = ControlledInputValue;
ControlledInputValue.parameters = {
  docs: {
    description: {
      story: "Use inputValue and setInputValue to control the input value (this value is used for the search function, don't confuse it with selectedItem"
    }
  }
};
var Invalid = Template.bind({});
exports.Invalid = Invalid;
Invalid.args = {
  label: 'Username',
  invalid: true,
  helperText: 'Username is required'
};
Invalid.parameters = {
  docs: {
    description: {
      story: 'Use invalid=true to toggle the Select into an error state. It is recommended that you use helperText to describe the error when you do this.'
    }
  }
};
var DisableAutocomplete = Template.bind({});
exports.DisableAutocomplete = DisableAutocomplete;
DisableAutocomplete.args = {
  autocomplete: 'off'
};
DisableAutocomplete.parameters = {
  docs: {
    description: {
      story: "Intrinsic props are usually passed down to the internal input element, so to disable autocompletion just pass autocomplete='off'."
    }
  }
};

var FocusCallbacks = function FocusCallbacks() {
  var _useState5 = (0, _react.useState)(0),
      onFocusCalls = _useState5[0],
      setOnFocusCalls = _useState5[1];

  var _useState6 = (0, _react.useState)(0),
      onBlurCalls = _useState6[0],
      setOnBlurCalls = _useState6[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, /*#__PURE__*/_react["default"].createElement("code", null, "onFocus"), " called ", onFocusCalls, " times."), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, /*#__PURE__*/_react["default"].createElement("code", null, "onBlur"), " called ", onBlurCalls, " times."), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    items: items,
    "data-test": "foo",
    onFocus: function onFocus() {
      return setOnFocusCalls(onFocusCalls + 1);
    },
    onBlur: function onBlur() {
      return setOnBlurCalls(onBlurCalls + 1);
    }
  }));
};

exports.FocusCallbacks = FocusCallbacks;
FocusCallbacks.parameters = {
  docs: {
    description: {
      story: 'Intrinsic props are usually passed down to the internal input element, so you can simply use onFocus and onBlur to capture those events.'
    }
  }
};

var OnClearCallback = function OnClearCallback() {
  var _useState7 = (0, _react.useState)(0),
      onClearCalls = _useState7[0],
      setOnClearCalls = _useState7[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, /*#__PURE__*/_react["default"].createElement("code", null, "onClear"), " called ", onClearCalls, " times."), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    items: items,
    onClear: function onClear() {
      return setOnClearCalls(onClearCalls + 1);
    }
  }));
};

exports.OnClearCallback = OnClearCallback;
OnClearCallback.parameters = {
  docs: {
    description: {
      story: 'Use onClear to capture the when the clear-button is clicked.'
    }
  }
};
var ShortContainer = (0, _styledComponents["default"])(_Select.Select.Components.Container).withConfig({
  displayName: "Selectstories__ShortContainer",
  componentId: "sc-qzffum-3"
})(["max-width:280px;"]);
var ConfigurableWidth = Template.bind({});
exports.ConfigurableWidth = ConfigurableWidth;
ConfigurableWidth.args = {
  components: {
    Container: ShortContainer
  },
  items: [].concat(items, [_objectSpread(_objectSpread({}, items[0]), {}, {
    label: "This Option Is Long! I Hope It Doesn't Get Truncated!"
  })])
};
ConfigurableWidth.parameters = {
  docs: {
    description: {
      story: "By default, the select has a 100% width. To change the width, just pass a custom Container subcomponent. Note that you might also have to adjust other subcomponent's styles if you want to make it really short (less than 300px)."
    }
  }
};
var SmallContainer = (0, _styledComponents["default"])(_Select.Select.Components.Container).withConfig({
  displayName: "Selectstories__SmallContainer",
  componentId: "sc-qzffum-4"
})(["max-width:200px;font-size:11px;"]);
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  label: "I'm so small!",
  placeholder: 'Try typing here :-P',
  components: {
    Container: SmallContainer
  },
  helperText: 'Why would you do this to me?'
};
Small.parameters = {
  docs: {
    description: {
      story: "<p>By default, the Select dictates a font-size of 16px that cascades through (almost) all sub-components. Appropriate spaces are defined using em, so if you want to resize the Select, just change the container's font-size.</p><p>The exception to the 16px default is the helper text, which also just uses an em relative value.</p>"
    }
  }
};
var StyledEmptyList = (0, _styledComponents["default"])(_Select.Select.Components.EmptyList).withConfig({
  displayName: "Selectstories__StyledEmptyList",
  componentId: "sc-qzffum-5"
})(["display:flex;justify-content:center;color:green;"]);
var EmptyListText = Template.bind({});
exports.EmptyListText = EmptyListText;
EmptyListText.args = {
  emptyListText: '¯\\_(ツ)_/¯',
  components: {
    EmptyList: StyledEmptyList
  }
};
EmptyListText.parameters = {
  docs: {
    description: {
      story: 'When, after applying the transformFunction the list of items is empty, a special message will be shown in the dropdown. This message can be customized with emptyListText. You can also style this'
    }
  }
};

var AsyncItems = function AsyncItems() {
  var _useState8 = (0, _react.useState)((0, _lodash.sampleSize)(items, 2)),
      sampleItems = _useState8[0],
      setSampleItems = _useState8[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    mb: 8
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setSampleItems((0, _lodash.sampleSize)(items, 2));
    }
  }, "Randomize Items")), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    items: sampleItems
  }));
};

exports.AsyncItems = AsyncItems;
AsyncItems.parameters = {
  docs: {
    description: {
      story: 'The Select is built with async items in mind. Just update the items at any time.'
    }
  }
};