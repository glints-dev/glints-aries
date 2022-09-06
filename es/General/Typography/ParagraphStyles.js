var _PARAGRAPH_FONT_SIZES, _PARAGRAPH_LINE_HEIGH;

import styled from 'styled-components';
export var PARAGRAPH_VARIANTS = {
  subtitle: 'subtitle',
  regular: 'regular',
  caption: 'caption',
  smallest: 'smallest'
};
export var PARAGRAPH_FONT_SIZES = (_PARAGRAPH_FONT_SIZES = {}, _PARAGRAPH_FONT_SIZES[PARAGRAPH_VARIANTS.subtitle] = 18, _PARAGRAPH_FONT_SIZES[PARAGRAPH_VARIANTS.regular] = 16, _PARAGRAPH_FONT_SIZES[PARAGRAPH_VARIANTS.caption] = 14, _PARAGRAPH_FONT_SIZES[PARAGRAPH_VARIANTS.smallest] = 12, _PARAGRAPH_FONT_SIZES);
export var PARAGRAPH_LINE_HEIGHTS = (_PARAGRAPH_LINE_HEIGH = {}, _PARAGRAPH_LINE_HEIGH[PARAGRAPH_VARIANTS.subtitle] = 30.6, _PARAGRAPH_LINE_HEIGH[PARAGRAPH_VARIANTS.regular] = 27.2, _PARAGRAPH_LINE_HEIGH[PARAGRAPH_VARIANTS.caption] = 23.8, _PARAGRAPH_LINE_HEIGH[PARAGRAPH_VARIANTS.smallest] = 20.4, _PARAGRAPH_LINE_HEIGH);
export var Paragraph = styled.p.withConfig({
  displayName: "ParagraphStyles__Paragraph",
  componentId: "sc-1w5f8q5-0"
})(["margin:0;font-size:", "px;line-height:", ";font-weight:", ";font-stretch:normal;font-style:normal;letter-spacing:normal;color:", ";", ""], function (props) {
  return PARAGRAPH_FONT_SIZES[props.variant];
}, function (props) {
  return props.shouldSetLineHeight ? PARAGRAPH_LINE_HEIGHTS[props.variant] + "px" : 'normal';
}, function (props) {
  return props.bold ? 'bold' : 'normal';
}, function (props) {
  return props.color;
}, function (props) {
  if (props.ellipsis) {
    return "\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      ";
  }
});