import styled from 'styled-components';

import * as Breakpoints from '../../../utilities/breakpoints/Breakpoints';
import { borderRadius4 } from '../../../utilities/borderRadius';
import { Neutral, Red } from '../../../utilities/colors';
import { NotoSans } from '../../../utilities/fonts';
import { space8 } from '../../../utilities/spacing';
import { ActivatorSelectProps } from './ActivatorSelect';
import { TextInput } from '../../../TextInput';
import { Tag } from '../../../Tag';
import { Typography } from '../../../Typography';

export const StyledSelect = styled.button<ActivatorSelectProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  cursor: pointer;
  padding: 0px 8px 0px 12px;
  border: 1px solid ${Neutral.B68};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${borderRadius4};
  background: ${Neutral.B100};
  width: ${props => props.width};

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
    box-shadow:
      0px 0px 0px 1px #ffffff,
      0px 0px 0px 3px #6cc9ec;
  }

  &:disabled {
    background: ${Neutral.B95};
    pointer-events: none;
    cursor: default;
    border: 1px solid ${Neutral.B85};
  }

  &[data-error='true'] {
    border: 1px solid ${Red.B93};
    border-radius: ${borderRadius4};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const StyledTag = styled(Tag)`
  height: 28px;
  margin-right: ${space8};
`;

export const StyledTextInput = styled(TextInput)`
  width: ${props => props.width};
`;

export const StyledSelectTypography = styled(Typography)`
  &[data-disabled='true'] {
    color: ${Neutral.B85};
  }
`;
