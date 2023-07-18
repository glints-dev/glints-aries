import styled from 'styled-components';
import { Breakpoints } from '..';
import { borderRadius4, borderRadiusHalf } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space4, space8 } from '../utilities/spacing';
import { TagContentProps, TagProps, TagRemoveContainerProps } from './Tag';

export const TagContentStyle = styled.span<TagContentProps>`
  padding: ${space4} ${space8};
  white-space: nowrap;

  transform: translateY(1px);

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
  border: 0;
  border-radius: ${borderRadius4};
  width: fit-content;
  padding: 0;

  &[data-clickable='true'] {
    cursor: pointer;

    &:hover {
      outline: 1px solid ${Blue.S100}E6;
    }

    &:active {
      outline: 1px solid ${Blue.S100};
    }

    &:focus-visible {
      outline: 1px solid ${Blue.S100};
      box-shadow:
        0px 0px 0px 2px ${Neutral.B100},
        0px 0px 0px 4px ${Blue.S54};
    }

    &[data-disabled='true'] {
      cursor: not-allowed;
      outline: none;
      background-color: ${Neutral.B95};
      &:focus-visible {
        outline: none;
        box-shadow: none;
      }
    }
  }

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
