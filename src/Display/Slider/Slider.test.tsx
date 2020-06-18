import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, wait, fireEvent, act } from '@testing-library/react';
import * as React from 'react';

import Slider, { Props } from './Slider';

type SliderComponentProp = Omit<Props, 'children'>;
const SliderComponent = (props: SliderComponentProp) => (
  <Slider {...props}>
    <Slider.Item>a</Slider.Item>
    <Slider.Item>b</Slider.Item>
    <Slider.Item>c</Slider.Item>
  </Slider>
);

const mockContainer = (width: number) => {
  const boundingRect = { width };
  const element = document.createElement('div');
  element.getBoundingClientRect = () => boundingRect as DOMRect;
  return { current: element };
};

describe('<Slider/> prop className', () => {
  const matchSnapshot = (className: string) => {
    it(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(<SliderComponent className={className} />);
      // validate class name from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(className => matchSnapshot(className));
});

describe('<Slider/> prop initialItem', () => {
  const matchSnapshot = (initialItem: number) => {
    it(`should match snapshot when initialItem ${initialItem} is passed`, async () => {
      const useRefSpy = jest
        .spyOn(React, 'useRef')
        .mockReturnValue(mockContainer(400));

      const { asFragment } = render(
        <Slider initialItem={initialItem}>
          <Slider.Item>a</Slider.Item>
          <Slider.Item>b</Slider.Item>
          <Slider.Item>c</Slider.Item>
        </Slider>
      );

      const index = initialItem;
      const theThreeNavigationDots = document.querySelectorAll('li');

      // wait setState in componentDidMount to set active dot
      await wait(() => {
        expect(
          theThreeNavigationDots[index].classList.contains('active')
        ).toBeTruthy();
      });

      expect(asFragment()).toMatchSnapshot();

      useRefSpy.mockRestore();
    });
  };

  [0, 1, 2].forEach(initialItem => matchSnapshot(initialItem));

  it(`should throw when initialItem is out of bounds`, async () => {
    // Silence any errors in the console during this test
    // Otherwise the Slider will throw print his error here, even though the
    // test passes.
    const originalError = console.error;
    console.error = jest.fn();

    const tryToRender = (initialItem: number) =>
      render(
        <Slider initialItem={initialItem}>
          <Slider.Item>a</Slider.Item>
          <Slider.Item>b</Slider.Item>
          <Slider.Item>c</Slider.Item>
        </Slider>
      );

    expect(() => tryToRender(-1)).toThrow();
    expect(() => tryToRender(3)).toThrow();

    console.error = originalError;
  });
});

describe('<Slider/> prop fullContent', () => {
  const matchSnapshot = (fullContent: boolean) => {
    it(`should match snapshot when fullContent ${fullContent} is passed`, async () => {
      const { asFragment } = render(
        <SliderComponent fullContent={fullContent} />
      );
      // validate fullContent style from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  [true, false].forEach(fullContent => matchSnapshot(fullContent));
});

describe('<Slider/> prop arrowWhite', () => {
  const matchSnapshot = (arrowWhite: boolean) => {
    it(`should match snapshot when arrowWhite ${arrowWhite} is passed`, async () => {
      const { asFragment } = render(
        <SliderComponent arrowWhite={arrowWhite} />
      );
      // validate arrow color from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  [true, false].forEach(arrowWhite => matchSnapshot(arrowWhite));
});

describe('<Slider/> prop removeDots', () => {
  const matchSnapshot = (removeDots: boolean) => {
    it(`should match snapshot when removeDots ${removeDots} is passed`, async () => {
      const { asFragment } = render(
        <SliderComponent removeDots={removeDots} />
      );
      // validate dot is not in the snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  [true, false].forEach(removeDots => matchSnapshot(removeDots));
});

describe('<Slider/> prop autoplay', () => {
  it(`should go to next slide after 6000ms when autoplay is truthy`, () => {
    jest.useFakeTimers();
    const { asFragment } = render(<SliderComponent autoplay={true} />);
    const theThreeNavigationDots = document.querySelectorAll('li');
    // validate initial active slide
    expect(theThreeNavigationDots[0].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();

    // validate autoplay
    act(() => jest.advanceTimersByTime(6000));
    expect(theThreeNavigationDots[1].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it(`should go to the first slide after 6000ms when autoplay is truthy and the current slide is the last slide`, () => {
    jest.useFakeTimers();
    const { asFragment } = render(
      <SliderComponent autoplay={true} initialItem={2} />
    );
    const theThreeNavigationDots = document.querySelectorAll('li');
    // validate initial active slide
    expect(theThreeNavigationDots[2].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();

    // validate autoplay
    act(() => jest.advanceTimersByTime(6000));
    expect(theThreeNavigationDots[0].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it(`should not go to next slide after 6000ms when autoplay is falsy`, () => {
    jest.useFakeTimers();
    const { asFragment } = render(<SliderComponent autoplay={false} />);
    const theThreeNavigationDots = document.querySelectorAll('li');
    // validate initial active slide
    expect(theThreeNavigationDots[0].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();

    // validate autoplay
    act(() => jest.advanceTimersByTime(6000));
    expect(theThreeNavigationDots[0].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Slider/> prop afterChange', () => {
  test(`when active slide is the first slide`, () => {
    const afterChange = jest.fn();
    const { queryByTestId } = render(
      <SliderComponent afterChange={afterChange} />
    );

    const leftArrow = queryByTestId('slider_left-arrow');
    const rightArrow = queryByTestId('slider_right-arrow');
    const firstDot = document.querySelectorAll('li')[0];

    fireEvent.click(leftArrow);
    expect(afterChange).not.toBeCalled();
    fireEvent.click(rightArrow);
    expect(afterChange).toHaveBeenCalledTimes(1);
    expect(afterChange).toHaveBeenLastCalledWith(1);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(2);
    expect(afterChange).toHaveBeenLastCalledWith(0);
  });

  test(`when active slide is the middle slide`, () => {
    const afterChange = jest.fn();
    const { queryByTestId } = render(
      <SliderComponent afterChange={afterChange} initialItem={1} />
    );

    const leftArrow = queryByTestId('slider_left-arrow');
    const rightArrow = queryByTestId('slider_right-arrow');
    const firstDot = document.querySelectorAll('li')[0];

    fireEvent.click(leftArrow);
    expect(afterChange).toHaveBeenCalledTimes(1);
    expect(afterChange).toHaveBeenLastCalledWith(0);
    fireEvent.click(rightArrow);
    expect(afterChange).toHaveBeenCalledTimes(2);
    expect(afterChange).toHaveBeenLastCalledWith(1);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(3);
    expect(afterChange).toHaveBeenLastCalledWith(0);
  });

  test(`when active slide is the last slide`, () => {
    const afterChange = jest.fn();
    const { queryByTestId } = render(
      <SliderComponent afterChange={afterChange} initialItem={2} />
    );

    const leftArrow = queryByTestId('slider_left-arrow');
    const rightArrow = queryByTestId('slider_right-arrow');
    const firstDot = document.querySelectorAll('li')[0];

    fireEvent.click(rightArrow);
    expect(afterChange).not.toBeCalled();
    fireEvent.click(leftArrow);
    expect(afterChange).toHaveBeenCalledTimes(1);
    expect(afterChange).toHaveBeenLastCalledWith(1);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(2);
    expect(afterChange).toHaveBeenLastCalledWith(0);
    fireEvent.click(firstDot);
  });
});

describe('<Slider/> keydown event', () => {
  test(`when active slide is the first slide`, () => {
    render(<SliderComponent />);
    const theThreeNavigationDots = document.querySelectorAll('li');

    const sliderContainer = document.querySelector('.aries-slider');
    fireEvent.focus(sliderContainer);
    fireEvent.keyDown(sliderContainer, { key: 'right arrow', keyCode: 39 });
    expect(theThreeNavigationDots[1].classList.contains('active')).toBeTruthy();
    fireEvent.keyDown(sliderContainer, { key: 'left arrow', keyCode: 37 });
    expect(theThreeNavigationDots[0].classList.contains('active')).toBeTruthy();
  });
});

describe('<Slider/> unmount', () => {
  it(`should removeEventListener`, () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = render(
      <Slider>
        <Slider.Item>a</Slider.Item>
        <Slider.Item>b</Slider.Item>
        <Slider.Item>c</Slider.Item>
      </Slider>
    );
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });

  it(`should clear the autoplay Interval`, () => {
    const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
    const { unmount } = render(
      <Slider autoplay={true}>
        <Slider.Item>a</Slider.Item>
        <Slider.Item>b</Slider.Item>
        <Slider.Item>c</Slider.Item>
      </Slider>
    );
    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});

describe('<Slider/> resizing', () => {
  it(`should update the translateX value on window resize`, async () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValue(mockContainer(500));

    const { asFragment } = render(
      <Slider initialItem={1}>
        <Slider.Item>a</Slider.Item>
        <Slider.Item>b</Slider.Item>
        <Slider.Item>c</Slider.Item>
      </Slider>
    );
    expect(asFragment()).toMatchSnapshot();

    useRefSpy.mockReturnValue(mockContainer(400));
    fireEvent(window, new Event('resize'));
    expect(asFragment()).toMatchSnapshot();

    useRefSpy.mockRestore();
  });
});

describe('<Slider/> has null child', () => {
  it(`should match snapshot`, () => {
    const { asFragment } = render(
      <Slider>
        <Slider.Item>a</Slider.Item>
        {null}
      </Slider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
