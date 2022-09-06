import React from 'react';
import { Box } from './index';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import * as S from './BoxStoryStyle';
import { boxArgTypes } from './constants';
export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: boxArgTypes,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(S.GreyBackground, null, /*#__PURE__*/React.createElement(S.Box, args, /*#__PURE__*/React.createElement(S.Content, null, "Content")));
};

export var Interactive = Template.bind({});
Interactive.args = {
  p: 32,
  m: 64
};
export var ResponsiveSpacing = Template.bind({});
ResponsiveSpacing.args = {
  p: {
    "default": 32,
    desktopS: 64
  },
  m: {
    "default": 64,
    desktopS: 32
  }
};
ResponsiveSpacing.parameters = {
  docs: {
    description: {
      story: "Resize the viewport to see the responsive padding and margin change\n\n      Following is the Breakpoint Aliases table for Responsive Space Object\n\n      | Alias    | Device         | Description                           |\n      |----------|----------------|---------------------------------------|\n      | default  | -              | define the base, non-responsive value |\n      | mobileS  | Mobile Small   | @media screen and (min-width: 320px)  |\n      | mobileM  | Mobile Medium  | @media screen and (min-width: 480px)  |\n      | mobileL  | Mobile Large   | @media screen and (min-width: 640px)  |\n      | tablet   | Tablet         | @media screen and (min-width: 768px)  |\n      | desktopS | Desktop Small  | @media screen and (min-width: 1024px) |\n      | desktopM | Desktop Medium | @media screen and (min-width: 1260px) |\n      | desktopL | Desktop Large  | @media screen and (min-width: 1440px) |\n      "
    }
  }
};