import styled, { css } from 'styled-components';
import { NotoSans } from '../../utilities/fonts/Fonts';
import { space16, space24, space32 } from '../../utilities/spacing/Spacing';
import {
  screenBreakPointExtraLarge,
  screenBreakPointLarge,
  screenBreakPointMedium,
  screenBreakPointMediumLarge,
  screenBreakPointSmall,
} from '../../utilities/breakpoints/Breakpoints';

const BaseStyles = css`
  font-family: ${NotoSans}, sans-serif;
  position: relative;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const PageStyles = css`
  margin: 0 auto;
  max-width: 100%;
  padding: 0 ${space16};

  @media (min-width: ${screenBreakPointSmall}) {
    padding: 0 ${space24};
  }

  @media (min-width: ${screenBreakPointMedium}) {
    padding: 0 ${space32};
  }

  @media (min-width: ${screenBreakPointMediumLarge}) {
    padding: 0 ${space32};
  }

  @media (min-width: ${screenBreakPointLarge}) {
    max-width: 1140px;
    padding: 0;
  }

  @media (min-width: ${screenBreakPointExtraLarge}) {
    max-width: 1360px;
    padding: 0;
  }
`;

export const GlintsContainerFluid = styled.div`
  ${BaseStyles}
`;

export const GlintsContainer = styled.div`
  ${BaseStyles}
  ${PageStyles}
`;
