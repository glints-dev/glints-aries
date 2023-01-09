import React from 'react';
import styled from 'styled-components';
import { Icon, IconProps } from '../Icon';

const StyledWrapper = styled.div`
  @keyframes p-keyframes-spin {
    to {
      transform: rotate(1turn);
    }
  }
  svg {
    animation: p-keyframes-spin 800ms linear infinite;
  }
`;

export const Spinner = (props: Omit<IconProps, 'name'>) => (
  <StyledWrapper className="spinner-container">
    <Icon name="ri-loader" {...props} />
  </StyledWrapper>
);
