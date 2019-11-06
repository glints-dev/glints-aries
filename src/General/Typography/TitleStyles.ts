import styled from 'styled-components';

import { tagType } from './Title';

export const TITLE_VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export const TITLE_FONT_SIZES = {
  [TITLE_VARIANTS.h1]: 50,
  [TITLE_VARIANTS.h2]: 36,
  [TITLE_VARIANTS.h3]: 30,
  [TITLE_VARIANTS.h4]: 26,
  [TITLE_VARIANTS.h5]: 22,
  [TITLE_VARIANTS.h6]: 18,
};

interface TitleProps {
  as: tagType;
  color?: string;
  ellipsis?: boolean;
}

export const Title = styled.h1<TitleProps>`
  margin: 0;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: ${props => props.color};

  ${props => {
    switch (props.as) {
      case TITLE_VARIANTS.h1:
        return `
        font-size: ${TITLE_FONT_SIZES.h1}px;
        font-weight: 900;
        line-height: 1.2em;
      `;
      case TITLE_VARIANTS.h2:
        return `
        font-size: ${TITLE_FONT_SIZES.h2}px;
        line-height: 1.2em;
      `;
      case TITLE_VARIANTS.h3:
        return `
        font-size: ${TITLE_FONT_SIZES.h3}px;
        line-height: 1.4em;
      `;
      case TITLE_VARIANTS.h4:
        return `
        font-size: ${TITLE_FONT_SIZES.h4}px;
        line-height: 1.4em;
      `;
      case TITLE_VARIANTS.h5:
        return `
        font-size: ${TITLE_FONT_SIZES.h5}px;
        line-height: 1.4em;
      `;
      case TITLE_VARIANTS.h6:
        return `
        font-size: ${TITLE_FONT_SIZES.h6}px;
        line-height: 1.4em;
      `;
      default:
        return `
        font-size: ${TITLE_FONT_SIZES.h1}px;
        font-weight: 900;
        line-height: 1.2em;
    `;
    }
  }};

  ${props => {
    if (props.ellipsis) {
      return `
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      `;
    }
  }}
`;
