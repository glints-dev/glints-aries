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
  const [isHover, setIsHover] = React.useState(false)

  return (
    <TooltipContainer
      className={classNames('aries-tooltip', classes.container)}
      role="tooltip"
      aria-hidden={isHover ? 'false' : 'true'}
      aria-label={text}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...defaultProps}
    >
      {isHover &&
        <TooltipContent
          className={classNames("aries-tooltip-content", classes.content)}
          text={text}
          position={position}
        >
          <TooltipMessage className={classNames("aries-tooltip-message", classes.message)}>
            {text}
          </TooltipMessage>
        </TooltipContent>
      }
      { children }
    </TooltipContainer>
  );
}

interface Classes {
  container?: string
  content?: string
  message?: string
}

interface Props extends React.ComponentPropsWithoutRef<typeof TooltipContainer> {
  classes?: Classes;
  children: React.ReactNode;
  text: string;
  position?: string;
}

export default Tooltip;
