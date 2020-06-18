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

  // NOTE: The slider is one-indexed. E.g. for three pages, the indices of the
  // are 1, 2 and 3.
  const [index, setIndex] = React.useState<number>(initialItem || 1);

  const childrenCount = React.Children.toArray(children).filter(
    child => !isNil(child)
  ).length;

  const previousSlide = () => {
    if (index !== 1) {
      setIndex(index - 1);
    }
  };

  const nextSlide = React.useCallback(
    (loop = false) => {
      setIndex(index =>
        index === childrenCount ? (loop ? 1 : index) : index + 1
      );
    },
    [childrenCount]
  );

  React.useEffect(
    function callAfterChange() {
      if (afterChange !== undefined) {
        afterChange(index);
      }
    },
    [afterChange, index]
  );

  const handleDotClick = (idx: number) => {
    setIndex(idx + 1);
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
  const translateValue = -(windowWidth * (index - 1));

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
}

export default Slider;
