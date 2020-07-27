import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Gallery from './Gallery';

const Component = ({
  initialVisibility,
  imagesDisplayed,
  galleryRef,
}: {
  initialVisibility?: boolean;
  imagesDisplayed?: number;
  galleryRef?: React.RefObject<Gallery>;
}) => (
  <Gallery
    ref={galleryRef}
    initialVisibility={initialVisibility}
    imagesDisplayed={imagesDisplayed}
  >
    <img src="1" />
    <img src="2" />
    <img src="3" />
    <img src="4" />
    <img src="5" />
    <img src="6" />
    <img src="7" />
    <img src="8" />
    <img src="9" />
    <img src="10" />
  </Gallery>
);

const GalleryItemLessThanDefaultImagesDisplayed = () => (
  <Gallery>
    <img src="1" />
  </Gallery>
);

describe('<Gallery /> focus', () => {
  it('Slider should be focused when Modal is open', () => {
    render(<Component />);
    const item = document.querySelectorAll('.gallery-item')[0];
    userEvent.click(item);
    const slider = document.querySelector('.aries-slider');
    expect(slider).toHaveFocus();
  });
});

describe('<Gallery /> rendering', () => {
  it('should match snapshot when slider is not shown', () => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when slider is shown', () => {
    const { asFragment } = render(<Component initialVisibility={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when imagesDisplayed is set', () => {
    const { asFragment } = render(<Component imagesDisplayed={3} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when item is less than defaultImagesDisplayed', () => {
    const { asFragment } = render(
      <GalleryItemLessThanDefaultImagesDisplayed />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Gallery /> open and close Slider modal', () => {
  it('should show slider modal when a gallery item is clicked', () => {
    render(<Component />);
    const item = document.querySelectorAll('.gallery-item')[0];
    expect(document.querySelector('.aries-slider')).not.toBeInTheDocument();
    userEvent.click(item);
    expect(document.querySelector('.aries-slider')).toBeVisible();
  });

  it('should close slider modal when close button is clicked', () => {
    render(<Component initialVisibility={true} />);
    expect(document.querySelector('.aries-slider')).toBeVisible();
    const closeButton = screen.queryByTestId('close-button');
    userEvent.click(closeButton);
    expect(document.querySelector('.aries-slider')).not.toBeInTheDocument();
  });
});

describe('<Gallery /> active item', () => {
  test('click on gallery item', () => {
    const { asFragment } = render(<Component />);
    const itemIndex = 3;
    const item = document.querySelectorAll('.gallery-item')[itemIndex];
    userEvent.click(item);
    const thumbnails = screen.queryAllByTestId('gallery_thumbnail');
    expect(thumbnails[itemIndex]).toHaveClass('active');
    expect(asFragment()).toMatchSnapshot();
  });

  test('click on gallery thumbnail', () => {
    const { asFragment } = render(<Component initialVisibility={true} />);
    const thumbnails = screen.queryAllByTestId('gallery_thumbnail');
    expect(thumbnails[0]).toHaveClass('active');

    const thumbnailIndex = 3;
    const thumbnail = thumbnails[thumbnailIndex];
    userEvent.click(thumbnail);
    expect(thumbnails[thumbnailIndex]).toHaveClass('active');
    expect(asFragment()).toMatchSnapshot();
  });

  test('click on slider next button', () => {
    render(<Component />);
    const itemIndex = 3;
    const item = document.querySelectorAll('.gallery-item')[itemIndex];
    userEvent.click(item);

    const nextButton = screen.queryByTestId('slider_right-arrow');
    userEvent.click(nextButton);

    const thumbnails = screen.queryAllByTestId('gallery_thumbnail');
    expect(thumbnails[itemIndex + 1]).toHaveClass('active');
  });

  test('click on slider prev button', () => {
    render(<Component />);
    const itemIndex = 3;
    const item = document.querySelectorAll('.gallery-item')[itemIndex];
    userEvent.click(item);

    const prevButton = screen.queryByTestId('slider_left-arrow');
    userEvent.click(prevButton);

    const thumbnails = screen.queryAllByTestId('gallery_thumbnail');
    expect(thumbnails[itemIndex - 1]).toHaveClass('active');
  });
});

// TODO: Update this test case when Slider or Gallery being converted to
// functional component
describe('<Gallery /> Slider should have correct translateX to render active slide correctly', () => {
  test('when click on gallery item', () => {
    const ref = React.createRef<Gallery>();
    const { rerender } = render(<Component galleryRef={ref} />);
    const sliderWrapperWidth = 500;
    const itemIndex = 3;
    const item = document.querySelectorAll('.gallery-item')[itemIndex];
    userEvent.click(item);

    ref.current.sliderRef.current.getSliderContainerDOMNode = () => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      getBoundingClientRect: () => ({
        width: sliderWrapperWidth,
      }),
    });

    rerender(<Component galleryRef={ref} />);
    expect(document.querySelector('.slider-wrapper')).toHaveStyle(
      `transform: translateX(-${sliderWrapperWidth * itemIndex}px)`
    );
  });
});
