import * as React from 'react';
import * as ReactDOM from 'react-dom';
import isNil from 'lodash/isNil';
import classNames from 'classnames';
import { SliderContainer, SliderContentWrapper, NavigationContainer, NavigationItem } from './SliderStyle';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SliderItem from './SliderItem';
export var Slider = function Slider(_ref) {
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
      return !isNil(child);
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
      return !isNil(child);
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
      return !isNil(child);
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
    return !isNil(child);
  }).length;
  return /*#__PURE__*/React.createElement(SliderContainer, {
    ref: sliderContainerRef,
    className: classNames('aries-slider', className),
    onKeyDown: handleKeyDown,
    fullContent: fullContent,
    tabIndex: 0,
    "data-testid": "slider"
  }, /*#__PURE__*/React.createElement(SliderContentWrapper, {
    className: "slider-wrapper",
    style: {
      transform: "translateX(" + translateValue + "px)",
      transition: 'transform ease-out 0.45s'
    }
  }, children), /*#__PURE__*/React.createElement(LeftArrow, {
    previousSlide: previousSlide,
    index: index,
    arrowWhite: arrowWhite,
    renderLeftIcon: renderLeftIcon
  }), /*#__PURE__*/React.createElement(RightArrow, {
    nextSlide: nextSlide,
    index: index,
    limit: childrenCount,
    arrowWhite: arrowWhite,
    renderRightIcon: renderRightIcon
  }), !removeDots && /*#__PURE__*/React.createElement(NavigationContainer, null, React.Children.map(children, function (data, idx) {
    if (isNil(data)) {
      return null;
    }

    return /*#__PURE__*/React.createElement(NavigationItem, {
      className: idx + 1 === index ? 'active' : null,
      onClick: function onClick() {
        return handleDotClick(idx);
      },
      key: idx
    });
  })));
};
Slider.Item = SliderItem;
export default Slider;