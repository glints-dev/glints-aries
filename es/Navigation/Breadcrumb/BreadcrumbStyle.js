import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';
export var BreadcrumbItemWrapper = styled.label.withConfig({
  displayName: "BreadcrumbStyle__BreadcrumbItemWrapper",
  componentId: "sc-eq3cq-0"
})(["cursor:", ";font-size:1em;line-height:1.5;*{color:", ";}span{margin:0 1em;color:#aaaaaa;}"], function (_ref) {
  var active = _ref.active;
  return active ? 'default' : 'pointer';
}, function (_ref2) {
  var active = _ref2.active;
  return active ? "" + Greyscale.grey : "" + Greyscale.black;
});
export var BreadcrumbContainer = styled.div.withConfig({
  displayName: "BreadcrumbStyle__BreadcrumbContainer",
  componentId: "sc-eq3cq-1"
})(["position:relative;display:flex;background-color:", ";padding:1em;label.aries-breadcrumb-item:last-child span{display:none;}"], Greyscale.softgrey);