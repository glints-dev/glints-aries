/* @flow */

import React, { Component } from 'react';

import { TooltipContainer } from '../../Style/Display/TooltipStyle';

class Tooltip extends Component <Props, State> {
  state = {
    isHover: false,
  }

  render() {
    const {
      className,
      children,
      text,
      ...defaultProps
    } = this.props;

    const { isHover } = this.state;

    return (
      <TooltipContainer
        className={className}
        text={text}
        role="tooltip"
        aria-hidden={isHover ? 'false' : 'true'}
        aria-label={text}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        {...defaultProps}
      >
        {children}
      </TooltipContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
  text: string,
}

type State = {
  isHover: boolean,
}

export default Tooltip;
