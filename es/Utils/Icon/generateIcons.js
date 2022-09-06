import * as fs from 'fs';
import * as ReactDOMServer from 'react-dom/server';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { ICONS } from './IconLibrary';
var ICON_COMPONENTS_DIR = './src/General/Icon/components';
var SRC_INDEX_FILE = './src/index.ts';
var ICON_HEADING_CONTENT = '\n// Icons\n';

function ensureDirExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function createIconComponent(componentName, svgAsString) {
  fs.writeFileSync(ICON_COMPONENTS_DIR + "/" + componentName + ".tsx", "\n// GENERATE BY ./src/General/Icon/generateIcons.js\n// DO NOT EDIT IT MANUALLY\nimport * as React from 'react';\nimport Icon, { Props } from '../Icon';\n\nconst " + componentName + " = (props: Partial<Props>) => (\n  <Icon {...props}>\n    " + svgAsString + "\n  </Icon>\n);\nexport default " + componentName + ";\n");
}

function writeComponentsIndex(content) {
  fs.writeFileSync(ICON_COMPONENTS_DIR + "/index.tsx", content);
}

function writeSrcIndex(content) {
  var prevSrcIndexContent = fs.readFileSync(SRC_INDEX_FILE, 'utf8');
  var iconContentStartIndex = prevSrcIndexContent.indexOf(ICON_HEADING_CONTENT); // delete old content for icon exports

  if (iconContentStartIndex !== -1) {
    fs.writeFileSync(SRC_INDEX_FILE, prevSrcIndexContent.slice(0, iconContentStartIndex));
  }

  fs.appendFileSync(SRC_INDEX_FILE, content);
}

function generateIcons() {
  ensureDirExists(ICON_COMPONENTS_DIR);
  var iconExportsContent = Object.keys(ICONS).reduce(function (content, name) {
    var camelCaseName = upperFirst(camelCase(name));
    var componentName = camelCaseName + "Icon";
    var svgAsString = ReactDOMServer.renderToStaticMarkup(ICONS[name]);
    createIconComponent(componentName, svgAsString);
    content.src += "export { default as " + componentName + " } from './General/Icon/components/" + componentName + "';\n";
    content.components += "export { default as " + componentName + " } from './" + componentName + "';\n";
    return content;
  }, {
    src: ICON_HEADING_CONTENT,
    components: ''
  });
  writeComponentsIndex(iconExportsContent.components);
  writeSrcIndex(iconExportsContent.src);
}

generateIcons();