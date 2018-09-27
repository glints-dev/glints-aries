/* @flow */

import React, { Component } from 'react';
import Modal from '../../Display/Modal';
import Slider from '../../Display/Slider';
import {
  Container, Wrapper, ItemWrapper, ImageWrapper, ThumbnailWrapper,
} from '../../Style/GalleryStyle';

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
      <Container>
        <Wrapper>
          { children.slice(0, 8).map((data, index) => (
            <ItemWrapper key={index} imageLeft={imageLeft} onClick={() => this.handleClick(index)}>
              <img src={data.props.src} alt={index} />
            </ItemWrapper>
          ))}
        </Wrapper>
        <Modal
          visibility={visible}
          close={this.closeModal}
          closeWithESC={this.closeWithESC}
          hideContentArea
        >
          <Slider showItem={currentIndex + 1}>
            { children.map((data, index) => (
              <Slider.Item>
                <ImageWrapper>
                  <img src={data.props.src} key={index} alt={index} />
                </ImageWrapper>
              </Slider.Item>
            ))}
          </Slider>
          <ThumbnailWrapper>
            { children.map((data, index) => (
              <div key={index} onClick={() => this.handleClickThumbs(index)}>
                <img
                  src={data.props.src}
                  alt={index}
                  className={index === currentIndex && 'active'}
                />
              </div>
            ))}
          </ThumbnailWrapper>
        </Modal>
      </Container>
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
