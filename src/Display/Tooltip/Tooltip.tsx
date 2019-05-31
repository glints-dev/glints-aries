import * as React from 'react';

import {
  TooltipContainer,
  TooltipContent,
  TooltipMessage,
} from '../../Style/Display/TooltipStyle';

class Tooltip extends React.Component<Props, State> {
  state = {
    isHover: false,
  }

  render() {
    const {
      className,
      children,
      text,
      position,
      ...defaultProps
    } = this.props;

    const { isHover } = this.state;

    return (
      <TooltipContainer
        id="aries-tooltip"
        className={className}
        role="tooltip"
        aria-hidden={isHover ? 'false' : 'true'}
        aria-label={text}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
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
}

interface Props extends React.ComponentPropsWithoutRef<typeof TooltipContainer> {
  children: React.ReactNode;
  text: string;
  position?: string;
}

interface State {
  isHover: boolean;
}

export default Tooltip;
