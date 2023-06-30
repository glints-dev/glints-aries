import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../Icon';
import { Neutral } from '../utilities/colors';
import {
  ArrowsContainer,
  CarouselContainer,
  Indicator,
  IndicatorsContainer,
  ItemsContainer,
  NextArrow,
  PreviousArrow,
  SlideContainer,
} from './CarouselStyle';

export type AspectRatio = {
  width: number;
  height: number;
};

export interface CarouselProps {
  autoRotate?: boolean;
  children: React.ReactNode;
  /** i.e: 16:9 The first number represents the width, and the second number represents the height.
   * `AspectRatio: { width: number, height: number }`
   */
  aspectRatio?: AspectRatio;
  /** sets height of Carousel*/
  height?: string;
  /** sets width of Carousel */
  width?: string;
  indicatorPosition?: 'top' | 'bottom' | 'left' | 'right' | 'outer';
  indicatorType?: 'dot' | 'line' | 'slider';
  /** When to show arrows*/
  showArrow?: 'always' | 'hover' | 'never';
  /** When `autoRotate` is `true`, specify milliseconds until next slide shows */
  duration?: number;
}

export const Carousel = ({
  autoRotate = false,
  children,
  aspectRatio,
  height,
  width,
  indicatorPosition = 'outer',
  indicatorType = 'line',
  duration = 3000,
}: CarouselProps) => {
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hideArrows, setHideArrows] = useState(autoRotate);

  const childrenList = React.Children.toArray(children).filter(child =>
    React.isValidElement(child)
  );
  const childrenLength = childrenList.length;

  const updateActiveIndex = useCallback(
    (index: number) => {
      if (index < 0) {
        setActiveIndex(childrenLength - 1);
        return;
      }

      if (index === childrenLength) {
        setActiveIndex(0);
        return;
      }

      setActiveIndex(index);
    },
    [childrenLength]
  );

  const handlePreviousClick = () => {
    updateActiveIndex(activeIndex - 1);
  };

  const handleNextClick = () => {
    updateActiveIndex(activeIndex + 1);
  };

  const handleMouseEnter = () => {
    if (autoRotate) {
      setHideArrows(false);
      return;
    }
  };

  const handleMouseLeave = () => {
    if (autoRotate) {
      setHideArrows(true);
      return;
    }
  };

  useEffect(() => {
    if (autoRotate) {
      setTimeout(() => {
        updateActiveIndex(activeIndex + 1);
      }, duration);
    }
  }, [activeIndex, autoRotate, updateActiveIndex]);

  return (
    <CarouselContainer
      aspectRatio={
        aspectRatio ? `${aspectRatio?.width}/${aspectRatio?.height}` : null
      }
      height={height}
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SlideContainer
        ref={slideRef}
        aspectRatio={
          aspectRatio ? `${aspectRatio?.width}/${aspectRatio?.height}` : null
        }
        height={height}
        width={width}
      >
        <ItemsContainer activeIndex={activeIndex}>
          {childrenList}
        </ItemsContainer>
      </SlideContainer>
      <ArrowsContainer data-hidden={hideArrows}>
        <PreviousArrow onClick={handlePreviousClick}>
          <Icon name="ri-arrow-m-left-line" fill={Neutral.B40} />
        </PreviousArrow>
        <NextArrow onClick={handleNextClick}>
          <Icon name="ri-arrow-m-right-line" fill={Neutral.B40} />
        </NextArrow>
      </ArrowsContainer>
      <IndicatorsContainer
        indicatorType={indicatorType}
        indicatorPosition={indicatorPosition}
      >
        <div>
          {Array.from(Array(childrenLength).keys()).map((n: number) => {
            const isActive = activeIndex === n;
            return (
              <Indicator
                indicatorType={indicatorType}
                key={`carousel-indicator-${n}`}
                onClick={() => updateActiveIndex(n)}
                className={isActive ? 'active' : null}
              />
            );
          })}
        </div>
      </IndicatorsContainer>
    </CarouselContainer>
  );
};
