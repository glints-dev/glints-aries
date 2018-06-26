'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemStyle = require('./../Style/ItemStyle');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function Item(props) {
  var title = props.title,
      url = props.url,
      imgUrl = props.imgUrl,
      isExternal = props.isExternal,
      isReactRouter = props.isReactRouter,
      paddingSize = props.paddingSize,
      subtitle = props.subtitle;

  return _react2.default.createElement(
    _ItemStyle.ItemWrapper,
    { paddingSize: paddingSize },
    _react2.default.createElement(
      _ItemStyle.ItemImgWrapper,
      null,
      _react2.default.createElement('img', { src: imgUrl, alt: '', width: '64', height: '64' })
    ),
    _react2.default.createElement(
      _ItemStyle.ItemContent,
      null,
      _react2.default.createElement(
        'h4',
        null,
        title
      ),
      !isReactRouter && _react2.default.createElement(
        'a',
        { href: url, target: isExternal ? "_blank" : "_self", rel: 'noopener noreferrer' },
        subtitle
      ),
      isReactRouter && _react2.default.createElement(
        _reactRouterDom.Link,
        { to: url },
        subtitle
      )
    )
  );
};


Item.defaultProps = {
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png',
  isExternal: false,
  isReactRouter: false,
  subtitle: 'subtitle',
  title: 'default',
  paddingSize: '0',
  url: '/'
};

//Typecheck goes here
exports.default = Item;