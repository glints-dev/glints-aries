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
  font-size: ${props => PARAGRAPH_FONT_SIZES[props.variant]}px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.color};

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
