import styled, { keyframes } from 'styled-components';
import { SecondaryColor } from '../Colors';

const spinning = keyframes`
  from {
    stroke-dashoffset: 282.6;
  }

  to {
    stroke-dashoffset: ${props => props.progress};
  }
`;

export const ProgressContent = styled.div`
  position: relative;
  outline: none;
`;

export const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  background: transparent;
  z-index: 2;

  &:focus {
    outline: none;
  }

  &:focus > ${ProgressContent} {
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 1em;
    left: 1em;
    width: 7.2em;
    height: 7.2em;
    border-radius: 50%;
    background: ${SecondaryColor.whitesmoke};
    z-index: -1;
  }

  svg {
    transform: rotate(-90deg);

    .progress-circle__value {
      stroke-dasharray: 282.6;
      stroke-dashoffset: ${props => props.progress};
      animation: ${spinning} 1s ease-in-out;
    }
  }
`;

export const ProgressLabelWrapper = styled.label`
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;
  line-height: 1;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  margin: 0;
  font-size: 1.5em;
  font-weight: 900;

  p {
    margin: 0;
    margin-top: .6em;
    font-size: .5em;
    font-weight: 500;
  }
`;
