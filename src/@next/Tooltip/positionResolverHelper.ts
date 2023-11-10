import { getViewportDimensions } from '../../helpers/viewPort';

export const verticalBuffer = 8;
export const horizontalBuffer = 8;
export const nonCenterArrowSpace = 12;
// for non center position the position of the arrow is 12px from the most left or right, setting it to 14 to make sure it's nicely visible
const marginBuffer = nonCenterArrowSpace + 2;

export type HorizontalAlignmentType = 'center' | 'left' | 'right';

export type VerticalAlignmentType = 'middle' | 'top' | 'bottom';

export type HorizontalAlignmentCalculatorResult = {
  type: HorizontalAlignmentType;
  result: boolean;
};

export type VerticalAlignmentCalculatorResult = {
  type: VerticalAlignmentType;
  result: boolean;
};
export type PreferredHorizontalAligmentFuncsType = (
  tooltipRect: DOMRect,
  elRect: DOMRect
) => HorizontalAlignmentCalculatorResult;

export type PreferredVerticalAligmentFuncsType = (
  tooltipRect: DOMRect,
  elRect: DOMRect
) => VerticalAlignmentCalculatorResult;

export type TryCalculateAlignmentArgs<
  T extends HorizontalAlignmentType | VerticalAlignmentType
> = {
  preferredAlignmentFuncs: T extends HorizontalAlignmentType
    ? PreferredHorizontalAligmentFuncsType[]
    : PreferredVerticalAligmentFuncsType[];
  tooltipRect: DOMRect;
  elRect: DOMRect;
};

export const getElementCenterPosition = (elRect: DOMRect) =>
  elRect.left + elRect.width / 2;

export const getElementMiddlePosition = (elRect: DOMRect) =>
  elRect.bottom + elRect.height / 2;

export const canFitOnTheTop = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  verticalMargin: number
) => {
  return elRect.top - (verticalMargin + tooltipRect.height) > 0;
};

export const canFitBelow = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  verticalMargin: number
) => {
  return (
    elRect.bottom + verticalMargin + tooltipRect.height <
    getViewportDimensions().height
  );
};

export const canFitOnTheLeft = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  horizontalMargin: number
) => {
  return elRect.left - (horizontalMargin + tooltipRect.width) > 0;
};

export const canFitOnTheRight = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  horizontalMargin: number
) => {
  return (
    elRect.right + horizontalMargin + tooltipRect.width <
    getViewportDimensions().width
  );
};

export const canAlignLeft = (
  tooltipRect: DOMRect,
  elRect: DOMRect
): HorizontalAlignmentCalculatorResult => {
  const centerPosition = getElementCenterPosition(elRect);
  const hasSpaceOnTheLeftSideOfArrow =
    centerPosition - (tooltipRect.width - marginBuffer) > 0;
  const hasSpaceOnTheRightSideOfArrow =
    centerPosition + marginBuffer < getViewportDimensions().width;

  return {
    type: 'left',
    result: hasSpaceOnTheLeftSideOfArrow && hasSpaceOnTheRightSideOfArrow,
  };
};

export const canAlignRight = (
  tooltipRect: DOMRect,
  elRect: DOMRect
): HorizontalAlignmentCalculatorResult => {
  const centerPosition = getElementCenterPosition(elRect);
  const hasSpaceOnTheRightSideOfArrow =
    centerPosition + (tooltipRect.width - marginBuffer) <
    getViewportDimensions().width;

  const hasSpaceOnTheLeftSideOfArrow = centerPosition - marginBuffer > 0;

  return {
    type: 'right',
    result: hasSpaceOnTheLeftSideOfArrow && hasSpaceOnTheRightSideOfArrow,
  };
};

export const canAlignCenter = (
  tooltipRect: DOMRect,
  elRect: DOMRect
): HorizontalAlignmentCalculatorResult => {
  const centerPosition = elRect.left + elRect.width / 2;

  return {
    type: 'center',
    result:
      centerPosition - tooltipRect.width / 2 > 0 &&
      centerPosition + tooltipRect.width / 2 < getViewportDimensions().width,
  };
};

export const canAlignTop = (
  tooltipRect: DOMRect,
  elRect: DOMRect
): VerticalAlignmentCalculatorResult => {
  const middlePosition = getElementMiddlePosition(elRect);
  const hasSpaceOnTheTopOfArrow =
    middlePosition - (tooltipRect.height - marginBuffer) > 0;
  const hasSpaceBelowTheArrow =
    middlePosition + marginBuffer < getViewportDimensions().width;

  return {
    type: 'top',
    result: hasSpaceOnTheTopOfArrow && hasSpaceBelowTheArrow,
  };
};

export const canAlignBottom = (
  tooltipRect: DOMRect,
  elRect: DOMRect
): VerticalAlignmentCalculatorResult => {
  const middlePosition = getElementMiddlePosition(elRect);
  const hasSpaceOnTopOfArrow =
    middlePosition + (tooltipRect.height - marginBuffer) <
    getViewportDimensions().height;

  const hasSpaceBelowTheArrow = middlePosition - marginBuffer > 0;

  return {
    type: 'bottom',
    result: hasSpaceBelowTheArrow && hasSpaceOnTopOfArrow,
  };
};

export const canAlignMiddle = (
  tooltipRect: DOMRect,
  elRect: DOMRect
): VerticalAlignmentCalculatorResult => {
  const middlePosition = elRect.top + elRect.height / 2;

  return {
    type: 'middle',
    result:
      middlePosition - tooltipRect.height / 2 > 0 &&
      middlePosition + tooltipRect.height / 2 < getViewportDimensions().height,
  };
};

export const canStayOnTop = (tooltipRect: DOMRect) => {
  return tooltipRect.top > 0;
};

export const canStayOnBottom = (tooltipRect: DOMRect) => {
  console.log('tooltipRect:', tooltipRect);
  console.log(
    'getViewportDimensions().height: ',
    getViewportDimensions().height
  );
  return tooltipRect.bottom < getViewportDimensions().height;
};

export const canStayOnLeft = (tooltipRect: DOMRect) => {
  return tooltipRect.left > 0;
};

export const canStayOnRight = (tooltipRect: DOMRect) => {
  return tooltipRect.right < getViewportDimensions().width;
};

export const tryCalculateAligment = <
  T extends HorizontalAlignmentType | VerticalAlignmentType
>(
  args: TryCalculateAlignmentArgs<T>
) => {
  const { preferredAlignmentFuncs, tooltipRect, elRect } = args;

  for (const alignmentFunc of preferredAlignmentFuncs) {
    const { result, type } = alignmentFunc(tooltipRect, elRect);
    if (result) {
      return type;
    }
  }

  return null;
};
