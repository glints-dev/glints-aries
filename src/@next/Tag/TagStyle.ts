import styled from 'styled-components';
import { Breakpoints } from '..';
import { borderRadius4, borderRadiusHalf } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space4, space8 } from '../utilities/spacing';
import { TagContentProps, TagProps, TagRemoveContainerProps } from './Tag';

export const TagContentStyle = styled.span<TagContentProps>`
  padding: ${space4} ${space8};

  &[data-removeable='true'] {
    padding-right: 0;
  }
`;

export const TagRemoveContainerStyle = styled.div<TagRemoveContainerProps>`
  padding: ${space4};
  display: flex;
`;

export const TagIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus-visible {
    margin: -2px;
    outline: none;
    border: 2px solid ${Blue.S100};
    border-radius: ${borderRadius4};
  }
`;

export const TagStyle = styled.div<TagProps>`
  display: inline-flex;
  align-items: center;
  background-color: ${Blue.S08};

  border-radius: ${borderRadius4};
  width: fit-content;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 12px;
  }

  & svg {
    padding: 0;
  }

  & svg:hover {
    cursor: pointer;
    background-color: ${Neutral.B95};
    border-radius: ${borderRadiusHalf};
  }

  & svg:active {
    cursor: pointer;
    background-color: ${Neutral.B40};
    fill: ${Neutral.B100};
    border-radius: ${borderRadiusHalf};
  }
`;
