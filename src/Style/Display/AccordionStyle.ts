import styled, { css } from 'styled-components';

import { SecondaryColor, Greyscale } from '../../Utils/Colors';
import { IconPosition } from '../../Display/Accordion/Accordion';

const iconSize = 15;
const iconMargin = 30;
const offsetIcon = iconSize + iconMargin;
const transitionTiming = '0.24s';

export const PanelWrapper = styled.div`
  border-top: solid 1px ${Greyscale.lightgrey};
  outline: none;
`;

export const Container = styled.div`
  ${/* sc-selector */ PanelWrapper}:first-child {
    border-top: none;
  }
`;

export const IconLabelWrapper = styled.div<IconLabelWrapper>`
  position: relative;
  display: flex;
  justify-content: ${({ position }) =>
    position === 'left' ? 'flex-start' : 'space-between'};
  margin-top: 30px;
  padding-bottom: 30px;
  cursor: pointer;
  outline: none;
  transition: ${({ active }) =>
    active ? 'none' : `padding-bottom ${transitionTiming} ease-in-out`};

  &:hover {
    color: ${SecondaryColor.actionblue};
    svg {
      fill: ${SecondaryColor.actionblue};
    }
  }
`;

interface IconLabelWrapper {
  active: boolean;
  position: IconPosition;
}

export const ContentWrapper = styled.div<ContentWrapper>`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  max-height: ${({ active }) => (active ? '100rem' : '0')};
  transition: all ${transitionTiming} ease-in-out;
`;

interface ContentWrapper {
  active: boolean;
}

export const Content = styled.div<Content>`
  margin-left: ${({ position }) =>
    position === 'left' ? `${offsetIcon}px` : '0'};
  margin-right: ${({ position }) =>
    position === 'right' ? `${offsetIcon}px` : '0'};
  padding-bottom: 30px;
  cursor: default;
`;

interface Content {
  position: IconPosition;
}

export const Label = styled.div`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4em;
`;

export const IconWrapper = styled.div<IconWrapper>`
  display: flex;
  align-items: center;

  svg {
    width: ${`${iconSize}px`};
    height: ${`${iconSize}px`};
  }

  ${({ position, active }) => {
    if (position === 'right') {
      return css`
        transform: ${active ? 'rotate(180deg)' : 'none'};
        transition: transform ${transitionTiming};
      `;
    }
    return css`
      margin-right: ${`${iconMargin}px`};
    `;
  }}
`;

interface IconWrapper {
  active: boolean;
  position: IconPosition;
}
