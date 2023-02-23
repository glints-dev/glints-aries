import React from 'react';
import styled from 'styled-components';
import { NumberInput } from '../NumberInput';
import { borderRadius2 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space4 } from '../utilities/spacing';
import { PageButton, PageButtonProps } from './PageButton';

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const SimplePaginationStyledNav = styled(StyledNav)`
  gap: 4px;
`;

export const StyledPageButton = styled.button<PageButtonProps>`
  cursor: pointer;
  height: 32px;
  min-width: 32px;
  border: 0;
  border-radius: ${borderRadius2};
  padding: ${space4};
  color: ${Neutral.B18};

  &:hover {
    background: ${Neutral.B95};
  }

  &:disabled {
    color: ${Neutral.B85};
  }

  svg {
    fill: ${Neutral.B40};
    width: 24px;
    height: 24px;
  }

  &[data-active='true'] {
    background: ${Blue.S08};
    color: ${Blue.S99};
  }

  &:disabled svg {
    fill: ${Neutral.B85};
  }

  &[data-active='true']:disabled {
    background: ${Neutral.B95};
    color: ${Neutral.B85};
  }
`;

export const StyledSimplePaginationButton = styled(StyledPageButton)`
  pointer-events: none;
`;

export const StyledActiveSimplePaginationButton = styled(
  (props: PageButtonProps) => <PageButton {...props} />
)`
  background: ${Blue.S08};
  color: ${Blue.S99};

  &:hover {
    background: ${Neutral.B95};
    color: ${Neutral.B18};
  }
`;

export const StyledSimplePaginationInput = styled(NumberInput)`
  padding: 0;
  text-align: center;
  height: 32px;
  width: 32px;
`;
