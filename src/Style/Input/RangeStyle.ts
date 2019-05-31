import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const RangeContainer = styled.input<RangeContainerProps>`
  position: relative;
  -webkit-appearance: none;
  outline: none;
  background: ${SecondaryColor.lighterblack};
  height: .4rem;
  width: ${({ block }) => block && '100%'};
  border-radius: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${SecondaryColor.white};
    border: 1px solid ${SecondaryColor.lightgrey};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${SecondaryColor.white};
    border: 1px solid ${SecondaryColor.lightgrey};
    cursor: pointer;
  }

  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: ${SecondaryColor.white};
    border: 1px solid ${SecondaryColor.lightgrey};
    border-radius: 5px;
    cursor: pointer;
  }
`;

interface RangeContainerProps {
  block?: boolean;
}
