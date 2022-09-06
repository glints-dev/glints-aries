var positions = ['center', 'flex-start', 'flex-end'];
export var FlexPropAndPossibleValueMap = {
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  justifyContent: [].concat(positions, ['space-between', 'space-around']),
  alignItems: [].concat(positions, ['stretch', 'baseline']),
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse']
};