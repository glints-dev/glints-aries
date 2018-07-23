/* @flow */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import { SliderContainer, SliderWrapperStyle } from '../Style/SliderStyle';

class Slider extends Component <Props, State> {
  constructor() {
    super();
    this.state = {
      translateValue: 0,
      index: 1,
    };
    this.sliderContainer = null;
  }

  previousSlide = () => {
    const { index, translateValue } = this.state;
    if (index !== 1) {
      const containerWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;
      this.setState({
        index: index - 1,
        translateValue: translateValue + containerWidth,
      });
    }
  }

  nextSlide = () => {
    const { index, translateValue } = this.state;
    const { children } = this.props;
    if (index !== children.length) {
      const containerWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;
      this.setState({
        index: index + 1,
        translateValue: translateValue - containerWidth,
      });
    }
  }

  render() {
    const { translateValue, index } = this.state;
    const { children, className } = this.props;
    return (
      <SliderContainer ref={(node) => { this.sliderContainer = node; }} className={className}>
        <SliderWrapperStyle
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          { children }
        </SliderWrapperStyle>
        <LeftArrow previousSlide={this.previousSlide} index={index} />
        <RightArrow nextSlide={this.nextSlide} index={index} limit={children.length} />
      </SliderContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
};

type State = {
  translateValue: number,
  index: number,
};

export default Slider;
