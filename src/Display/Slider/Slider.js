/* @flow */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import { SliderContainer, SliderContentWrapper } from '../../Style/Display/SliderStyle';

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

  previousSlide = (e) => {
    const { afterChange } = this.props;
    const { index, translateValue, screenSize } = this.state;

    if (index !== 1) {
      this.setState({
        index: index - 1,
        translateValue: translateValue + screenSize,
      });

      if (afterChange !== undefined) {
        afterChange(index - 1);
      }
    }
  }

  nextSlide = () => {
    const { children, afterChange } = this.props;
    const { index, translateValue, screenSize } = this.state;

    if (index !== children.length) {
      this.setState({
        index: index + 1,
        translateValue: translateValue - screenSize,
      });

      if (afterChange !== undefined) {
        afterChange(index + 1);
      }
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

  handleDotClick = (idx) => {
    const { afterChange } = this.props;
    const { screenSize } = this.state;

    this.setState({
      index: idx + 1,
      translateValue: -(screenSize * idx),
    });

    if (afterChange !== undefined) {
      afterChange(idx + 1);
    }
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      this.previousSlide();
    } else if (e.keyCode === 39) {
      this.nextSlide();
    }
  }

  componentDidMount() {
    const { initialItem, autoplay, children } = this.props;
    const { index, screenSize } = this.state;
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;

    this.setState({
      screenSize: windowWidth,
    });

    if (initialItem !== undefined) {
      if (initialItem > 0 && initialItem <= children.length) {
        this.setState({
          translateValue: -(windowWidth * (initialItem - 1)),
          index: initialItem,
        });
      } else {
        this.setState({
          translateValue: 0,
          index: 1,
        });
      }
    }

    if (autoplay) {
      this.interval = setInterval(() => {
        // eslint-disable-next-line react/destructuring-assignment
        if (this.state.index != this.props.children.length) {
          this.setState(prevState => ({
            index: prevState.index + 1,
            translateValue: -(prevState.screenSize * prevState.index),
          }));
        } else {
          this.setState(() => ({
            index: 1,
            translateValue: -(screenSize * index),
          }));
        }
      }, 6000);
    }
    window.addEventListener('resize', this.setSize);
  }

  componentWillReceiveProps(nextProps) {
    const windowWidth = ReactDOM.findDOMNode(this.sliderContainer).getBoundingClientRect().width;

    this.setState({
      translateValue: -(windowWidth * (nextProps.initialItem - 1)),
      index: nextProps.initialItem,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize);
    clearInterval(this.interval);
  }

  render() {
    const {
      children,
      className,
      fullContent,
      arrowWhite,
      removeDots,
    } = this.props;
    const { translateValue, index } = this.state;

    return (
      <SliderContainer
        ref={(node) => { this.sliderContainer = node; }}
        id="aries-slider"
        className={className}
        onKeyDown={this.handleKeyDown}
        fullContent={fullContent}
        tabIndex="0"
      >
        <SliderContentWrapper
          id="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          { children }
        </SliderContentWrapper>
        <LeftArrow
          previousSlide={this.previousSlide}
          index={index}
          arrowWhite={arrowWhite}
        />
        <RightArrow
          nextSlide={this.nextSlide}
          index={index}
          limit={children.length}
          arrowWhite={arrowWhite}
        />
        {!removeDots && (
          <ul>
            {children.map((data, idx) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                className={idx + 1 === index ? 'active' : null}
                onClick={() => this.handleDotClick(idx)}
                key={idx}
              ></li>
            ))}
          </ul>
        )}
      </SliderContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
  initialItem: number,
  fullContent: boolean,
  arrowWhite: boolean,
  removeDots: boolean,
  afterChange: Function,
  autoplay: boolean,
};

type State = {
  translateValue: number,
  index: number,
  screenSize: number,
};

export default Slider;
