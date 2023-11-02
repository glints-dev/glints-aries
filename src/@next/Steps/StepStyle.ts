import styled from 'styled-components';
import { space4, space12, space16 } from '../utilities/spacing';
import { Breakpoints } from '..';
import { Blue, Neutral, Red } from '../utilities/colors';

export const StepItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${space12};

  @media (max-width: ${Breakpoints.large}) {
    gap: ${space16};
  }
`;

export const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  border-radius: 50%;

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

  @media (max-width: ${Breakpoints.large}) {
    height: 10px;
    width: 10px;

    > div,
    > svg {
      display: none;
    }

    &[data-variant='completed'] {
      background-color: ${Blue.S99};
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

  @media (max-width: ${Breakpoints.large}) {
    width: 10px;
  }
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${Neutral.B85};

  &[data-variant='completed'] {
    background-color: ${Blue.S99};
  }

  @media (max-width: ${Breakpoints.large}) {
    width: 1.5px;
  }
`;
