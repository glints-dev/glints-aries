import styled from 'styled-components';
import { Breakpoints } from '..';
import { borderRadius4 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space4, space8 } from '../utilities/spacing';
import { TagContentProps, TagRemoveContainerProps, TagStyleProps } from './Tag';

export const TagContentStyle = styled.span<TagContentProps>`
  padding-top: ${space4};
  padding-bottom: ${space4};
  padding-left: ${space8};

  ${({ onRemove }: TagContentProps) => {
    return { 'padding-right': onRemove ? 0 : space8 };
  }}
`;

export const TagRemoveContainerStyle = styled.div<TagRemoveContainerProps>`
  padding: ${space4};
  display: flex;
  box-sizing: border-box;
`;

export const TagStyle = styled.div<TagStyleProps>`
  display: inline-flex;
  align-items: center;
  background-color: ${Blue.S08};

  border-radius: ${borderRadius4};
  width: fit-content;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 12px;
  }

  ${({ onRemove, isPressed, isHover }: TagStyleProps) => {
    if (onRemove && isHover) {
      return `
      &:hover {
        border: 1px solid ${isPressed ? Blue.S100 : `${Blue.S100}FA`}; 
        margin: -1px;
      }
      `;
    }
  }}

  & svg:hover {
    cursor: pointer;
    background-color: ${Neutral.B95};
    border-radius: 99px;
  }
`;
