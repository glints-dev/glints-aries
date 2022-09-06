import styled from 'styled-components';
import { ScreenSize } from '../../Utils/StyleConfig';
export var ColumnContainer = styled.div.withConfig({
  displayName: "GridStyle__ColumnContainer",
  componentId: "sc-10a4cmt-0"
})(["", ""], function (_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      xsOrder = _ref.xsOrder,
      smOrder = _ref.smOrder,
      mdOrder = _ref.mdOrder;
  return "\n    max-width: 100%;\n    flex-basis: calc(100% / 12 * " + xs + ");\n    order: " + (xsOrder || 0) + ";\n    @media (min-width: " + ScreenSize.mobileS + "px) {\n      flex-basis: calc(100% / 12 * " + xs + ");\n      order: " + (xsOrder || 0) + ";\n    }\n\n    @media (min-width: " + ScreenSize.mobileM + "px) {\n      flex-basis: calc(100% / 12 * " + xs + ");\n      order: " + (xsOrder || 0) + ";\n    }\n\n    @media (min-width: " + ScreenSize.mobileL + "px) {\n      flex-basis: calc(100% / 12 * " + xs + ");\n      order: " + (xsOrder || 0) + ";\n    }\n\n    @media (min-width: " + ScreenSize.tablet + "px) {\n      flex-basis: calc(100% / 12 * " + sm + ");\n      order: " + (smOrder || 0) + ";\n    }\n\n    @media (min-width: " + ScreenSize.desktopS + "px) {\n      flex-basis: calc(100% / 12 * " + md + ");\n      order: " + (mdOrder || 0) + ";\n    }\n\n    @media (min-width: " + ScreenSize.desktopM + "px) {\n      flex-basis: calc(100% / 12 * " + md + ");\n      order: " + (mdOrder || 0) + ";\n    }\n\n    @media (min-width: " + ScreenSize.desktopL + "px) {\n      flex-basis: calc(100% / 12 * " + md + ");\n      order: " + (mdOrder || 0) + ";\n    }\n  ";
});
export var RowContainer = styled.div.withConfig({
  displayName: "GridStyle__RowContainer",
  componentId: "sc-10a4cmt-1"
})(["display:flex;flex-direction:row;flex-wrap:wrap;flex-basis:100%;", " ", ""], function (_ref2) {
  var alignContent = _ref2.alignContent;

  if (alignContent) {
    return "\n        align-content: " + alignContent + ";\n        align-items: " + alignContent + ";\n        ";
  }

  return null;
}, function (_ref3) {
  var justifyContent = _ref3.justifyContent;

  if (justifyContent) {
    return "\n        justify-content: " + justifyContent + ";\n        justify-items: " + justifyContent + ";\n      ";
  }

  return null;
});