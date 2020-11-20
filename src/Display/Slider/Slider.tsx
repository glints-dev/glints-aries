import * as React from 'react';
import * as ReactDOM from 'react-dom';
import isNil from 'lodash/isNil';

import classNames from 'classnames';

import { SliderContainer, SliderContentWrapper } from './SliderStyle';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SliderItem from './SliderItem';

const Slider = ({
  afterChange,
  children,
  autoplay,
  initialItem,
  className,
  fullContent,
  arrowWhite,
  removeDots,
  containerRef,
}: Props) => {
  const interval = React.useRef<ReturnType<typeof setTimeout>>();
  const privateContainerRef = React.useRef<HTMLDivElement>();
  const sliderContainerRef = containerRef || privateContainerRef;

  const [translateValue, setTranslateValue] = React.useState(0);
  const [screenSize, setScreenSize] = React.useState(0);
  const [index, setIndex] = React.useState(1);

  const previousSlide = () => {
    if (index !== 1) {
      setIndex(index - 1);
      setTranslateValue(translateValue + screenSize);

      if (afterChange !== undefined) {
        afterChange(index - 1);
      }
    }
  };

  const nextSlide = () => {
    const childrenCount = React.Children.toArray(children).filter(
      child => !isNil(child)
    ).length;

    if (index !== childrenCount) {
      setIndex(index + 1);
      setTranslateValue(translateValue - screenSize);

      if (afterChange !== undefined) {
        afterChange(index + 1);
      }
    }
  };

  const getSliderContainerDOMNode = React.useCallback(() => {
    return ReactDOM.findDOMNode(sliderContainerRef.current) as Element;
  }, [sliderContainerRef]);

  const handleDotClick = (idx: number) => {
    setIndex(idx + 1);
    setTranslateValue(-(screenSize * idx));

    if (afterChange !== undefined) {
      afterChange(idx + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 37) {
      previousSlide();
    } else if (e.keyCode === 39) {
      nextSlide();
    }
  };

  React.useEffect(function onMount() {
    const childrenCount = React.Children.toArray(children).filter(
      child => !isNil(child)
    ).length;
    const windowWidth = getSliderContainerDOMNode().getBoundingClientRect()
      .width;

    setScreenSize(windowWidth);

    if (initialItem !== undefined) {
      if (initialItem > 0 && initialItem <= childrenCount) {
        setTranslateValue(-(windowWidth * (initialItem - 1)));
        setIndex(initialItem);
      } else {
        setTranslateValue(0);
        setIndex(1);
      }
    }
  }, []);

  React.useEffect(
    function registerAutoplay() {
      const setSize = () => {
        const windowWidth = getSliderContainerDOMNode().getBoundingClientRect()
          .width;
        setScreenSize(
          getSliderContainerDOMNode().getBoundingClientRect().width
        );
        setTranslateValue(-(windowWidth * (index - 1)));
      };

      const childrenCount = React.Children.toArray(children).filter(
        child => !isNil(child)
      ).length;
      if (autoplay) {
        interval.current = setInterval(() => {
          if (index != childrenCount) {
            setIndex(prevIndex => prevIndex + 1);
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
    },
    [autoplay, children, index, screenSize, getSliderContainerDOMNode]
  );

  React.useEffect(
    function receiveProps() {
      if (initialItem === undefined) return;
      const windowWidth = getSliderContainerDOMNode().getBoundingClientRect()
        .width;

      setTranslateValue(-(windowWidth * (initialItem - 1)));
      setIndex(initialItem);
    },
    [initialItem, getSliderContainerDOMNode]
  );

  const childrenCount = React.Children.toArray(children).filter(
    child => !isNil(child)
  ).length;

  return (
    <SliderContainer
      ref={sliderContainerRef}
      className={classNames('aries-slider', className)}
      onKeyDown={handleKeyDown}
      fullContent={fullContent}
      tabIndex={0}
    >
      <SliderContentWrapper
        className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s',
        }}
      >
        {children}
      </SliderContentWrapper>
      <LeftArrow
        previousSlide={previousSlide}
        index={index}
        arrowWhite={arrowWhite}
      />
      <RightArrow
        nextSlide={nextSlide}
        index={index}
        limit={childrenCount}
        arrowWhite={arrowWhite}
      />
      {!removeDots && (
        <ul>
          {React.Children.map(children, (data, idx) => {
            if (isNil(data)) {
              return null;
            }
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                className={idx + 1 === index ? 'active' : null}
                onClick={() => handleDotClick(idx)}
                key={idx}
              ></li>
            );
          })}
        </ul>
      )}
    </SliderContainer>
  );
};

Slider.Item = SliderItem;

export interface Props {
  children: React.ReactNode;
  className?: string;
  initialItem?: number;
  fullContent?: boolean;
  arrowWhite?: boolean;
  removeDots?: boolean;
  afterChange?: Function;
  autoplay?: boolean;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export default Slider;
