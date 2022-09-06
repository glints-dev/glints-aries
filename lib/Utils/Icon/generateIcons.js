"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var fs = _interopRequireWildcard(require("fs"));

var ReactDOMServer = _interopRequireWildcard(require("react-dom/server"));

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

var _upperFirst = _interopRequireDefault(require("lodash/upperFirst"));

var _IconLibrary = require("./IconLibrary");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var iconExportsContent = Object.keys(_IconLibrary.ICONS).reduce(function (content, name) {
    var camelCaseName = (0, _upperFirst["default"])((0, _camelCase["default"])(name));
    var componentName = camelCaseName + "Icon";
    var svgAsString = ReactDOMServer.renderToStaticMarkup(_IconLibrary.ICONS[name]);
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