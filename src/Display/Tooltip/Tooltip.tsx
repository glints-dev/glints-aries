import * as React from 'react';

import classNames from 'classnames';

import {
  TooltipContainer,
  TooltipContent,
  TooltipMessage,
} from '../../Style/Display/TooltipStyle';

const Tooltip: React.FunctionComponent<Props> = ({
  className,
  children,
  text,
  position,
  ...defaultProps
}) => {
  const [isHover, setIsHover] = React.useState(false)

  return (
    <TooltipContainer
      className={classNames('aries-tooltip', className)}
      role="tooltip"
      aria-hidden={isHover ? 'false' : 'true'}
      aria-label={text}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...defaultProps}
    >
      {isHover &&
        <TooltipContent
          text={text}
          position={position}
        >
          <TooltipMessage>
            {text}
          </TooltipMessage>
        </TooltipContent>
      }
      { children }
    </TooltipContainer>
  );
}

interface Props extends React.ComponentPropsWithoutRef<typeof TooltipContainer> {
  className?: string;
  children: React.ReactNode;
  text: string;
  position?: string;
}

export default Tooltip;
