/* @flow */

import React, { Component } from 'react';

import Icon from '../../General/Icon';

import { BlockquoteContainer } from '../../Style/Display/BlockquoteStyle';
import { PrimaryColor } from '../../Style/Colors';

class Blockquote extends Component <Props, State> {
  state = {
    isHover: false,
  }

  render() {
    const {
      children,
      className,
    } = this.props;

    const { isHover } = this.state;

    return (
      <BlockquoteContainer
        id="aries-blockquote"
        className={className}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <Icon name="quotation" color={isHover ? PrimaryColor.glintsred : PrimaryColor.glintsblue} />
        {children}
      </BlockquoteContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
}

type State = {
  isHover: boolean,
}

export default Blockquote;
