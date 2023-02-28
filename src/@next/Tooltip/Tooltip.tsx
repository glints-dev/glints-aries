import React, { useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { Typography } from '../Typography';
import {
  bottomPositionResolver,
  leftPositionResolver,
  rightPositionResolver,
  topPositionResolver,
} from './positionResolver';
import {
  canAlignBottom,
  canAlignCenter,
  canAlignLeft,
  canAlignMiddle,
  canAlignRight,
  canAlignTop,
  horizontalBuffer,
  verticalBuffer,
} from './positionResolverHelper';
import {
  StyledTooltip,
  StyledTooltipArrow,
  StyledTooltipContainer,
} from './TooltipStyle';

const topPositions = ['top-center', 'top-left', 'top-right'] as const;
const bottomPositions = [
  'bottom-center',
  'bottom-left',
  'bottom-right',
] as const;
const rightPositions = ['right-middle', 'right-top', 'right-bottom'] as const;
const leftPositions = ['left-middle', 'left-top', 'left-bottom'] as const;
const allPositions = [
  ...topPositions,
  ...bottomPositions,
  ...rightPositions,
  ...leftPositions,
] as const;

export type TooltipPosition = typeof allPositions[number];

type TooltipPositionResolverFunction = (
  tooltipRect: DOMRect,
  elementRect: DOMRect
) => TooltipPosition;

type TooltipCoord = {
  top: number;
  left: number;
};

const tooltipPositionResolvers: Record<
  TooltipPosition,
  TooltipPositionResolverFunction
> = {
  'top-center': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return topPositionResolver(tooltipRect, elementRect, [
      canAlignCenter,
      canAlignLeft,
      canAlignRight,
    ]);
  },
  'top-left': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return topPositionResolver(tooltipRect, elementRect, [
      canAlignLeft,
      canAlignCenter,
      canAlignRight,
    ]);
  },
  'top-right': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return topPositionResolver(tooltipRect, elementRect, [
      canAlignRight,
      canAlignCenter,
      canAlignLeft,
    ]);
  },
  'bottom-center': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return bottomPositionResolver(tooltipRect, elementRect, [
      canAlignCenter,
      canAlignLeft,
      canAlignRight,
    ]);
  },
  'bottom-left': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return bottomPositionResolver(tooltipRect, elementRect, [
      canAlignLeft,
      canAlignCenter,
      canAlignRight,
    ]);
  },
  'bottom-right': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return bottomPositionResolver(tooltipRect, elementRect, [
      canAlignRight,
      canAlignCenter,
      canAlignLeft,
    ]);
  },
  'right-middle': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return rightPositionResolver(tooltipRect, elementRect, [
      canAlignMiddle,
      canAlignTop,
      canAlignBottom,
    ]);
  },
  'right-top': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return rightPositionResolver(tooltipRect, elementRect, [
      canAlignTop,
      canAlignMiddle,
      canAlignBottom,
    ]);
  },
  'right-bottom': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return rightPositionResolver(tooltipRect, elementRect, [
      canAlignBottom,
      canAlignMiddle,
      canAlignTop,
    ]);
  },
  'left-middle': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return leftPositionResolver(tooltipRect, elementRect, [
      canAlignMiddle,
      canAlignTop,
      canAlignBottom,
    ]);
  },
  'left-top': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return leftPositionResolver(tooltipRect, elementRect, [
      canAlignTop,
      canAlignMiddle,
      canAlignBottom,
    ]);
  },
  'left-bottom': (tooltipRect: DOMRect, elementRect: DOMRect) => {
    return leftPositionResolver(tooltipRect, elementRect, [
      canAlignBottom,
      canAlignMiddle,
      canAlignTop,
    ]);
  },
};

export type TooltipProps = {
  preferredPosition?: TooltipPosition;
  children: React.ReactNode;
  content: React.ReactNode;
};

const defaultPosition = 'top-center';

export const Tooltip = ({
  children,
  content,
  preferredPosition = defaultPosition,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);
  const tooltipPositionsHandlerRef = useRef(null);

  const [toolTipCoord, setToolTipCoord] = useState<TooltipCoord>(null);
  const [isActive, setIsActive] = useState(false);
  const [overridePosition, setOverridePosition] =
    useState<TooltipPosition | null>(null);

  if (!allPositions.includes(preferredPosition)) {
    preferredPosition = defaultPosition;
    console.warn(
      `"${preferredPosition}" is not a valid tooltip positon, "${defaultPosition}" will be used instead`
    );
  }

  const position = overridePosition || preferredPosition;

  const handleTooltipPositions = (
    tooltipRect: DOMRect,
    elRect: DOMRect,
    currentPosition: TooltipPosition
  ) => {
    const resolver =
      tooltipPositionResolvers[position] ||
      tooltipPositionResolvers[defaultPosition];

    let newLeft = 0;
    let newTop = 0;

    if (position.startsWith('top')) {
      newTop = elRect.top - tooltipRect.height - verticalBuffer;
      newLeft = elRect.left + elRect.width / 2;
    }

    if (position.startsWith('bottom')) {
      newTop = elRect.top + elRect.height + verticalBuffer;
      newLeft = elRect.left + elRect.width / 2;
    }

    if (position.startsWith('left')) {
      newTop = elRect.top + elRect.height / 2;
      newLeft = elRect.left - tooltipRect.width - horizontalBuffer;
    }

    if (position.startsWith('right')) {
      newTop = elRect.top + elRect.height / 2;
      newLeft = elRect.left + elRect.width + horizontalBuffer;
    }

    setToolTipCoord({ top: newTop, left: newLeft });

    const tooltipRectNew = new DOMRect(
      newLeft,
      newTop,
      tooltipRect.width,
      tooltipRect.height
    );

    const resolvedPosition = resolver(tooltipRectNew, elRect);
    if (!overridePosition && resolvedPosition !== currentPosition) {
      setOverridePosition(resolvedPosition);
    }
  };

  tooltipPositionsHandlerRef.current = handleTooltipPositions;

  useEffect(() => {
    if (isActive) {
      tooltipPositionsHandlerRef.current(
        tooltipRef?.current?.getClientRects()[0],
        elRef?.current?.getClientRects()[0],
        position
      );
    }
  }, [isActive, position]);

  const contentMarkup =
    typeof content === 'string' ? (
      <Typography as="div" variant="body1">
        {content}
      </Typography>
    ) : (
      content
    );

  return (
    <>
      <StyledTooltipContainer
        ref={elRef}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {children}
      </StyledTooltipContainer>
      {isActive && (
        <Portal>
          <StyledTooltip
            data-position={position}
            ref={tooltipRef}
            style={{
              top: toolTipCoord?.top + 'px',
              left: toolTipCoord?.left + 'px',
              visibility: toolTipCoord ? 'visible' : 'hidden',
            }}
          >
            <StyledTooltipArrow className="arrow" />
            {contentMarkup}
          </StyledTooltip>
        </Portal>
      )}
    </>
  );
};
