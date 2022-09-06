"use strict";

exports.__esModule = true;
exports.FlexPropAndPossibleValueMap = void 0;
var positions = ['center', 'flex-start', 'flex-end'];
var FlexPropAndPossibleValueMap = {
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  justifyContent: [].concat(positions, ['space-between', 'space-around']),
  alignItems: [].concat(positions, ['stretch', 'baseline']),
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse']
};
exports.FlexPropAndPossibleValueMap = FlexPropAndPossibleValueMap;