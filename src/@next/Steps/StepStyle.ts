import styled from 'styled-components';
import { Breakpoints } from '..';
import { space4, space12, space16 } from '../utilities/spacing';
import { Blue, Neutral, Red } from '../utilities/colors';
import { borderRadiusHalf } from '../utilities/borderRadius';

export const StepsContainer = styled.div`
  &[data-orientation='horizontal'] {
    display: flex;
    align-items: center;
    overflow-x: auto;
  }
`;

export const StepItemContainer = styled.div`
  &:last-child > div:last-child {
    display: none;
  }

  &[data-orientation='horizontal'] {
    display: flex;
    align-items: center;
  }
`;

export const StepItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${space12};
  cursor: default;

  &[data-dot='true'] {
    gap: ${space16};
  }

  .step-label {
    white-space: nowrap;
  }
`;

export const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  border-radius: ${borderRadiusHalf};
  flex-shrink: 0;

  svg {
    height: 16px;
    width: 16px;
  }

  &[data-variant='pending'] {
    background-color: ${Neutral.B95};
  }
  &[data-variant='completed'] {
    background-color: ${Blue.S08};
    svg {
      fill: ${Blue.S99};
    }
  }
  &[data-variant='processing'] {
    background-color: ${Blue.S99};
  }
  &[data-variant='error'] {
    background-color: ${Red.B93};
    svg {
      fill: ${Neutral.B100};
    }
  }

  &[data-dot='true'] {
    height: 10px;
    width: 10px;

    > .circle-icon {
      display: none;
    }

    &[data-variant='completed'] {
      background-color: ${Blue.S99};
    }
  }

  @media (max-width: ${Breakpoints.large}) {
    height: 24px;
    width: 24px;
    svg {
      height: 14px;
      width: 14px;
    }
  }
`;

export const VerticalLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${space4} 0;
  height: 64px;
  width: 28px;

  &[data-dot='true'] {
    width: 10px;
  }

  @media (max-width: ${Breakpoints.large}) {
    width: 24px;
  }
`;

export const HorizontalLineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${space12};
  width: 105px;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${Neutral.B85};

  &[data-variant='completed'] {
    background-color: ${Blue.S99};
  }

  &[data-dot='true'] {
    width: 1.5px;
  }
`;

export const HorizontalLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${Neutral.B85};

  &[data-variant='completed'] {
    background-color: ${Blue.S99};
  }
`;
