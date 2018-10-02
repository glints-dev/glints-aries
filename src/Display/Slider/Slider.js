/* @flow */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import { SliderContainer, SliderWrapperStyle } from '../../Style/Display/SliderStyle';

class Slider extends Component <Props, State> {
  constructor() {
    super();
    this.state = {
      translateValue: 0,
      screenSize: 0,
      index: 1,
    };
    this.sliderContainer = null;
  }

  previousSlide = () => {
    const { index, translateValue, screenSize } = this.state;
    if (index !== 1) {
      this.setState({
        index: index - 1,
        translateValue: translateValue + screenSize,
      });
    }
  }

  nextSlide = () => {
    const { index, translateValue, screenSize } = this.state;
    const { children } = this.props;
    if (index !== children.length) {
      this.setState({
        index: index + 1,
        translateValue: translateValue - screenSize,
      });
    }
  }

  setSize = () => {
    const { index } = this.state;
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;
    this.setState({
      screenSize: ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width,
      translateValue: -(windowWidth * (index - 1)),
    });
  }

  componentDidMount() {
    const { showItem, children } = this.props;
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;

    this.setState({
      screenSize: windowWidth,
    });

    if (showItem !== undefined) {
      if (showItem > 0 && showItem <= children.length) {
        this.setState({
          translateValue: -(windowWidth * (showItem - 1)),
          index: showItem,
        });
      } else {
        this.setState({
          translateValue: 0,
          index: 1,
        });
      }
    }

    window.addEventListener('resize', this.setSize);
  }

  componentWillReceiveProps(nextProps) {
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;

    this.setState({
      translateValue: -(windowWidth * (nextProps.showItem - 1)),
      index: nextProps.showItem,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize);
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
  showItem: number,
};

type State = {
  translateValue: number,
  index: number,
  screenSize: number,
};

export default Slider;
