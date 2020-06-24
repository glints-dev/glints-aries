/* eslint-disable react/no-array-index-key */

import * as React from 'react';

import Modal from '../../Display/Modal';
import Slider from '../../Display/Slider';

import {
  GalleryContainer,
  GalleryItemWrapper,
  GalleryItem,
  GalleryImageWrapper,
  GalleryThumbnailWrapper,
} from './GalleryStyle';

const defaultImagesDisplayed = 8;

class Gallery extends React.Component<Props, State> {
  sliderRef: React.RefObject<Slider>;

  constructor(props: Props) {
    super(props);
    this.state = {
      visible: props.initialVisibility,
      currentIndex: 0,
      imageLeft: 0,
    };
    this.sliderRef = React.createRef();
  }

  closeModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleClick = (index: number) => {
    this.setState({
      visible: true,
      currentIndex: index,
    });
  };

  handleClickThumbs = (index: number) => {
    this.setState({
      currentIndex: index,
    });
  };

  getCurrentIndex = (index: number) => {
    this.setState({
      currentIndex: index - 1,
    });
  };

  componentDidMount() {
    const { children, imagesDisplayed = defaultImagesDisplayed } = this.props;
    if (React.Children.count(children) > imagesDisplayed) {
      this.setState({
        imageLeft: React.Children.count(children) - imagesDisplayed,
      });
    }
    if (this.state.visible) {
      this.sliderRef.current.sliderContainerRef.current.focus();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      !prevState.visible &&
      this.state.visible &&
      this.sliderRef.current &&
      this.sliderRef.current.sliderContainerRef.current
    ) {
      this.sliderRef.current.sliderContainerRef.current.focus();
    }
  }

  render() {
    const { children, imagesDisplayed = defaultImagesDisplayed } = this.props;
    const { visible, currentIndex, imageLeft } = this.state;
    return (
      <GalleryContainer className="aries-gallery">
        <GalleryItemWrapper className="gallery-wrapper">
          {React.Children.toArray(children)
            .slice(0, imagesDisplayed)
            .map((data: React.ReactElement<React.HTMLProps<'img'>>, index) => (
              <GalleryItem
                className="gallery-item"
                key={`${data.props.src}_${index}`}
                imageLeft={imageLeft}
                onClick={() => this.handleClick(index)}
              >
                <img src={data.props.src} alt={index.toString(10)} />
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
            initialItem={currentIndex + 1}
            arrowWhite
            removeDots
            afterChange={this.getCurrentIndex}
            ref={this.sliderRef}
          >
            {React.Children.map(
              children,
              (data: React.ReactElement<React.HTMLProps<'img'>>, index) => (
                <Slider.Item key={`${data.props.src}_${index}`}>
                  <GalleryImageWrapper role="banner" tabIndex={0}>
                    <img
                      src={data.props.src}
                      key={`${data.props.src}_${index}`}
                      alt={index.toString(10)}
                    />
                  </GalleryImageWrapper>
                </Slider.Item>
              )
            )}
          </Slider>
          <GalleryThumbnailWrapper>
            {React.Children.map(
              children,
              (data: React.ReactElement<React.HTMLProps<'img'>>, index) => (
                <div
                  key={`${data.props.src}_${index}`}
                  onClick={() => this.handleClickThumbs(index)}
                >
                  <img
                    src={data.props.src}
                    alt={index.toString(10)}
                    className={index === currentIndex ? 'active' : null}
                  />
                </div>
              )
            )}
          </GalleryThumbnailWrapper>
        </Modal>
      </GalleryContainer>
    );
  }
}

interface Props {
  children?: React.ReactNode;
  imagesDisplayed?: number;
  initialVisibility?: boolean;
}

interface State {
  visible: boolean;
  currentIndex: number;
  imageLeft: number;
}

export default Gallery;
