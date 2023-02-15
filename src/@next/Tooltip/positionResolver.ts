import {
  canAlignLeft,
  canAlignRight,
  canAlignCenter,
  canStayOnTop,
  canFitOnTheLeft,
  horizontalBuffer,
  canFitOnTheRight,
  canFitBelow,
  verticalBuffer,
  tryCalculateAligment,
  canAlignMiddle,
  canAlignTop,
  canAlignBottom,
  canStayOnBottom,
  canFitOnTheTop,
  PreferredHorizontalAligmentFuncsType,
  PreferredVerticalAligmentFuncsType,
  canStayOnLeft,
  canStayOnRight,
} from './positionResolverHelper';
import { TooltipPosition } from './Tooltip';

export const topPositionResolver = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  preferredAligmentFuncs: PreferredHorizontalAligmentFuncsType[]
): TooltipPosition => {
  const horizontalPreferredAligmentFuncs = preferredAligmentFuncs;
  const verticalPreferredAligmentFuncs = [
    canAlignMiddle,
    canAlignTop,
    canAlignBottom,
  ];

  if (canStayOnTop(tooltipRect)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `top-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheLeft(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `left-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheRight(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `right-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitBelow(tooltipRect, elRect, verticalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `bottom-${alignResult}` as TooltipPosition;
    }
  }

  return 'top-center';
};

export const bottomPositionResolver = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  preferredAligmentFuncs: PreferredHorizontalAligmentFuncsType[]
): TooltipPosition => {
  const horizontalPreferredAligmentFuncs = preferredAligmentFuncs;
  const verticalPreferredAligmentFuncs = [
    canAlignMiddle,
    canAlignTop,
    canAlignBottom,
  ];

  if (canStayOnBottom(tooltipRect)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `bottom-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheLeft(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `left-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheRight(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `right-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheTop(tooltipRect, elRect, verticalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `top-${alignResult}` as TooltipPosition;
    }
  }

  return 'bottom-center';
};

export const leftPositionResolver = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  preferredAligmentFuncs: PreferredVerticalAligmentFuncsType[]
): TooltipPosition => {
  const horizontalPreferredAligmentFuncs = [
    canAlignCenter,
    canAlignLeft,
    canAlignRight,
  ];
  const verticalPreferredAligmentFuncs = preferredAligmentFuncs;

  if (canStayOnLeft(tooltipRect)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `left-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheTop(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `top-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheRight(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `right-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitBelow(tooltipRect, elRect, verticalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `bottom-${alignResult}` as TooltipPosition;
    }
  }

  return 'left-middle';
};

export const rightPositionResolver = (
  tooltipRect: DOMRect,
  elRect: DOMRect,
  preferredAligmentFuncs: PreferredVerticalAligmentFuncsType[]
): TooltipPosition => {
  const horizontalPreferredAligmentFuncs = [
    canAlignCenter,
    canAlignLeft,
    canAlignRight,
  ];
  const verticalPreferredAligmentFuncs = preferredAligmentFuncs;

  if (canStayOnRight(tooltipRect)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `right-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheTop(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `top-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitOnTheLeft(tooltipRect, elRect, horizontalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: verticalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `left-${alignResult}` as TooltipPosition;
    }
  }

  if (canFitBelow(tooltipRect, elRect, verticalBuffer)) {
    const alignResult = tryCalculateAligment({
      preferredAlignmentFuncs: horizontalPreferredAligmentFuncs,
      tooltipRect,
      elRect,
    });

    if (alignResult) {
      return `bottom-${alignResult}` as TooltipPosition;
    }
  }

  return 'right-middle';
};
