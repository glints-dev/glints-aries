import styled from 'styled-components';
import { Neutral } from '../utilities/colors';

export const SkeletonContainer = styled.div``;

export const SkeletonShimmer = `
background: linear-gradient(
  110.76deg,
  ${Neutral.B95} 36.01%,
  rgba(217, 217, 217, 0.24) 47.36%,
  ${Neutral.B95} 57.51%
);
background-size: 400% 100%;
  animation: skeleton-shimmer 1.5s linear infinite;

  @keyframes skeleton-shimmer {
    0% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }
`;
