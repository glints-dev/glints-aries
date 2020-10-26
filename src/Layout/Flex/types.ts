const positions = ['center', 'flex-start', 'flex-end'] as const;

export const FlexPropAndPossibleValueMap = {
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  justifyContent: [...positions, 'space-between', 'space-around'],
  alignItems: [...positions, 'stretch', 'baseline'] as const,
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'] as const,
};

export type FlexProps = {
  flexDirection?: typeof FlexPropAndPossibleValueMap.flexDirection[number];
  justifyContent?: typeof FlexPropAndPossibleValueMap.justifyContent[number];
  alignItems?: typeof FlexPropAndPossibleValueMap.alignItems[number];
  flexWrap?: typeof FlexPropAndPossibleValueMap.flexWrap[number];
};

export const FlexPropAndDefaultValueMap: FlexProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexWrap: 'nowrap',
};
