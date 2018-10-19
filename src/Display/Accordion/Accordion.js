/* @flow */

import React, { Component } from 'react';

import AccordionPanel from './AccordionPanel';

import { AccordionContainer } from '../../Style/Display/AccordionStyle';

class Accordion extends Component <Props, State> {
  state = {
    currIndex: -1,
    isOpenSingleItem: false,
  }

  handleOpen = (index) => {
    const { currIndex } = this.state;

    this.setState({
      currIndex: currIndex === index ? -1 : index,
    });
  }

  handleOpenSingleItem = () => {
    const { isOpenSingleItem } = this.state;

    this.setState({
      isOpenSingleItem: !isOpenSingleItem,
    });
  }

  renderMultipleItem() {
    const { children } = this.props;
    const { currIndex } = this.state;

    return (
      children.map((data, index) => (
        <AccordionPanel
          key={index}
          label={data.props.label}
          content={data.props.content}
          active={currIndex === index}
          onClick={() => this.handleOpen(index)}
        />
      ))
    );
  }

  renderSingleItem() {
    const { children } = this.props;
    const { isOpenSingleItem } = this.state;

    return (
      <AccordionPanel
        label={children.props.label}
        content={children.props.content}
        active={isOpenSingleItem}
        onClick={this.handleOpenSingleItem}
      />
    );
  }

  render() {
    const { children, className } = this.props;

    return (
      <AccordionContainer className={className}>
        <Choose>
          <When condition={children.length > 1}>
            {this.renderMultipleItem()}
          </When>
          <Otherwise>
            {this.renderSingleItem()}
          </Otherwise>
        </Choose>
      </AccordionContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
};

type State = {
  currIndex: number,
  isOpenSingleItem: boolean,
};

export default Accordion;
