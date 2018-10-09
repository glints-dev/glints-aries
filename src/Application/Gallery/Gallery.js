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

  handleClick = (index) => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
      currentIndex: index,
    });
  }

  handleClickThumbs = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  closeModal = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  }

  closeWithESC = () => {
    this.setState({ visible: false });
  }

  componentDidMount() {
    const { children } = this.props;

    if (children.length > 8) {
      this.setState({ imageLeft: children.length - 8 });
    }
  }

  render() {
    const { children } = this.props;
    const { visible, currentIndex, imageLeft } = this.state;

    return (
      <GalleryContainer>
        <GalleryItemWrapper>
          { children.slice(0, 8).map((data, index) => (
            <GalleryItem key={index} imageLeft={imageLeft} onClick={() => this.handleClick(index)}>
              <img src={data.props.src} alt={index} />
            </GalleryItem>
          ))}
        </GalleryItemWrapper>
        <Modal
          isVisible={visible}
          onClose={this.closeModal}
          onCloseWithESC={this.closeWithESC}
          hideContentArea
        >
          <Slider initialItem={currentIndex + 1}>
            { children.map((data, index) => (
              <Slider.Item>
                <GalleryImageWrapper>
                  <img src={data.props.src} key={index} alt={index} />
                </GalleryImageWrapper>
              </Slider.Item>
            ))}
          </Slider>
          <GalleryThumbnailWrapper>
            { children.map((data, index) => (
              <div key={index} onClick={() => this.handleClickThumbs(index)}>
                <img
                  src={data.props.src}
                  alt={index}
                  className={index === currentIndex && 'active'}
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
  visible?: boolean,
  currentIndex?: number,
  imageLeft?: number,
};

export default Gallery;
