import React, {
  HTMLAttributes,
  FC,
  useRef,
  useState,
  useCallback,
} from 'react';

import classNames from 'classnames';

import {
  TooltipContainer,
  TooltipContent,
  TooltipMessage,
} from './TooltipStyle';

export const Tooltip: FC<Props> = ({
  classes = {},
  children,
  text,
  position = 'top',
  ...defaultProps
}) => {
  const contentRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const showTooltip = () => setIsShow(true);
  const hideTooltip = () => setIsShow(false);

  const hideTooltipIfTouchOutside = useCallback(
    (event: TouchEvent | React.TouchEvent) => {
      const hasTouchedOutsideOfTooltipContent =
        contentRef.current &&
        !contentRef.current.contains(event.target as HTMLElement);

      if (hasTouchedOutsideOfTooltipContent) {
        hideTooltip();
        document.removeEventListener('touchstart', hideTooltipIfTouchOutside);
      }
    },
    []
  );

  const handleTouchStart = () => {
    if (!isShow) {
      showTooltip();
      document.addEventListener('touchstart', hideTooltipIfTouchOutside);
    }
  };

  return (
    <TooltipContainer
      className={classNames('aries-tooltip', classes.container)}
      role="tooltip"
      aria-hidden={isShow ? 'false' : 'true'}
      aria-label={text}
      // The tooltip does not close on iOS devices because of this issue https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
      // Adding onTouchStart and onTouchEnd as a workaround
      // On mobile, it shows the tooltip on touch and hides the tooltip when the touch is released
      onTouchStart={handleTouchStart}
      onMouseOver={showTooltip}
      onMouseLeave={hideTooltip}
      {...defaultProps}
    >
      {isShow && (
        <TooltipContent
          ref={contentRef}
          className={classNames('aries-tooltip-content', classes.content)}
          text={text}
          position={position}
        >
          <TooltipMessage
            className={classNames('aries-tooltip-message', classes.message)}
          >
            {text}
          </TooltipMessage>
        </TooltipContent>
      )}
      {children}
    </TooltipContainer>
  );
};

export interface Classes {
  container?: string;
  content?: string;
  message?: string;
}

export type Position = 'top' | 'right' | 'bottom' | 'left';

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  /** This is an object with three keys: <code>container</code>,
   * <code>content</code> and <code>message</code>. Use them to attach
   * additional classes to the respective elements. */
  classes?: Classes;
  text: string;
  position?: Position;
}

export default Tooltip;
