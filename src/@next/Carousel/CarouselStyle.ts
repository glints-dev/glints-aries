import styled from 'styled-components';
import { borderRadius16, borderRadiusHalf } from '../utilities/borderRadius';
import { Neutral, Yellow } from '../utilities/colors';
import { space4, space8 } from '../utilities/spacing';

import { CarouselProps } from './Carousel';

interface StyledCarouselProps extends Omit<CarouselProps, 'aspectRatio'> {
  aspectRatio?: string;
}

interface ItemsContainerProps {
  activeIndex: number;
}

export const CarouselContainer = styled.div<StyledCarouselProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: ${props => props.aspectRatio};
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const SlideContainer = styled.div<StyledCarouselProps>`
  position: relative;
  display: flex;
  overflow: hidden;
  aspect-ratio: ${props => props.aspectRatio};
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const ItemsContainer = styled.div<ItemsContainerProps>`
  display: flex;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  transition-timing-function: cubic-bezier(0.34, 0.69, 0.1, 1);
  transition-duration: 500ms;
  transform: ${props => `translateX(-${props.activeIndex * 100}%)`};
`;

export const ArrowsContainer = styled.div`
  visibility: visible;
  opacity: 1;
  transition: opacity 0.75s ease;

  button {
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: ${borderRadiusHalf};
    border: none;
    background: ${Neutral.B99};
    opacity: 0.6;
    cursor: pointer;

    &:hover {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  &[data-hidden='true'] {
    visibility: hidden;
    opacity: 0;
  }
`;

export const PreviousArrow = styled.button`
  left: 0;
  margin-left: ${space8};
  top: 50%;
  transform: translateY(-50%);
`;

export const NextArrow = styled.button`
  right: 0;
  margin-right: ${space8};
  top: 50%;
  transform: translateY(-50%);
`;

// use style mapping for indicator type and position
const indicatorPositionStyleMapping = {
  ['top']: ``,
  ['bottom']: ``,
  ['left']: ``,
  ['right']: ``,
  ['outer']: `bottom: -18px`,
};

const indicatorTypeSpaceMapping = {
  ['dot']: ``,
  ['line']: `gap: ${space8};`,
  ['slider']: ``,
};

export const IndicatorsContainer = styled.div<
  Pick<CarouselProps, 'indicatorPosition' | 'indicatorType'>
>`
  display: flex;
  justify-content: center;
  z-index: 2;
  position: absolute;
  width: 100%;

  div {
    display: flex;
    background: rgba(248, 250, 252, 0.6);
    padding: ${space4} ${space8};
    border-radius: 100px;
    ${props => indicatorTypeSpaceMapping[props.indicatorType]}
  }

  ${props => indicatorPositionStyleMapping[props.indicatorPosition]}
`;

const indicatorTypeStyleMapping = {
  ['dot']: ``,
  ['line']: `
    width: 16px;
    height: 6px;
    border-radius: ${borderRadius16};
    background: ${Neutral.B40};
    border: none;
  `,
  ['slider']: ``,
};

export const Indicator = styled.button<Pick<CarouselProps, 'indicatorType'>>`
  cursor: pointer;

  &.active {
    background: ${Yellow.Brand};
  }

  ${props => indicatorTypeStyleMapping[props.indicatorType]}
`;
