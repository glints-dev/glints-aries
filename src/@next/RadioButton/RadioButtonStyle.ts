import styled from 'styled-components';
import { Breakpoints, Colors } from '..';
import { space4, space8 } from '../utilities/spacing';
import { borderRadiusHalf } from '../utilities/borderRadius';

export const RadioButtonWrapper = styled.label`
  display: flex;
  align-items: flex-start;
  gap: ${space8};
  padding: ${space4} 0;
`;

export const RadioButtonInput = styled.input`
  cursor: pointer;
  appearance: none;
  margin: 0;
  width: 18px;
  height: 18px;
  border: 2px solid ${Colors.Neutral.B68};
  border-radius: ${borderRadiusHalf};
  transform: translateY(1.5px);

  ::after {
    content: '';
    display: block;
    border-radius: ${borderRadiusHalf};
    width: 8px;
    height: 8px;
    margin: 3px;
  }

  @media (min-width: ${Breakpoints.large}) {
    width: 22px;
    height: 22px;
    transform: none;
    ::after {
      width: 10px;
      height: 10px;
      margin: ${space4};
    }
  }

  :hover {
    border-color: ${Colors.Neutral.B68};
  }

  :focus-visible {
    box-shadow:
      0px 0px 0px 1px ${Colors.Neutral.B100},
      0px 0px 0px 3px ${Colors.Blue.S54};
    outline: none;
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${Colors.Neutral.B95};
    border-color: ${Colors.Neutral.B85};
  }

  :checked {
    border-color: ${Colors.Blue.S99};

    ::after {
      background-color: ${Colors.Blue.S99};
    }

    :disabled {
      background-color: ${Colors.Neutral.B95};
      border-color: ${Colors.Neutral.B85};

      ::after {
        background-color: ${Colors.Neutral.B85};
      }
    }
  }
`;

export const LabelWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${space4};

  &[data-disabled='true'] {
    span {
      color: ${Colors.Neutral.B85};
    }
    cursor: not-allowed;
  }
`;
