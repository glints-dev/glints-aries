import styled from 'styled-components';
import { borderRadiusHalf } from '../../../utilities/borderRadius';

import { SkeletonShimmer } from '../../SkeletonStyle';
import { SkeletonImageCircleProps } from './SkeletonImageCircle';
import { SkeletonImageSquareProps } from './SkeletonImageSquare';

export const SkeletonImageContainer = styled.div`
  width: 100%;
`;

export const StyledSkeletonImageCircle = styled.div<SkeletonImageCircleProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${borderRadiusHalf};

  ${SkeletonShimmer}
`;

export const StyledSkeletonImageSquare = styled.div<SkeletonImageSquareProps>`
  width: ${props => props.width};
  height: ${props => props.height};

  ${SkeletonShimmer}
`;
