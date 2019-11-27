import * as React from 'react';

import classNames from 'classnames';

import {
  TooltipContainer,
  TooltipContent,
  TooltipMessage,
} from '../../Style/Display/TooltipStyle';

const Tooltip: React.FunctionComponent<Props> = ({
  classes = {},
  children,
  text,
  position,
  ...defaultProps
}) => {
  const contentRef = React.useRef(null);
  const [isShow, setIsShow] = React.useState(false);
  const showTooltip = () => setIsShow(true);
  const hideTooltip = () => setIsShow(false);

  const hideTooltipIfTouchOutside = React.useCallback(
    (event: TouchEvent | React.TouchEvent) => {
      const hasTouchedOutsideOfTooltipContent = !contentRef.current.contains(
        event.target as HTMLElement
      );

      if (hasTouchedOutsideOfTooltipContent) {
        hideTooltip();
        document.removeEventListener('touchstart', hideTooltipIfTouchOutside);
      }
    },
    []
  );

  const handleTouchStart = (event: React.TouchEvent) => {
    if (!isShow) {
      showTooltip();
      document.addEventListener('touchstart', hideTooltipIfTouchOutside);
    } else {
      hideTooltipIfTouchOutside(event);
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

interface Classes {
  container?: string;
  content?: string;
  message?: string;
}

interface Props
  extends React.ComponentPropsWithoutRef<typeof TooltipContainer> {
  classes?: Classes;
  children: React.ReactNode;
  text: string;
  position?: string;
}

export default Tooltip;
