import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isNil } from 'lodash';

import classNames from 'classnames';

import { SliderContainer, SliderContentWrapper } from './SliderStyle';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SliderItem from './SliderItem';

/**
 * Custom react hook that utilizes an internal state to trigger re-renders when
 * the exported state update function is called.
 */
const useForceUpdate = () => {
  const [, setIndex] = React.useState(0);
  return () => setIndex(index => index + 1);
};

const Slider = ({
  afterChange,
  children,
  autoplay,
  initialItem,
  className,
  fullContent,
  arrowWhite,
  removeDots,
}: Props) => {
  const interval = React.useRef<ReturnType<typeof setTimeout>>();
  const sliderContainerRef = React.useRef<HTMLDivElement>();

  const childrenCount = React.Children.toArray(children).filter(
    child => !isNil(child)
  ).length;

  if (initialItem && (initialItem < 0 || initialItem >= childrenCount)) {
    throw new Error(
      `initialItem ${initialItem} is out of bounds (min 0, max ${childrenCount -
        1})`
    );
  }

  const [index, setIndex] = React.useState<number>(initialItem || 0);

  const setSlide = React.useCallback(
    (index: number, shouldLoop = false) => {
      setIndex(currentIndex => {
        if (index < 0) {
          index = 0;
        }
        if (index >= childrenCount) {
          index = shouldLoop ? 0 : childrenCount - 1;
        }
        if (afterChange !== undefined && currentIndex !== index) {
          afterChange(index);
        }
        return index;
      });
    },
    [childrenCount, afterChange]
  );

  const previousSlide = () => {
    setSlide(index - 1);
  };

  const nextSlide = React.useCallback(
    (loop = false) => {
      setSlide(index + 1, loop);
    },
    [index, setSlide]
  );

  const handleDotClick = (index: number) => {
    setSlide(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 37) {
      previousSlide();
    } else if (e.keyCode === 39) {
      nextSlide();
    }
  };

  React.useEffect(
    function updateAutoplay() {
      if (autoplay) {
        interval.current = setInterval(() => nextSlide(true), 6000);
      }
      return () => {
        clearInterval(interval.current);
      };
    },
    [autoplay, nextSlide]
  );

  const forceUpdate = useForceUpdate();

  React.useEffect(
    function registerResizeHandler() {
      window.addEventListener('resize', forceUpdate);
      return () => {
        window.removeEventListener('resize', forceUpdate);
      };
    },
    [forceUpdate]
  );

  const sliderContainerElement = ReactDOM.findDOMNode(
    sliderContainerRef.current
  ) as Element;
  const windowWidth = sliderContainerElement
    ? sliderContainerElement.getBoundingClientRect().width
    : 0;
  const translateValue = -(windowWidth * index);

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
        nextSlide={() => nextSlide(false)}
        index={index}
        limit={childrenCount - 1}
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
                className={idx === index ? 'active' : null}
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
}

export default Slider;
