import styled from 'styled-components';
import { Breakpoints } from '../../..';
import { borderRadius4 } from '../../../utilities/borderRadius';
import { Neutral, Red } from '../../../utilities/colors';
import { NotoSans } from '../../../utilities/fonts';

export const StyledSelect = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  cursor: pointer;
  padding: 0px 8px 0px 12px;
  border: 1px solid ${Neutral.B68};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${borderRadius4};

  color: ${Neutral.B18};
  font-family: ${NotoSans}, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px #ffffff, 0px 0px 0px 3px #6cc9ec;
  }

  &:disabled {
    color: ${Neutral.B85};
    pointer-events: none;
    cursor: default;
  }

  &[data-error='true'] {
    height: 36px;
    border: 1px solid ${Red.B93};
    border-radius: ${borderRadius4};
  }
`;
