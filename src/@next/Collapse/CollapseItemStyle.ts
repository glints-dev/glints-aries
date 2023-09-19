import styled from 'styled-components';

import { subtitle2 } from '../Typography/TypographyStyles';
import { Neutral } from '../utilities/colors';
import { space4, space8 } from '../utilities/spacing';

const ANIMATION_DURATION = '200ms';

export const CollapseItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${space4};
  padding: ${space8};

  cursor: pointer;
  background-color: ${Neutral.B100};
  border-bottom: 1px solid ${Neutral.B85};

  svg {
    height: 20px;
    width: 20px;
    fill: ${Neutral.B40};
  }

  &[data-disabled='true'] {
    cursor: not-allowed;

    svg {
      fill: ${Neutral.B85};
    }
  }
`;

export const RightHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${space4};
  margin-left: auto;
`;

export const CollapseItemContent = styled.div<{ isCollapsed: boolean }>`
  display: grid;
  grid-template-rows: ${props => (props.isCollapsed ? '0fr' : '1fr')};

  transition: all ${ANIMATION_DURATION} ease-in-out;
  opacity: ${props => (props.isCollapsed ? 0 : 1)};

  width: 100%;
  background-color: ${Neutral.B99};
`;

export const CollapseContentWrapper = styled.div`
  overflow: hidden;
`;

export const CollapseContent = styled.div`
  padding: ${space8};
  border-bottom: 1px solid ${Neutral.B85};
  ${subtitle2}
`;

export const IndicatorIconWrapper = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    transform: rotate(${props => (props.isCollapsed ? '0deg' : '90deg')});
    transition: transform ${ANIMATION_DURATION} ease-in-out;
  }

  &[data-anticlockwise='true'] {
    svg {
      transform: rotate(${props => (props.isCollapsed ? '0deg' : '-90deg')});
    }
  }
`;
