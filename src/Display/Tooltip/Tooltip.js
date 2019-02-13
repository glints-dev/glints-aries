/* @flow */

import React, { Component } from 'react';

import {
  TooltipContainer,
  TooltipContent,
  TooltipMessage,
} from '../../Style/Display/TooltipStyle';

class Tooltip extends Component <Props, State> {
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
        onMouseLeave={() => this.setState({ isHover: true })}
        {...defaultProps}
      >
        <If condition={isHover}>
          <TooltipContent
            text={text}
            position={position}
          >
            <TooltipMessage>
              {text}
            </TooltipMessage>
          </TooltipContent>
        </If>
        { children }
      </TooltipContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
  text: string,
  position: string,
}

type State = {
  isHover: boolean,
}

export default Tooltip;
