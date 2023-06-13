import styled from 'styled-components';
import { borderRadius4 } from '../utilities/borderRadius';
import { Neutral, Red } from '../utilities/colors';
import { body1 as typographyBody1 } from '../Typography/TypographyStyles';

interface TextAreaProp {
  width: string;
}

export const StyledTextAreaContainer = styled.div<TextAreaProp>`
  position: relative;
  width: ${props => props.width};

  border: 1px solid ${Neutral.B68};
  border-radius: ${borderRadius4};
  padding: 8px 12px 25px 12px;
  cursor: text;

  &:not([data-has-counter='true']) {
    padding-bottom: 8px;
  }

  &[data-focus='true'] {
    outline: none;
    box-shadow: 0px 0px 0px 1px ${Neutral.B100}, 0px 0px 0px 3px #6ac9ec;
  }

  &[data-error='true'] {
    border: 1px solid ${Red.B93};

    &[data-focus='true'] {
      box-shadow: none;
    }
  }

  &[data-disabled='true'] {
    border: 1px solid ${Neutral.B85};
    background: ${Neutral.B95};
  }
`;

export const StyledTextArea = styled.textarea<TextAreaProp>`
  background: ${Neutral.B100};
  box-sizing: border-box;
  border: none;

  ${typographyBody1}

  color: ${Neutral.B18};
  resize: none;
  width: 100%;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Neutral.B68};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${Neutral.B40};
  }

  &::placeholder {
    color: ${Neutral.B40};
  }

  &:focus {
    outline: none;
  }

  :disabled {
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

  &[data-error='true'] {
    color: ${Red.B93};
  }

  &[data-disabled='true'] {
    color: ${Neutral.B85};
  }
`;
