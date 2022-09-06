"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("../../Display/Modal"));

var _Slider = _interopRequireDefault(require("../../Display/Slider"));

var _GalleryStyle = require("./GalleryStyle");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/no-array-index-key */
var Gallery = function Gallery(_ref) {
  var _ref$initialVisibilit = _ref.initialVisibility,
      initialVisibility = _ref$initialVisibilit === void 0 ? false : _ref$initialVisibilit,
      children = _ref.children,
      _ref$imagesDisplayed = _ref.imagesDisplayed,
      imagesDisplayed = _ref$imagesDisplayed === void 0 ? 8 : _ref$imagesDisplayed;
  var sliderRef = React.useRef();

  var _React$useState = React.useState(initialVisibility),
      visible = _React$useState[0],
      setVisible = _React$useState[1];

  var _React$useState2 = React.useState(0),
      currentIndex = _React$useState2[0],
      setCurrentIndex = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      imageLeft = _React$useState3[0],
      setImageLeft = _React$useState3[1];

  var closeModal = function closeModal() {
    return setVisible(false);
  };

  var handleClick = function handleClick(index) {
    setVisible(true);
    setCurrentIndex(index);
  };

  var handleClickThumbs = function handleClickThumbs(index) {
    return setCurrentIndex(index);
  };

  var getCurrentIndex = function getCurrentIndex(index) {
    return setCurrentIndex(index - 1);
  };

  React.useEffect(function componentDidMount() {
    if (React.Children.count(children) > imagesDisplayed) setImageLeft(React.Children.count(children) - imagesDisplayed); // Disabling this warning because we want to preserver some legacy
    // behaviour here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(function autoFocus() {
    if (visible && sliderRef.current) sliderRef.current.focus();
  }, [visible]);
  React.useEffect(function checkChildrenType() {
    var hasImage = React.Children.toArray(children).some(function (child) {
      return /*#__PURE__*/React.isValidElement(child) && child.type === 'img';
    });

    if (!hasImage) {
      console.error('Only img components allowed as children.');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return /*#__PURE__*/React.createElement(_GalleryStyle.GalleryContainer, {
    className: "aries-gallery"
  }, /*#__PURE__*/React.createElement(_GalleryStyle.GalleryItemWrapper, {
    className: "gallery-wrapper"
  }, React.Children.toArray(children).slice(0, imagesDisplayed).map(function (data, index) {
    return /*#__PURE__*/React.createElement(_GalleryStyle.GalleryItem, {
      className: "gallery-item",
      key: data.props.src + "_" + index,
      imageLeft: imageLeft,
      onClick: function onClick() {
        return handleClick(index);
      }
    }, /*#__PURE__*/React.cloneElement(data, {
      alt: index.toString(10)
    }));
  })), /*#__PURE__*/React.createElement(_Modal["default"], {
    isVisible: visible,
    onClose: closeModal,
    hideContentArea: true,
    removeAnimation: true
  }, /*#__PURE__*/React.createElement(_Slider["default"], {
    initialItem: currentIndex + 1,
    arrowWhite: true,
    removeDots: true,
    afterChange: getCurrentIndex,
    containerRef: sliderRef
  }, React.Children.map(children, function (data, index) {
    return /*#__PURE__*/React.createElement(_Slider["default"].Item, {
      key: data.props.src + "_" + index
    }, /*#__PURE__*/React.createElement(_GalleryStyle.GalleryImageWrapper, {
      role: "banner",
      tabIndex: 0
    }, /*#__PURE__*/React.cloneElement(data, {
      alt: index.toString(10)
    })));
  })), /*#__PURE__*/React.createElement(_GalleryStyle.GalleryThumbnailWrapper, null, React.Children.map(children, function (data, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: data.props.src + "_" + index,
      onClick: function onClick() {
        return handleClickThumbs(index);
      }
    }, /*#__PURE__*/React.cloneElement(data, {
      className: index === currentIndex ? 'active' : null,
      'data-testid': 'gallery_thumbnail',
      alt: index.toString(10)
    }));
  }))));
};

var _default = Gallery;
exports["default"] = _default;