"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Slider = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SliderStyle = require("./SliderStyle");

var _LeftArrow = _interopRequireDefault(require("./LeftArrow"));

var _RightArrow = _interopRequireDefault(require("./RightArrow"));

var _SliderItem = _interopRequireDefault(require("./SliderItem"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Slider = function Slider(_ref) {
  var afterChange = _ref.afterChange,
      children = _ref.children,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? false : _ref$autoplay,
      initialItem = _ref.initialItem,
      className = _ref.className,
      _ref$fullContent = _ref.fullContent,
      fullContent = _ref$fullContent === void 0 ? false : _ref$fullContent,
      _ref$arrowWhite = _ref.arrowWhite,
      arrowWhite = _ref$arrowWhite === void 0 ? false : _ref$arrowWhite,
      _ref$removeDots = _ref.removeDots,
      removeDots = _ref$removeDots === void 0 ? false : _ref$removeDots,
      renderLeftIcon = _ref.renderLeftIcon,
      renderRightIcon = _ref.renderRightIcon,
      containerRef = _ref.containerRef;
  var interval = React.useRef();
  var privateContainerRef = React.useRef();
  var sliderContainerRef = containerRef || privateContainerRef;

  var _React$useState = React.useState(0),
      translateValue = _React$useState[0],
      setTranslateValue = _React$useState[1];

  var _React$useState2 = React.useState(0),
      screenSize = _React$useState2[0],
      setScreenSize = _React$useState2[1];

  var _React$useState3 = React.useState(1),
      index = _React$useState3[0],
      setIndex = _React$useState3[1];

  var previousSlide = function previousSlide() {
    if (index !== 1) {
      setIndex(index - 1);
      setTranslateValue(translateValue + screenSize);

      if (afterChange !== undefined) {
        afterChange(index - 1);
      }
    }
  };

  var nextSlide = function nextSlide() {
    var childrenCount = React.Children.toArray(children).filter(function (child) {
      return !(0, _isNil["default"])(child);
    }).length;

    if (index !== childrenCount) {
      setIndex(index + 1);
      setTranslateValue(translateValue - screenSize);

      if (afterChange !== undefined) {
        afterChange(index + 1);
      }
    }
  };

  var getSliderContainerDOMNode = React.useCallback(function () {
    return ReactDOM.findDOMNode(sliderContainerRef.current);
  }, [sliderContainerRef]);

  var handleDotClick = function handleDotClick(idx) {
    setIndex(idx + 1);
    setTranslateValue(-(screenSize * idx));

    if (afterChange !== undefined) {
      afterChange(idx + 1);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 37) {
      previousSlide();
    } else if (e.keyCode === 39) {
      nextSlide();
    }
  };

  React.useEffect(function onMount() {
    var childrenCount = React.Children.toArray(children).filter(function (child) {
      return !(0, _isNil["default"])(child);
    }).length;
    var windowWidth = getSliderContainerDOMNode().getBoundingClientRect().width;
    setScreenSize(windowWidth);

    if (initialItem !== undefined) {
      if (initialItem > 0 && initialItem <= childrenCount) {
        setTranslateValue(-(windowWidth * (initialItem - 1)));
        setIndex(initialItem);
      } else {
        setTranslateValue(0);
        setIndex(1);
      }
    } // Disabling this warning because we want to preserver some legacy
    // behaviour here.
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  React.useEffect(function registerAutoplay() {
    var setSize = function setSize() {
      var windowWidth = getSliderContainerDOMNode().getBoundingClientRect().width;
      setScreenSize(getSliderContainerDOMNode().getBoundingClientRect().width);
      setTranslateValue(-(windowWidth * (index - 1)));
    };

    var childrenCount = React.Children.toArray(children).filter(function (child) {
      return !(0, _isNil["default"])(child);
    }).length;

    if (autoplay) {
      interval.current = setInterval(function () {
        if (index != childrenCount) {
          setIndex(function (prevIndex) {
            return prevIndex + 1;
          });
          setTranslateValue(-(screenSize * index));
        } else {
          setIndex(1);
          setTranslateValue(0);
        }
      }, 6000);
    }

    window.addEventListener('resize', setSize);
    return function unregisterAutoplay() {
      window.removeEventListener('resize', setSize);
      clearInterval(interval.current);
    };
  }, [autoplay, children, index, screenSize, getSliderContainerDOMNode]);
  React.useEffect(function receiveProps() {
    if (initialItem === undefined) return;
    var windowWidth = getSliderContainerDOMNode().getBoundingClientRect().width;
    setTranslateValue(-(windowWidth * (initialItem - 1)));
    setIndex(initialItem);
  }, [initialItem, getSliderContainerDOMNode]);
  var childrenCount = React.Children.toArray(children).filter(function (child) {
    return !(0, _isNil["default"])(child);
  }).length;
  return /*#__PURE__*/React.createElement(_SliderStyle.SliderContainer, {
    ref: sliderContainerRef,
    className: (0, _classnames["default"])('aries-slider', className),
    onKeyDown: handleKeyDown,
    fullContent: fullContent,
    tabIndex: 0,
    "data-testid": "slider"
  }, /*#__PURE__*/React.createElement(_SliderStyle.SliderContentWrapper, {
    className: "slider-wrapper",
    style: {
      transform: "translateX(" + translateValue + "px)",
      transition: 'transform ease-out 0.45s'
    }
  }, children), /*#__PURE__*/React.createElement(_LeftArrow["default"], {
    previousSlide: previousSlide,
    index: index,
    arrowWhite: arrowWhite,
    renderLeftIcon: renderLeftIcon
  }), /*#__PURE__*/React.createElement(_RightArrow["default"], {
    nextSlide: nextSlide,
    index: index,
    limit: childrenCount,
    arrowWhite: arrowWhite,
    renderRightIcon: renderRightIcon
  }), !removeDots && /*#__PURE__*/React.createElement(_SliderStyle.NavigationContainer, null, React.Children.map(children, function (data, idx) {
    if ((0, _isNil["default"])(data)) {
      return null;
    }

    return /*#__PURE__*/React.createElement(_SliderStyle.NavigationItem, {
      className: idx + 1 === index ? 'active' : null,
      onClick: function onClick() {
        return handleDotClick(idx);
      },
      key: idx
    });
  })));
};

exports.Slider = Slider;
Slider.Item = _SliderItem["default"];
var _default = Slider;
exports["default"] = _default;