import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import { Select } from './Select';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import styled from 'styled-components';
import * as Components from './SelectStyle';
import { SecondaryColor } from '../../Utils/Colors';
import { Button } from '../../General/Button/Button';
import { Box } from '../../Layout/Box';
import { identity, sample, sampleSize } from 'lodash';
import { TextField } from '../..';
var StoryContainer = styled(BaseContainer).withConfig({
  displayName: "Selectstories__StoryContainer",
  componentId: "sc-qzffum-0"
})(["min-height:250px;"]);
export default {
  title: 'Input/DownshiftSelect',
  component: Select,
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
    return /*#__PURE__*/React.createElement(StoryContainer, null, Story());
  }]
};
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
var CustomLabel = styled.label.withConfig({
  displayName: "Selectstories__CustomLabel",
  componentId: "sc-qzffum-1"
})(["color:green;"]);
var CustomStyledItem = styled(Select.Components.Item).withConfig({
  displayName: "Selectstories__CustomStyledItem",
  componentId: "sc-qzffum-2"
})(["display:flex;justify-content:space-between;&[aria-selected='true']{color:", ";}"], SecondaryColor.darkgreen);

var CustomItem = function CustomItem(props) {
  return /*#__PURE__*/React.createElement(CustomStyledItem, props, /*#__PURE__*/React.createElement("span", null, props.children), /*#__PURE__*/React.createElement("code", null, JSON.stringify(props.item)));
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Select, _extends({
    items: items
  }, args, {
    inputValue: undefined,
    onInputValueChange: undefined,
    onClear: undefined,
    onIsOpenChange: undefined,
    onSelectedItemChange: undefined
  }));
};

export var Interactive = Template.bind({});
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
export var RealisticExample = function RealisticExample() {
  var _useState = useState(null),
      selectedItem = _useState[0],
      setSelectedItem = _useState[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
    label: "Select a Job",
    items: items,
    selectedItem: selectedItem,
    onSelectedItemChange: setSelectedItem
  }), /*#__PURE__*/React.createElement(Box, {
    mt: 16
  }, "Selected Job: ", selectedItem ? selectedItem.label : 'none'));
};
RealisticExample.parameters = {
  docs: {
    description: {
      story: 'The Select is built with async items in mind. Just update the items at any time.'
    }
  }
};
export var Groups = Template.bind({});
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
export var TransformFunctionForCustomFilter = Template.bind({});
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
export var TransformFunctionForNoFilter = Template.bind({});
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
export var CustomComponents = Template.bind({});
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
export var RemoveToggleButton = Template.bind({});
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
export var LoadingState = Template.bind({});
LoadingState.args = {
  isLoading: true
};
export var InitiallyOpen = Template.bind({});
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
export var HelperText = Template.bind({});
HelperText.args = {
  helperText: 'I am helpful text'
};
export var Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'I am placeholder'
};
export var Label = Template.bind({});
Label.args = {
  label: 'I am label'
};
export var DownshiftOptions = Template.bind({});
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
export var Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Select An Option',
  placeholder: 'I am placeholder',
  helperText: 'I am helper text'
};
export var DisableTyping = Template.bind({});
DisableTyping.args = {
  disableTyping: true,
  transformFunction: identity
};
DisableTyping.parameters = {
  docs: {
    description: {
      story: "With disableTyping=true, the internal input will be set to readonly. This is helpful when there's only a small or fixed amount of items. This can be combined with setting transformFunction to the identity function to disable the filtering after an option has been chosen."
    }
  }
};
export var DisabledOptions = Template.bind({});
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
export var ControlledSelectedItem = function ControlledSelectedItem() {
  var _useState2 = useState(null),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setSelectedItem(sample(items));
    }
  }, "Select Random Item"), "\xA0\xA0", /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setSelectedItem(null);
    }
  }, "Reset"), "\xA0\xA0", selectedItem ? "Selected item is " + selectedItem.label : 'No item selected'), /*#__PURE__*/React.createElement(Select, {
    items: items,
    selectedItem: selectedItem,
    onSelectedItemChange: function onSelectedItemChange(item) {
      return setSelectedItem(item);
    }
  }));
};
ControlledSelectedItem.parameters = {
  docs: {
    description: {
      story: 'Use selectedItem and setSelectedItem to control the currently selected item. <strong>In many cases, you will want to use this to react to selections made by the user.</strong> Use null as the controlled selectedItem when no item is selected: So if you want to have a controlled Select with no item selected by default, use useState(null).'
    }
  }
};
export var ControlledIsOpen = function ControlledIsOpen() {
  var _useState3 = useState(false),
      isOpen = _useState3[0],
      setIsOpen = _useState3[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Open Select"), "\xA0\xA0Select is ", isOpen ? 'open' : 'closed'), /*#__PURE__*/React.createElement(Select, {
    items: items,
    isOpen: isOpen,
    onIsOpenChange: function onIsOpenChange(newState) {
      return setIsOpen(newState);
    }
  }));
};
ControlledIsOpen.parameters = {
  docs: {
    description: {
      story: "Use isOpen and onIsOpenChange to control the state of the Select's menu. Note that clicking outside of the Select closes the select (calls onIsOpenChange with false) so if you're trying to build a 'toggle' button, clicking that button will first close the menu."
    }
  }
};
export var ControlledInputValue = function ControlledInputValue() {
  var _useState4 = useState(''),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, /*#__PURE__*/React.createElement(TextField, {
    value: inputValue,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    placeholder: "foo"
  })), /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, "Input value is ", /*#__PURE__*/React.createElement("code", null, JSON.stringify(inputValue))), /*#__PURE__*/React.createElement(Select, {
    items: items,
    inputValue: inputValue,
    onInputValueChange: function onInputValueChange(inputValue) {
      return setInputValue(inputValue);
    }
  }));
};
ControlledInputValue.parameters = {
  docs: {
    description: {
      story: "Use inputValue and setInputValue to control the input value (this value is used for the search function, don't confuse it with selectedItem"
    }
  }
};
export var Invalid = Template.bind({});
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
export var DisableAutocomplete = Template.bind({});
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
export var FocusCallbacks = function FocusCallbacks() {
  var _useState5 = useState(0),
      onFocusCalls = _useState5[0],
      setOnFocusCalls = _useState5[1];

  var _useState6 = useState(0),
      onBlurCalls = _useState6[0],
      setOnBlurCalls = _useState6[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, /*#__PURE__*/React.createElement("code", null, "onFocus"), " called ", onFocusCalls, " times."), /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, /*#__PURE__*/React.createElement("code", null, "onBlur"), " called ", onBlurCalls, " times."), /*#__PURE__*/React.createElement(Select, {
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
FocusCallbacks.parameters = {
  docs: {
    description: {
      story: 'Intrinsic props are usually passed down to the internal input element, so you can simply use onFocus and onBlur to capture those events.'
    }
  }
};
export var OnClearCallback = function OnClearCallback() {
  var _useState7 = useState(0),
      onClearCalls = _useState7[0],
      setOnClearCalls = _useState7[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, /*#__PURE__*/React.createElement("code", null, "onClear"), " called ", onClearCalls, " times."), /*#__PURE__*/React.createElement(Select, {
    items: items,
    onClear: function onClear() {
      return setOnClearCalls(onClearCalls + 1);
    }
  }));
};
OnClearCallback.parameters = {
  docs: {
    description: {
      story: 'Use onClear to capture the when the clear-button is clicked.'
    }
  }
};
var ShortContainer = styled(Select.Components.Container).withConfig({
  displayName: "Selectstories__ShortContainer",
  componentId: "sc-qzffum-3"
})(["max-width:280px;"]);
export var ConfigurableWidth = Template.bind({});
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
var SmallContainer = styled(Select.Components.Container).withConfig({
  displayName: "Selectstories__SmallContainer",
  componentId: "sc-qzffum-4"
})(["max-width:200px;font-size:11px;"]);
export var Small = Template.bind({});
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
var StyledEmptyList = styled(Select.Components.EmptyList).withConfig({
  displayName: "Selectstories__StyledEmptyList",
  componentId: "sc-qzffum-5"
})(["display:flex;justify-content:center;color:green;"]);
export var EmptyListText = Template.bind({});
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
export var AsyncItems = function AsyncItems() {
  var _useState8 = useState(sampleSize(items, 2)),
      sampleItems = _useState8[0],
      setSampleItems = _useState8[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mb: 8
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setSampleItems(sampleSize(items, 2));
    }
  }, "Randomize Items")), /*#__PURE__*/React.createElement(Select, {
    items: sampleItems
  }));
};
AsyncItems.parameters = {
  docs: {
    description: {
      story: 'The Select is built with async items in mind. Just update the items at any time.'
    }
  }
};