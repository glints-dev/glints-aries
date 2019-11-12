import * as fs from 'fs';
import * as ReactDOMServer from 'react-dom/server';
import { camelCase, upperFirst } from 'lodash';

import { ICONS } from './IconLibrary';

const iconsDir = './src/General/Icon/components';
const indexFile = './src/index.ts';
const iconHeading = '\n// Icons\n';

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}
const iconExportsContent = Object.keys(ICONS).reduce(
  (content, name) => {
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

    content.srcIndex += `export { default as ${componentName} } from './General/Icon/components/${componentName}';\n`;
    content.componentsIndex += `export { default as ${componentName} } from './${componentName}';\n`;
    return content;
  },
  { srcIndex: iconHeading, componentsIndex: '' }
);

fs.writeFileSync(`${iconsDir}/index.tsx`, iconExportsContent.componentsIndex);

const prevSrcIndexContent = fs.readFileSync(indexFile, 'utf8');
const iconHeadingIndex = prevSrcIndexContent.indexOf(iconHeading);

if (iconHeadingIndex !== -1) {
  fs.writeFileSync(indexFile, prevSrcIndexContent.slice(0, iconHeadingIndex));
}
fs.appendFileSync(indexFile, iconExportsContent.srcIndex);
