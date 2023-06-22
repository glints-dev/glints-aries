import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Blue, Neutral, Red } from '../utilities/colors';

export const StyledInvisibleInput = styled.input`
  display: none;
`;

export const StyledUploadContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: ${Neutral.B99};
  border: 1px dashed ${Neutral.B68};
  border-radius: 2px;

  :hover {
    background-color: ${Neutral.B95};
  }

  &[data-type='initial'] {
    cursor: pointer;
  }
  &[data-type='image'] {
    border: none;
  }
  &[data-type='loading'] {
    background-color: ${Neutral.B95};
  }
  &[data-error='true'] {
    border: 1px dashed ${Red.B93};
  }
`;

export const StyledTextContainer = styled.div`
  position: absolute;
  top: 46.5px;
  left: 50%;
  transform: translateX(-50%);
  color: ${Neutral.B18};
`;

export const StyledIconContainer = styled.div`
  position: absolute;
  top: 12.5px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  svg {
    fill: ${Neutral.B40};
    color: ${Neutral.B40};
    height: 24px;
    width: 24px;
  }

  &[data-type='loading'] {
    top: 17.5px;
    svg {
      fill: ${Blue.S99};
      height: 18px;
      width: 18px;
    }
  }
`;

export const StyledUploadedImage = styled.img<{
  objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}>`
  position: absolute;
  height: 80px;
  width: 80px;
  z-index: 1;
  border: 1px solid ${Neutral.B68};
  border-radius: 2px;
  object-fit: ${props => props.objectFit};
`;

export const StyledDeleteButtonContainer = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 4px;

  cursor: pointer;
  z-index: 3;

  @media (max-width: ${Breakpoints.large}) {
    height: 32px;
    width: 32px;
    left: 0px;
    bottom: 0px;
  }
`;

export const StyledDeleteIconContainer = styled.div`
  position: absolute;
  height: 24px;
  width: 24px;
  left: 0px;
  bottom: 0px;

  background-color: ${Neutral.B100};
  border: 1px solid ${Neutral.B68};
  border-radius: 50%;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 16px;
    width: 16px;
    fill: ${Neutral.B40};
  }

  @media (max-width: ${Breakpoints.large}) {
    left: 4px;
    bottom: 4px;
  }
`;

export const StyledErrorContainer = styled.div`
  position: relative;
`;

export const StyledErrorIconContainer = styled.div`
  position: absolute;
  top: 4px;

  svg {
    fill: ${Red.B93};
    height: 20px;
    width: 20px;
  }
`;

export const StyledErrorTextContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 24px;
  color: ${Red.B93};
`;
