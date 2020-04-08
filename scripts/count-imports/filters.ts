import _ from 'lodash';
import { File } from '@babel/types';

export const ariesImportIdentifiers = (ast: File) => {
  const result = _(ast)
    .chain()
    .get(['program', 'body'])
    // Get array of glints-aries import statements
    .filter({ type: 'ImportDeclaration', source: { value: 'glints-aries' } })
    // Extract all specifiers. At this point there are only specifiers in the
    // form of component names left in the input. A regular map would result
    // in an array of specifiers array, so we use flatMap to flatten the array.
    .flatMap('specifiers')
    .size()
    .value();
  return result;
};
