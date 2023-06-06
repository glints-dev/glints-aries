import styled from 'styled-components';
import { borderRadius4 } from '../utilities/borderRadius';
import { Neutral, Red } from '../utilities/colors';
import { NotoSans } from '../utilities/fonts';

export const StyledTextAreaContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
`;

export const StyledTextArea = styled.textarea`
  background: ${Neutral.B100};
  box-sizing: border-box;
  border: 1px solid ${Neutral.B68};
  border-radius: ${borderRadius4};
  padding: 8px 0px 25px 8px;

  font-family: ${NotoSans}, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: ${Neutral.B18};
  resize: none;
  width: 100%;
  max-width: 520px;

  ::-webkit-scrollbar {
    width: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Neutral.B68};
    border: 13px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${Neutral.B40};
  }

  &::placeholder {
    color: ${Neutral.B40};
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px ${Neutral.B100}, 0px 0px 0px 3px #6ac9ec;
  }

  &[data-error='true'] {
    border: 1px solid ${Red.B93};

    &:focus {
      box-shadow: none;
    }
  }

  &[data-disabled='true'] {
    border: 1px solid ${Neutral.B85};
    background: ${Neutral.B95};

    ::placeholder {
      color: ${Neutral.B85};
    }
  }
`;

export const StyledWordCountContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 12px;
  color: ${Neutral.B40};

  &[data-disabled='true'] {
    color: ${Neutral.B85};
  }

  &[data-error='true'] {
    color: ${Red.B93};
  }
`;
