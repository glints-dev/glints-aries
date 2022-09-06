import React from 'react';
import { Paragraph } from './Paragraph';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PrimaryColor } from '../../Utils/Colors';
import { PARAGRAPH_FONT_SIZES, PARAGRAPH_VARIANTS } from './ParagraphStyles';
Paragraph.displayName = 'Typography.Paragraph';
export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    variant: {
      description: Object.values(PARAGRAPH_VARIANTS).map(function (variant) {
        return variant + " (" + PARAGRAPH_FONT_SIZES[variant] + "px)";
      }).join(' · ')
    },
    color: {
      control: 'color'
    }
  }
};
var defaultText = "Tanya farnuva naar cam utinu en lokirim tanka tel' taurnin. Lirimaerea vedui' il'er Lotesse Shaalth.";

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Paragraph, args, args.children || defaultText);
};

export var Interactive = Template.bind({});
Interactive.args = {};
export var Color = Template.bind({});
Color.args = {
  color: PrimaryColor.glintsblue
};
export var Ellipsis = Template.bind({});
Ellipsis.args = {
  ellipsis: true,
  children: "'Quel re amrun undome Beikaerea lle auta yeste' Mellonea. Guinahiroo ai' atar diola lle Mith'quessir. Tanya nae sai eina quel undome mani naa tanya nat' loomi en gurth. A! manke naa nae lle tinechor Tarion. Guinahiroo tanya awra! Heruamin Hallaerea. Mani uma lle merna ten' ta toror' taur'ohtarie Iire Cermie. Mankoi bragol alaa Morierea tal dagore."
};
export var Bold = Template.bind({});
Bold.args = {
  bold: true
};
export var Variant = Template.bind({});
Variant.args = {
  variant: 'subtitle'
};
export var ShouldSetLineHeight = Template.bind({});
ShouldSetLineHeight.args = {
  shouldSetLineHeight: 'subtitle'
};