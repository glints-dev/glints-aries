/* eslint-disable react/no-array-index-key */
/* @flow */

import React, { Component } from 'react';

import Modal from '../../Display/Modal';
import Slider from '../../Display/Slider';

import {
  GalleryContainer,
  GalleryItemWrapper,
  GalleryItem,
  GalleryImageWrapper,
  GalleryThumbnailWrapper,
} from '../../Style/Application/GalleryStyle';

class Gallery extends Component <Props, State> {
  state = {
    visible: false,
    currentIndex: 1,
    imageLeft: 0,
  }

  closeModal = () => {
    this.setState({
      visible: false,
    });
  }

  handleClick = (index) => {
    this.setState({
      visible: true,
      currentIndex: index,
    });
  }

  handleClickThumbs = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  getCurrentIndex = (index) => {
    this.setState({
      currentIndex: index - 1,
    });
  }

  componentDidMount() {
    const { children } = this.props;

    if (children.length > 8) {
      this.setState({ imageLeft: children.length - 8 });
    }
  }

  componentDidUpdate(prevProps, nextState) {
    if (!nextState.visible) {
      document.getElementsByClassName('aries-slider')[0].focus();
    }
  }

  componentWillUnmount() {
    document.getElementsByClassName('aries-slider')[0].blur();
  }

  render() {
    const { children } = this.props;
    const { visible, currentIndex, imageLeft } = this.state;

    return (
      <GalleryContainer id="aries-gallery">
        <GalleryItemWrapper id="gallery-wrapper">
          { children.slice(0, 8).map((data, index) => (
            <GalleryItem
              className="gallery-item"
              key={`${data.props.src}_${index}`}
              imageLeft={imageLeft}
              onClick={() => this.handleClick(index)}
            >
              <img src={data.props.src} alt={index} />
            </GalleryItem>
          ))}
        </GalleryItemWrapper>
        <Modal
          isVisible={visible}
          onClose={this.closeModal}
          hideContentArea
          removeAnimation
        >
          <Slider
            className="aries-slider"
            initialItem={currentIndex + 1}
            arrowWhite
            removeDots
            afterChange={this.getCurrentIndex}
          >
            { children.map((data, index) => (
              <Slider.Item key={`${data.props.src}_${index}`}>
                <GalleryImageWrapper
                  role="banner"
                  tabIndex={0}
                >
                  <img src={data.props.src} key={`${data.props.src}_${index}`} alt={index} />
                </GalleryImageWrapper>
              </Slider.Item>
            ))}
          </Slider>
          <GalleryThumbnailWrapper>
            { children.map((data, index) => (
              <div key={`${data.props.src}_${index}`} onClick={() => this.handleClickThumbs(index)}>
                <img
                  src={data.props.src}
                  alt={index}
                  className={index === currentIndex ? 'active' : null}
                />
              </div>
            ))}
          </GalleryThumbnailWrapper>
        </Modal>
      </GalleryContainer>
    );
  }
}

type Props = {
  children?: React$Node,
};

type State = {
  visible: boolean,
  currentIndex: number,
  imageLeft: number,
};

export default Gallery;
