import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { Flex } from './index';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import * as S from './FlexStoryStyle';
import { boxArgTypes } from '../Box/constants';
export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: _objectSpread(_objectSpread({
    // to put prop at the top of table by giving empty object
    flexDirection: {},
    justifyContent: {},
    alignItems: {},
    flexWrap: {}
  }, boxArgTypes), {}, {
    style: {
      table: {
        disable: true
      }
    }
  }),
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(S.Flex, args, /*#__PURE__*/React.createElement(S.Item, null, "1"), /*#__PURE__*/React.createElement(S.Item, null, "2"), /*#__PURE__*/React.createElement(S.Item, null, "3"));
};

export var Interactive = Template.bind({});