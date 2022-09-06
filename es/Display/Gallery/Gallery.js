/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import Modal from '../../Display/Modal';
import Slider from '../../Display/Slider';
import { GalleryContainer, GalleryItemWrapper, GalleryItem, GalleryImageWrapper, GalleryThumbnailWrapper } from './GalleryStyle';

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
  return /*#__PURE__*/React.createElement(GalleryContainer, {
    className: "aries-gallery"
  }, /*#__PURE__*/React.createElement(GalleryItemWrapper, {
    className: "gallery-wrapper"
  }, React.Children.toArray(children).slice(0, imagesDisplayed).map(function (data, index) {
    return /*#__PURE__*/React.createElement(GalleryItem, {
      className: "gallery-item",
      key: data.props.src + "_" + index,
      imageLeft: imageLeft,
      onClick: function onClick() {
        return handleClick(index);
      }
    }, /*#__PURE__*/React.cloneElement(data, {
      alt: index.toString(10)
    }));
  })), /*#__PURE__*/React.createElement(Modal, {
    isVisible: visible,
    onClose: closeModal,
    hideContentArea: true,
    removeAnimation: true
  }, /*#__PURE__*/React.createElement(Slider, {
    initialItem: currentIndex + 1,
    arrowWhite: true,
    removeDots: true,
    afterChange: getCurrentIndex,
    containerRef: sliderRef
  }, React.Children.map(children, function (data, index) {
    return /*#__PURE__*/React.createElement(Slider.Item, {
      key: data.props.src + "_" + index
    }, /*#__PURE__*/React.createElement(GalleryImageWrapper, {
      role: "banner",
      tabIndex: 0
    }, /*#__PURE__*/React.cloneElement(data, {
      alt: index.toString(10)
    })));
  })), /*#__PURE__*/React.createElement(GalleryThumbnailWrapper, null, React.Children.map(children, function (data, index) {
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

export default Gallery;