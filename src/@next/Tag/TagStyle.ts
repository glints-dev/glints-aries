import styled from 'styled-components';
import { Breakpoints } from '..';
import { borderRadius4 } from '../utilities/borderRadius';
import { Blue } from '../utilities/colors';
import { space4, space8 } from '../utilities/spacing';
import { TagProps } from './Tag';

export const TagStyle = styled.div<TagProps>`
  display: inline-flex;
  background-color: ${Blue.S08};
  width: fit-content;
  padding: ${space4} ${space8};
  border-radius: ${borderRadius4};

  @media (max-width: ${Breakpoints.large}) {
    font-size: 12px;
  }
`;
