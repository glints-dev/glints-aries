import * as React from 'react';

import classNames from 'classnames';

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
        className={classNames('aries-tooltip', className)}
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
