import styled from 'styled-components';
import { Breakpoints } from '../../..';

export const LoadingStateContainer = styled.td`
  height: 480px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 16px;

  p {
    margin: 0;
  }

  @media (max-width: ${Breakpoints.large}) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
