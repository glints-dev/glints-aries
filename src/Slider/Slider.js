/* @flow */
import React, { Component } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import { SliderContainer, SliderWrapperStyle, SliderItemStyle } from '../Style/SliderStyle';
import { Blockquote, BlockquoteProfileWrapper, BlockquoteContent, Testimony, Author, Origin } from '../Blockquote';
import ProfilePicture from '../ProfilePicture';

class Slider extends Component <Props, State> {
  state = {
    translateValue: 0,
    index: 1,
  };

  previousSlide = () => {
    if(this.state.index === 1) {
      return null;
    }else {
      this.setState({ 
        index: this.state.index - 1,
        translateValue: this.state.translateValue + this.getWidth(),
      });
    }
  }

  nextSlide = () => {
    if(this.state.index === this.getLength()) {
      return null;
    }else {
      this.setState({ 
        index: this.state.index + 1,
        translateValue: this.state.translateValue - this.getWidth(),
      });
    }
  }
  
  getWidth = () => { return document.querySelector('.item').clientWidth }
  getLength = () => { return document.getElementsByClassName("item").length }

  render() {
    const { 
      children, 
      className 
    } = this.props;
    
    return (
      <SliderContainer className={className}>
        <SliderWrapperStyle style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
          { children }
        </SliderWrapperStyle>
        <LeftArrow previousSlide={this.previousSlide} index={this.state.index} />
        <RightArrow nextSlide={this.nextSlide} index={this.state.index} limit={this.getLength()}/>  
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
