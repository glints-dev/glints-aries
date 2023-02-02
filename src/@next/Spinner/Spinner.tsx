import React from 'react';
import styled from 'styled-components';
import { Icon, IconProps } from '../Icon';

export type SpinnerProps = Omit<IconProps, 'name'>;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  @keyframes p-keyframes-spin {
    to {
      transform: rotate(1turn);
    }
  }
  svg {
    animation: p-keyframes-spin 800ms linear infinite;
  }
`;

export const Spinner = (props: SpinnerProps) => (
  <StyledWrapper className="spinner-container">
    <Icon name="ri-loader" {...props} />
  </StyledWrapper>
);
