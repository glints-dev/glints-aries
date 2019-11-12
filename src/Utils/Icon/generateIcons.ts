import * as fs from 'fs';
import * as ReactDOMServer from 'react-dom/server';
import { camelCase, upperFirst } from 'lodash';

import { ICONS } from './IconLibrary';

const iconsDir = './src/General/Icon/components';

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}
const indexContent = Object.keys(ICONS).reduce((content, name) => {
  const camelCaseName = upperFirst(camelCase(name));
  const componentName = `${camelCaseName}Icon`;

  fs.writeFileSync(
    `${iconsDir}/${componentName}.tsx`,
    `
// GENERATE BY ./src/General/Icon/generateIcons.js
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import Icon, { Props } from '../Icon';

const svg = ${ReactDOMServer.renderToStaticMarkup((ICONS as any)[name])};
const ${componentName} = (props: Partial<Props>) => <Icon {...props} children={svg} />;
export default ${componentName};
`
  );

  content += `export { default as ${componentName} } from './${componentName}';\n`; // eslint-disable-line
  return content;
}, '');

fs.writeFileSync(`${iconsDir}/index.tsx`, indexContent);
