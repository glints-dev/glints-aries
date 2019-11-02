import styled from 'styled-components';

export const PARAGRAPH_VARIANTS = {
  subtitle: 'subtitle',
  regular: 'regular',
  caption: 'caption',
  smallest: 'smallest',
};

export const PARAGRAPH_FONT_SIZES = {
  [PARAGRAPH_VARIANTS.subtitle]: 18,
  [PARAGRAPH_VARIANTS.regular]: 16,
  [PARAGRAPH_VARIANTS.caption]: 14,
  [PARAGRAPH_VARIANTS.smallest]: 12,
};

export type paragraphType = 'subtitle' | 'regular' | 'caption' | 'smallest';

export interface ParagraphProps {
  bold?: boolean;
  color?: string;
  ellipsis?: boolean;
  variant?: paragraphType;
}

export const Paragraph = styled.p<ParagraphProps>`
  margin: 0;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.color};

  ${props => {
    switch (props.variant) {
      case PARAGRAPH_VARIANTS.subtitle:
        return `
          font-size: ${PARAGRAPH_FONT_SIZES.subtitle}px;
        `;
      case PARAGRAPH_VARIANTS.regular:
        return `
          font-size: ${PARAGRAPH_FONT_SIZES.regular}px;
        `;
      case PARAGRAPH_VARIANTS.caption:
        return `
          font-size: ${PARAGRAPH_FONT_SIZES.caption}px;
        `;
      case PARAGRAPH_VARIANTS.smallest:
        return `
          font-size: ${PARAGRAPH_FONT_SIZES.smallest}px;
        `;
      default:
        return `
          font-size: ${PARAGRAPH_FONT_SIZES.regular}px;
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
