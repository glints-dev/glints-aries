import styled, { keyframes } from 'styled-components';
import { SecondaryColor } from '../Colors';

const spinning = keyframes`
  from {
    stroke-dashoffset: 282.6;
  }

  to {
    stroke-dashoffset: ${((props: ProgressContainerProps) => props.progress) as any};
  }
`;

export const ProgressContent = styled.div<ProgressContentProps>`
  position: relative;
  outline: none;
  font-size: ${props => `${props.size}em`};
`;

export const ProgressContainer = styled.div<ProgressContainerProps>`
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
    font-size: ${props => `${props.size}em`};
    background: ${SecondaryColor.whitesmoke};
    z-index: -1;
  }

  > div > svg {
    transform: rotate(-90deg);

    .progress-circle__value {
      stroke-dasharray: 282.6;
      stroke-dashoffset: ${props => props.progress};
      animation: ${spinning} 1s ease-in-out;
    }
  }
`;

interface ProgressContainerProps {
  progress: number;
  size?: number;
}

interface ProgressContentProps {
  size?: number;
}

export const ProgressLabelWrapper = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  text-align: center;
  line-height: 1;
  font-size: inherit;
  transform: translateY(-50%);
`;

export const PercentageCompletion = styled.h1`
  margin: 0;
  font-size: 1.5em;
  font-weight: 900;
`;

export const LabelText = styled.p`
  margin: .6em 0 0;
  font-size: .75em;
  font-weight: 500;
`;
