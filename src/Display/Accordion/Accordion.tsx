import * as React from 'react';

import classNames from 'classnames';

import AccordionPanel, { Props as AccordionPanelProps } from './AccordionPanel';

import { AccordionContainer } from '../../Style/Display/AccordionStyle';

class Accordion extends React.Component<Props, State> {

  static Panel = AccordionPanel;

  state = {
    currIndex: -1,
    isOpenSingleItem: false,
  }

  handleOpen = (index: number) => {
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
      React.Children.map(children, (data: React.ReactElement<AccordionPanelProps>, index) => (
        <AccordionPanel
          className="accordion-contentwrapper"
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

    const childProps = (children as React.ReactElement<AccordionPanelProps>).props;
    return (
      <AccordionPanel
        className="accordion-contentwrapper"
        label={childProps.label}
        content={childProps.content}
        active={isOpenSingleItem}
        onClick={this.handleOpenSingleItem}
      />
    );
  }

  render() {
    const { children, className } = this.props;

    return (
      <AccordionContainer className={classNames('aries-accordion', className)}>
        {React.Children.count(children) > 1
          ? this.renderMultipleItem()
          : this.renderSingleItem()}
      </AccordionContainer>
    );
  }
}

interface Props {
  children: React.ReactNode;
  className?: string;
}

interface State {
  currIndex: number;
  isOpenSingleItem: boolean;
}

export default Accordion;
