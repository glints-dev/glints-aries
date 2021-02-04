import { assignWith, chain, mapValues } from 'lodash';
import { countImports } from './count-imports';
import { fetchUnits } from './fetch-units';

const getImportsCount = cwd =>
  new Promise<object>((resolve, reject) =>
    countImports(cwd, (error, result: object) => {
      if (error) reject(error);
      else resolve(result);
    })
  );

const countUnitExportsInImports = (units, imports) =>
  mapValues(units, exportsString => {
    if (exportsString === null) return 0;
    const exports = exportsString.split(/,\s?/);
    const counted = chain(exports)
      .map(exp =>
        chain(imports)
          .keys()
          .filter(imp => new RegExp(`${exp}`).test(imp))
          .map(imp => imports[imp])
          .sum()
          .value()
      )
      .sum()
      .value();
    return counted;
  });

/**
 * This script downloads our Glints Aries Status google sheet and counts how many times exports from a code unit are imported in a given repo. Paths to repos may be specified as command line parameters. The script requires an active Internet connection and must be able to parse the source code files in the given repos. The script outputs the counts in the same order as the code units are given in the status sheet so that they can be copy-pasted over from the command-line.
 */
const main = async () => {
  const cwds = process.argv.slice(2);
  if (cwds.length === 0)
    throw 'Please pass at least one repo to count in as an argument';

  const units = await fetchUnits();

  const unitCounts = await Promise.all(
    cwds.map(async cwd => {
      const imports = await getImportsCount(cwd);
      const consolidated = countUnitExportsInImports(units, imports);
      return consolidated;
    })
  );

  const totalUnitCounts = assignWith(
    mapValues(units, () => 0),
    ...unitCounts,
    (targetVal, sourceVal) => (targetVal || 0) + sourceVal
  );

  // console.log(totalUnitCounts);
  console.log(Object.values(totalUnitCounts).join('\n'));
};

main();
