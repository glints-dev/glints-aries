import * as fs from 'fs';
import * as ReactDOMServer from 'react-dom/server';
import { camelCase, upperFirst } from 'lodash';

import { ICONS } from './IconLibrary';

const ICON_COMPONENTS_DIR = './src/General/Icon/components';
const SRC_INDEX_FILE = './src/index.ts';
const ICON_HEADING_CONTENT = '\n// Icons\n';

function ensureDirExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function createIconComponent(componentName: string, svgAsString: string) {
  fs.writeFileSync(
    `${ICON_COMPONENTS_DIR}/${componentName}.tsx`,
    `
// GENERATE BY ./src/General/Icon/generateIcons.js
// DO NOT EDIT IT MANUALLY
import * as React from 'react';
import Icon, { Props } from '../Icon';

const ${componentName} = (props: Partial<Props>) => <Icon {...props} children={${svgAsString}} />;
export default ${componentName};
`
  );
}

function writeComponentsIndex(content: string) {
  fs.writeFileSync(`${ICON_COMPONENTS_DIR}/index.tsx`, content);
}

function writeSrcIndex(content: string) {
  const prevSrcIndexContent = fs.readFileSync(SRC_INDEX_FILE, 'utf8');
  const iconContentStartIndex = prevSrcIndexContent.indexOf(
    ICON_HEADING_CONTENT
  );

  // delete old content for icon exports
  if (iconContentStartIndex !== -1) {
    fs.writeFileSync(
      SRC_INDEX_FILE,
      prevSrcIndexContent.slice(0, iconContentStartIndex)
    );
  }
  fs.appendFileSync(SRC_INDEX_FILE, content);
}

function generateIcons() {
  ensureDirExists(ICON_COMPONENTS_DIR);

  const iconExportsContent = Object.keys(ICONS).reduce(
    (content, name) => {
      const camelCaseName = upperFirst(camelCase(name));
      const componentName = `${camelCaseName}Icon`;
      const svgAsString = ReactDOMServer.renderToStaticMarkup(
        (ICONS as any)[name]
      );

      createIconComponent(componentName, svgAsString);

      content.src += `export { default as ${componentName} } from './General/Icon/components/${componentName}';\n`;
      content.components += `export { default as ${componentName} } from './${componentName}';\n`;
      return content;
    },
    { src: ICON_HEADING_CONTENT, components: '' }
  );

  writeComponentsIndex(iconExportsContent.components);
  writeSrcIndex(iconExportsContent.src);
}

generateIcons();
