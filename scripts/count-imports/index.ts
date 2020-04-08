// Usage: babel-node --extensions .ts index.ts path/to/directory
// Counts the number of imported Aries components in a given directory

import * as fs from 'fs';
import glob from 'glob';
import * as async from 'async';
import _ from 'lodash';

import parse from './parser';
import { ariesImportIdentifiers } from './filters';

const cwd = process.argv[2];
if (!cwd) throw 'Please pass the repo to count in as an argument';

// Generates a list of all .js files in the given directory
const globFiles = (
  cwd: string,
  callback: (error: Error, matches: string[]) => void
) => {
  return glob(
    '**/!(*.spec|*.d).{ts,tsx,js,jsx}',
    { cwd, ignore: ['node_modules/**', 'dist/**'], absolute: true },
    callback
  );
};

// Parses a given file and runs it against the filter that counts the imports
const getAriesImportCountFromFile = (file: string) => {
  const code = fs.readFileSync(file, { encoding: 'utf-8' });
  try {
    const ast = parse(code);
    return ariesImportIdentifiers(ast);
  } catch (error) {
    console.error(`Parse error in ${file}`);
    console.error(error);
    return 0;
  }
};

// async.map executes a function on every item in the input array in "parallel"
async.waterfall(
  [
    async.constant(cwd),
    globFiles,
    _.bind(async.map, this, _, async.asyncify(getAriesImportCountFromFile)),
    async.asyncify(_.sum),
  ],
  (error: Error, result: number) => {
    if (error) console.error(error);
    console.log(result);
  }
);
