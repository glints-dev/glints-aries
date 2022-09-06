import * as React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

var Typography = function Typography(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("article", null, children);
};

Typography.Title = Title;
Typography.Paragraph = Paragraph;
export default Typography;