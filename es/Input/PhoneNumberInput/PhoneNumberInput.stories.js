import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useState } from 'react';
import { PhoneNumberInput } from './PhoneNumberInput';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Tag } from '../..';
export default {
  title: 'Input/PhoneNumberInput',
  component: PhoneNumberInput,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, {
      style: {
        height: '400px'
      }
    }, Story());
  }]
};
var callingCodeOptions = [{
  label: 'Malaysia',
  callingCode: 60,
  isFeatured: true
}, {
  label: 'Indonesia',
  callingCode: 62,
  isFeatured: true
}, {
  label: 'Singapore',
  callingCode: 65,
  isFeatured: true
}, {
  label: 'Taiwan',
  callingCode: 886,
  isFeatured: true
}, {
  label: 'Vietnam',
  callingCode: 84,
  isFeatured: true
}, {
  label: 'Afghanistan',
  callingCode: 93,
  isFeatured: false
}, {
  label: 'Albania',
  callingCode: 355,
  isFeatured: false
}, {
  label: 'Algeria',
  callingCode: 213,
  isFeatured: false
}, {
  label: 'Germany',
  callingCode: 42,
  isFeatured: false
}, {
  label: 'United States',
  callingCode: 1,
  isFeatured: false
}];

var Template = function Template(args) {
  var _useState = useState({
    callingCode: 65,
    significantNumber: args.initialSignificantNumber || null
  }),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = useState(args.initialFilterInput || ''),
      filterInput = _useState2[0],
      setFilterInput = _useState2[1];

  var options = filterInput ? callingCodeOptions.filter(function (option) {
    return option.label.toLowerCase().includes(filterInput.toLowerCase()) || option.callingCode.toString().includes(filterInput.toLowerCase());
  }) : callingCodeOptions;
  var error = value.significantNumber && /[a-zA-Z]/g.test(value.significantNumber) && 'Please include numbers only.';

  var _useState3 = useState(false),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  useEffect(function simulateLoadingOnFilterInputChange() {
    if (args.filterDelayMs && filterInput) {
      setIsLoading(true);

      var stopLoading = function stopLoading() {
        return setIsLoading(false);
      };

      var timeout = setTimeout(stopLoading, args.filterDelayMs);
      return function () {
        clearTimeout(timeout);
        stopLoading();
      };
    }
  }, [args.filterDelayMs, filterInput]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "The phone number is +", value.callingCode || '??', ' ', value.significantNumber || '???'), /*#__PURE__*/React.createElement(PhoneNumberInput, _extends({
    value: value,
    callingCodeOptions: options,
    filterValue: filterInput,
    isLoadingCallingCodeOptions: isLoading,
    label: "Mobile Number",
    featuredOptionsLabel: "Frequently Used",
    otherOptionsLabel: "The Rest Of The World",
    callingCodeFilterInputPlaceholder: "Type country code or country name",
    callingCodeNoOptionsLabel: "Sorry, there are no results for country " + filterInput + ". Please try again.",
    error: error
  }, args, {
    onChange: setValue,
    onInputChange: setFilterInput,
    onBlur: console.log
  })));
};

export var Default = Template.bind({});
Default.args = {};
export var WithError = Template.bind({});
WithError.args = {
  initialSignificantNumber: '1234 foo'
};
export var NoCallingCodeOptions = Template.bind({});
NoCallingCodeOptions.args = {
  initialFilterInput: 'Buxdehude'
};
export var Loading = Template.bind({});
Loading.args = {
  filterDelayMs: 1000
};
export var WithAddon = Template.bind({});
WithAddon.args = {
  addon: /*#__PURE__*/React.createElement(Tag, null, "I am an addon :)")
};