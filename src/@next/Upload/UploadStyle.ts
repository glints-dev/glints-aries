import styled from 'styled-components';
import { Neutral } from '../utilities/colors';

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
  &[data-type='non-image'] {
    border: 1px solid ${Neutral.B68};
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
  left: 28px;
  cursor: pointer;

  svg {
    fill: ${Neutral.B40};
    color: ${Neutral.B40};
    height: 24px;
    width: 24px;
  }
`;

export const StyledUploadedImage = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
  z-index: 1;
  border: 1px solid ${Neutral.B68};
  border-radius: 2px;
`;

export const StyledUploadedHoverContainer = styled.div`
  position: absolute;
  height: 80px;
  width: 80px;
  z-index: 2;
  background-color: rgb(71, 71, 71);
  opacity: 0.7;
`;

export const StyledEditIconContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 16px;
  z-index: 3;
  cursor: pointer;

  svg {
    fill: ${Neutral.B100};
    height: 16px;
    width: 16px;
  }
`;

export const StyledDeleteIconContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 48px;
  z-index: 3;
  cursor: pointer;

  svg {
    fill: ${Neutral.B100};
    height: 16px;
    width: 16px;
  }
`;

export const StyledFileNameContainer = styled.div`
  position: absolute;
  top: 48.5px;
  left: 8px;
  width: 64px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
