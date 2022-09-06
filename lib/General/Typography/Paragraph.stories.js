"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Variant = exports.ShouldSetLineHeight = exports.Interactive = exports.Ellipsis = exports.Color = exports.Bold = void 0;

var _react = _interopRequireDefault(require("react"));

var _Paragraph = require("./Paragraph");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _Colors = require("../../Utils/Colors");

var _ParagraphStyles = require("./ParagraphStyles");

_Paragraph.Paragraph.displayName = 'Typography.Paragraph';
var _default = {
  title: 'Typography/Paragraph',
  component: _Paragraph.Paragraph,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    variant: {
      description: Object.values(_ParagraphStyles.PARAGRAPH_VARIANTS).map(function (variant) {
        return variant + " (" + _ParagraphStyles.PARAGRAPH_FONT_SIZES[variant] + "px)";
      }).join(' · ')
    },
    color: {
      control: 'color'
    }
  }
};
exports["default"] = _default;
var defaultText = "Tanya farnuva naar cam utinu en lokirim tanka tel' taurnin. Lirimaerea vedui' il'er Lotesse Shaalth.";

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Paragraph.Paragraph, args, args.children || defaultText);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {};
var Color = Template.bind({});
exports.Color = Color;
Color.args = {
  color: _Colors.PrimaryColor.glintsblue
};
var Ellipsis = Template.bind({});
exports.Ellipsis = Ellipsis;
Ellipsis.args = {
  ellipsis: true,
  children: "'Quel re amrun undome Beikaerea lle auta yeste' Mellonea. Guinahiroo ai' atar diola lle Mith'quessir. Tanya nae sai eina quel undome mani naa tanya nat' loomi en gurth. A! manke naa nae lle tinechor Tarion. Guinahiroo tanya awra! Heruamin Hallaerea. Mani uma lle merna ten' ta toror' taur'ohtarie Iire Cermie. Mankoi bragol alaa Morierea tal dagore."
};
var Bold = Template.bind({});
exports.Bold = Bold;
Bold.args = {
  bold: true
};
var Variant = Template.bind({});
exports.Variant = Variant;
Variant.args = {
  variant: 'subtitle'
};
var ShouldSetLineHeight = Template.bind({});
exports.ShouldSetLineHeight = ShouldSetLineHeight;
ShouldSetLineHeight.args = {
  shouldSetLineHeight: 'subtitle'
};