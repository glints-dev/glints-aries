import * as React from 'react';
import * as ReactDOM from 'react-dom';

import classNames from 'classnames';

import { SliderContainer, SliderContentWrapper } from '../../Style/Display/SliderStyle';

import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SliderItem from './SliderItem';

class Slider extends React.Component<Props, State> {
  static Item = SliderItem;

  interval: ReturnType<typeof setTimeout>;
  sliderContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      translateValue: 0,
      screenSize: 0,
      index: 1,
    };
    this.sliderContainerRef = React.createRef();
  }

  previousSlide = () => {
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

    if (index !== React.Children.count(children)) {
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
    
    const windowWidth = this.getSliderContainerDOMNode().getBoundingClientRect().width;
    this.setState({
      screenSize: this.getSliderContainerDOMNode().getBoundingClientRect().width,
      translateValue: -(windowWidth * (index - 1)),
    });
  }

  handleDotClick = (idx: number) => {
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

  handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 37) {
      this.previousSlide();
    } else if (e.keyCode === 39) {
      this.nextSlide();
    }
  }

  getSliderContainerDOMNode() {
    return ReactDOM.findDOMNode(this.sliderContainerRef.current) as Element;
  }

  componentDidMount() {
    const { initialItem, autoplay, children } = this.props;
    const { index, screenSize } = this.state;
    const windowWidth = this.getSliderContainerDOMNode().getBoundingClientRect().width;

    this.setState({
      screenSize: windowWidth,
    });

    if (initialItem !== undefined) {
      if (initialItem > 0 && initialItem <= React.Children.count(children)) {
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
        if (this.state.index != React.Children.count(children)) {
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

  componentWillReceiveProps(nextProps: Props) {
    const windowWidth = this.getSliderContainerDOMNode().getBoundingClientRect().width;

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
        ref={this.sliderContainerRef}
        className={classNames('aries-slider', className)}
        onKeyDown={this.handleKeyDown}
        fullContent={fullContent}
        tabIndex={0}
      >
        <SliderContentWrapper
          className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
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
          limit={React.Children.count(children)}
          arrowWhite={arrowWhite}
        />
        {!removeDots && (
          <ul>
            {React.Children.map(children, (data, idx) => (
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

interface Props {
  children: React.ReactNode;
  className?: string;
  initialItem?: number;
  fullContent?: boolean;
  arrowWhite?: boolean;
  removeDots?: boolean;
  afterChange?: Function;
  autoplay?: boolean;
}

interface State {
  translateValue: number;
  index: number;
  screenSize: number;
}

export default Slider;
