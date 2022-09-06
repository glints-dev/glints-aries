import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Shadow } from '../../Utils/Shadow';
import { Spacing } from '../../Layout/Spacing';
var allSpacingProps = ['p', 'pl', 'pr', 'pt', 'pb', 'px', 'py', 'm', 'ml', 'mr', 'mt', 'mb', 'mx', 'my'];
export var boxArgTypes = _objectSpread({
  boxShadow: {
    control: {
      type: 'select',
      options: {
        'Example: Shadow.down4': Shadow.down4,
        'Example: Shadow.up4': Shadow.up4
      }
    },
    table: {
      type: {
        summary: 'import { Shadow } from "glints-aries"',
        detail: Object.keys(Shadow).map(function (key) {
          return "Shadow." + key;
        }).join(' | ')
      }
    }
  }
}, allSpacingProps.reduce(function (acc, propName) {
  acc[propName] = {
    table: {
      type: {
        summary: 'Spacing',
        detail: Object.values(Spacing).join(' | ') + " | 'auto' | Responsive Space Object"
      }
    }
  };
  return acc;
}, {}));