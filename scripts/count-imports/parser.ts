import * as babylon7 from 'babylon7';

const options = {
  sourceType: 'module' as const,
  allowImportExportEverywhere: false,
  allowReturnOutsideFunction: false,
  ranges: false,
  tokens: false,
  plugins: [
    'asyncGenerators' as babylon7.ParserPlugin,
    'classProperties' as babylon7.ParserPlugin,
    'exportExtensions' as babylon7.ParserPlugin,
    'typescript' as babylon7.ParserPlugin,
    'functionBind' as babylon7.ParserPlugin,
    'jsx' as babylon7.ParserPlugin,
    'objectRestSpread' as babylon7.ParserPlugin,
    'dynamicImport' as babylon7.ParserPlugin,
    'optionalCatchBinding' as babylon7.ParserPlugin,
  ],
};

export default (code: string) => babylon7.parse(code, options);
