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

const Gallery = ({
  initialVisibility = false,
  children,
  imagesDisplayed = 8,
}: Props) => {
  const sliderRef = React.useRef<HTMLDivElement>();

  const [visible, setVisible] = React.useState<boolean>(initialVisibility);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [imageLeft, setImageLeft] = React.useState<number>(0);

  const closeModal = () => setVisible(false);

  const handleClick = (index: number) => {
    setVisible(true);
    setCurrentIndex(index);
  };

  const handleClickThumbs = (index: number) => setCurrentIndex(index);

  const getCurrentIndex = (index: number) => setCurrentIndex(index - 1);

  React.useEffect(function componentDidMount() {
    if (React.Children.count(children) > imagesDisplayed)
      setImageLeft(React.Children.count(children) - imagesDisplayed);
  }, []);

  React.useEffect(
    function autoFocus() {
      if (visible && sliderRef.current) sliderRef.current.focus();
    },
    [visible]
  );

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
              onClick={() => handleClick(index)}
            >
              <img src={data.props.src} alt={index.toString(10)} />
            </GalleryItem>
          ))}
      </GalleryItemWrapper>
      <Modal
        isVisible={visible}
        onClose={closeModal}
        hideContentArea
        removeAnimation
      >
        <Slider
          initialItem={currentIndex + 1}
          arrowWhite
          removeDots
          afterChange={getCurrentIndex}
          containerRef={sliderRef}
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
                onClick={() => handleClickThumbs(index)}
              >
                <img
                  data-testid="gallery_thumbnail"
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
};

export interface Props {
  children?: React.ReactNode;
  /** How many thumbnails the (unopened) gallery should show */
  imagesDisplayed?: number;
  /** If true, the Gallery will open itself on mount */
  initialVisibility?: boolean;
}

export default Gallery;
