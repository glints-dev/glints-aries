import * as React from 'react';

/*
 * This hook is used to detect if element's children are displayed in multi-lines.
 * Currently, we use it to detect ModalFooter's buttons with "flex-wrap: wrap"
 * to responsively change style.
 */
export const checkIsChildrenInMultiLines = (
  ref: React.RefObject<HTMLDivElement>
) => {
  if (!ref.current) {
    return false;
  }

  const childNodes = ref.current.childNodes;

  if (childNodes.length < 2) {
    return false;
  }

  const firstElement = childNodes[0] as HTMLElement;
  const secondElement = childNodes[1] as HTMLElement;

  return firstElement.offsetTop !== secondElement.offsetTop;
};
