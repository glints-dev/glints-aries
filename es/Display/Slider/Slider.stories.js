import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Slider } from './Slider';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { SecondaryColor, Greyscale } from '../../Utils/Colors';
import { ArrowBackDoubleIcon } from '../../General/Icon/components';
import ArrowNextDoubleIcon from '../../General/Icon/components/ArrowNextDoubleIcon';
export default {
  title: 'Display/Slider',
  component: Slider,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    containerRef: {
      table: {
        disable: true
      }
    },
    afterChange: {
      control: {
        type: null
      }
    },
    renderLeftIcon: {
      control: {
        type: null
      }
    },
    renderRightIcon: {
      control: {
        type: null
      }
    }
  }
};

var Template = function Template(_ref) {
  var args = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Slider, args, /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })), /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  })), /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  })));
};

export var Interactive = Template.bind({});
Interactive.args = {};
export var Autoplay = Template.bind({});
Autoplay.args = {
  autoplay: true
};
export var FullContent = Template.bind({});
FullContent.args = {
  fullContent: true
};
export var ArrowWhite = Template.bind({});
ArrowWhite.args = {
  arrowWhite: true
};
export var RemoveDots = Template.bind({});
RemoveDots.args = {
  removeDots: true
};
export var InitialItem = Template.bind({});
InitialItem.args = {
  initialItem: 2
};
export var CustomizedRenderLeftIcon = function CustomizedRenderLeftIcon() {
  return /*#__PURE__*/React.createElement(Slider, {
    renderLeftIcon: function renderLeftIcon(disabled) {
      var color = disabled ? Greyscale.grey : SecondaryColor.actionblue;
      return /*#__PURE__*/React.createElement(ArrowBackDoubleIcon, {
        color: color
      });
    }
  }, /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })), /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  })), /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  })));
};
export var CustomizedRenderRightIcon = function CustomizedRenderRightIcon() {
  return /*#__PURE__*/React.createElement(Slider, {
    renderRightIcon: function renderRightIcon(disabled) {
      var color = disabled ? Greyscale.grey : SecondaryColor.actionblue;
      return /*#__PURE__*/React.createElement(ArrowNextDoubleIcon, {
        color: color
      });
    }
  }, /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })), /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  })), /*#__PURE__*/React.createElement(Slider.Item, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  })));
};