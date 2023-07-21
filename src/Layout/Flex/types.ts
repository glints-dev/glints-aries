const positions = ['center', 'flex-start', 'flex-end'] as const;

export const FlexPropAndPossibleValueMap = {
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'] as const,
  justifyContent: [...positions, 'space-between', 'space-around'] as const,
  alignItems: [...positions, 'stretch', 'baseline'] as const,
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'] as const,
};

export type FlexProps = {
  /** CSS property flex-direction */
  flexDirection?: (typeof FlexPropAndPossibleValueMap.flexDirection)[number];
  /** CSS property justify-content */
  justifyContent?: (typeof FlexPropAndPossibleValueMap.justifyContent)[number];
  /** CSS property align-items */
  alignItems?: (typeof FlexPropAndPossibleValueMap.alignItems)[number];
  /** CSS property flex-wrap */
  flexWrap?: (typeof FlexPropAndPossibleValueMap.flexWrap)[number];
};
