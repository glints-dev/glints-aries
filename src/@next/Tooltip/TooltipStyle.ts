import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { borderRadius2 } from '../utilities/borderRadius';
import { Neutral } from '../utilities/colors';
import { space12, space8 } from '../utilities/spacing';
import { nonCenterArrowSpace, verticalBuffer } from './positionResolverHelper';

const verticalMargin = `${verticalBuffer}px`;
const arrowSize = '6px';
const nonCentralArrowMargin = `${nonCenterArrowSpace}px`;
const background = Neutral.B18;

export const StyledTooltipContainer = styled.div`
  display: inline-block;
  position: relative;

  * {
    display: block;
  }
`;

export const StyledTooltip = styled.div`
  position: absolute;
  text-align: left;
  height: fit-content;
  width: fit-content;
  max-width: 320px;
  border-radius: ${borderRadius2};
  gap: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${space8} ${space12};
  color: ${Neutral.B100};
  background: ${background};
  z-index: 100;
  overflow-wrap: break-word;
  line-height: 1;

  &[data-position='top-left'],
  &[data-position='bottom-left'] {
    transform: translateX(
      calc(100% * -1 + ${arrowSize} + ${nonCentralArrowMargin})
    );
  }
  &[data-position='top-right'],
  &[data-position='bottom-right'] {
    transform: translateX(calc((${arrowSize} + ${nonCentralArrowMargin}) * -1));
  }

  &[data-position='right-middle'] {
    transform: translateX(0) translateY(-50%);
  }

  &[data-position='left-bottom'],
  &[data-position='right-bottom'] {
    transform: translateY(calc((${nonCentralArrowMargin} + ${arrowSize}) * -1));
  }

  &[data-position='left-top'],
  &[data-position='right-top'] {
    transform: translateY(
      calc(100% * -1 + (${nonCentralArrowMargin} + ${arrowSize}))
    );
  }

  &[data-position='bottom-center'],
  &[data-position='bottom-left'],
  &[data-position='bottom-right'] {
    top: calc((100% + ${verticalMargin}));
  }

  &[data-position='left-middle'] {
    transform: translateX(0) translateY(-50%);
  }

  &[data-position='top-center'] .arrow,
  &[data-position='top-left'] .arrow,
  &[data-position='top-right'] .arrow {
    top: 100%;
    border-top-color: ${background};
  }

  &[data-position='top-left'] .arrow,
  &[data-position='bottom-left'] .arrow {
    left: calc(100% - ${arrowSize} - ${nonCentralArrowMargin});
  }
  &[data-position='top-right'] .arrow,
  &[data-position='bottom-right'] .arrow {
    left: calc(${arrowSize} + ${nonCentralArrowMargin});
  }

  &[data-position='right-middle'] .arrow,
  &[data-position='right-top'] .arrow,
  &[data-position='right-bottom'] .arrow {
    top: 50%;
    left: calc(${arrowSize} * -1);
    border-right-color: ${background};
  }

  &[data-position='right-middle'] .arrow {
    transform: translateX(0) translateY(-50%);
  }

  &[data-position='left-bottom'] .arrow,
  &[data-position='right-bottom'] .arrow {
    top: ${nonCentralArrowMargin};
  }

  &[data-position='bottom-center'] .arrow,
  &[data-position='bottom-left'] .arrow,
  &[data-position='bottom-right'] .arrow {
    bottom: 100%;
    border-bottom-color: ${background};
  }

  &[data-position='left-middle'] .arrow,
  &[data-position='left-top'] .arrow,
  &[data-position='left-bottom'] .arrow {
    left: auto;
    right: calc(${arrowSize} * -2);
    border-left-color: ${background};
  }

  &[data-position='left-middle'] .arrow {
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }

  &[data-position='left-top'] .arrow,
  &[data-position='right-top'] .arrow {
    top: unset;
    bottom: ${nonCentralArrowMargin};
  }

  @media (max-width: ${Breakpoints.large}) {
    min-width: 69px;
  }
`;

export const StyledTooltipArrow = styled.div`
  content: ' ';
  left: 50%;
  border: solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-width: ${arrowSize};
  margin-left: calc(${arrowSize} * -1);
`;
