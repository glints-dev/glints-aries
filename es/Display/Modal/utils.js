/*
 * This hook is used to detect if element's children are displayed in multi-lines.
 * Currently, we use it to detect ModalFooter's buttons with "flex-wrap: wrap"
 * to responsively change style.
 */
export var checkIsChildrenInMultiLines = function checkIsChildrenInMultiLines(ref) {
  if (!ref.current) {
    return false;
  }

  var childNodes = ref.current.childNodes;

  if (childNodes.length < 2) {
    return false;
  }

  var firstElement = childNodes[0];
  var secondElement = childNodes[1];
  return firstElement.offsetTop !== secondElement.offsetTop;
};