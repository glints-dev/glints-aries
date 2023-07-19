import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import * as React from 'react';

import Slider, { Props } from './Slider';
import { Greyscale } from '../../Utils/Colors';

const mockContainer = (width: number) => {
  const boundingRect = { width };
  const element = document.createElement('div');
  element.getBoundingClientRect = () => boundingRect as DOMRect;
  return { current: element };
};

type SliderComponentProp = Omit<Props, 'children'>;
const SliderComponent = (props: SliderComponentProp) => (
  <Slider {...props}>
    <Slider.Item>a</Slider.Item>
    <Slider.Item>b</Slider.Item>
    <Slider.Item>c</Slider.Item>
  </Slider>
);

describe('<Slider/> prop className', () => {
  const matchSnapshot = (className: string) => {
    it(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(<SliderComponent className={className} />);
      // validate class name from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(matchSnapshot);
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

      const index = initialItem > 0 ? initialItem - 1 : 0;
      const theThreeNavigationDots = document.querySelectorAll('li');

      // wait setState in componentDidMount to set active dot
      await waitFor(() => {
        expect(
          theThreeNavigationDots[index].classList.contains('active')
        ).toBeTruthy();
      });

      // validate translateX from snapshot
      expect(asFragment()).toMatchSnapshot();

      useRefSpy.mockRestore();
    });
  };

  [1, 2, 3].forEach(initialItem => matchSnapshot(initialItem));
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
    act(() => {
      jest.advanceTimersByTime(6000);
    });
    expect(theThreeNavigationDots[1].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it(`should go to the first slide after 6000ms when autoplay is truthy and the current slide is the last slide`, () => {
    jest.useFakeTimers();
    const { asFragment } = render(
      <SliderComponent autoplay={true} initialItem={3} />
    );
    const theThreeNavigationDots = document.querySelectorAll('li');
    // validate initial active slide
    expect(theThreeNavigationDots[2].classList.contains('active')).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();

    // validate autoplay
    act(() => {
      jest.advanceTimersByTime(6000);
    });
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
    act(() => {
      jest.advanceTimersByTime(6000);
    });
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
    expect(afterChange).toHaveBeenLastCalledWith(2);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(2);
    expect(afterChange).toHaveBeenLastCalledWith(1);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(3);
    expect(afterChange).toHaveBeenLastCalledWith(1);
  });

  test(`when active slide is the middle slide`, () => {
    const afterChange = jest.fn();
    const { queryByTestId } = render(
      <SliderComponent afterChange={afterChange} initialItem={2} />
    );

    const leftArrow = queryByTestId('slider_left-arrow');
    const rightArrow = queryByTestId('slider_right-arrow');
    const firstDot = document.querySelectorAll('li')[0];

    fireEvent.click(leftArrow);
    expect(afterChange).toHaveBeenCalledTimes(1);
    expect(afterChange).toHaveBeenLastCalledWith(1);
    fireEvent.click(rightArrow);
    expect(afterChange).toHaveBeenCalledTimes(2);
    expect(afterChange).toHaveBeenLastCalledWith(2);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(3);
    expect(afterChange).toHaveBeenLastCalledWith(1);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(4);
    expect(afterChange).toHaveBeenLastCalledWith(1);
  });

  test(`when active slide is the last slide`, () => {
    const afterChange = jest.fn();
    const { queryByTestId } = render(
      <SliderComponent afterChange={afterChange} initialItem={3} />
    );

    const leftArrow = queryByTestId('slider_left-arrow');
    const rightArrow = queryByTestId('slider_right-arrow');
    const firstDot = document.querySelectorAll('li')[0];

    fireEvent.click(rightArrow);
    expect(afterChange).not.toHaveBeenCalled();
    fireEvent.click(leftArrow);
    expect(afterChange).toHaveBeenCalledTimes(1);
    expect(afterChange).toHaveBeenLastCalledWith(2);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(2);
    expect(afterChange).toHaveBeenLastCalledWith(1);
    fireEvent.click(firstDot);
    expect(afterChange).toHaveBeenCalledTimes(3);
    expect(afterChange).toHaveBeenLastCalledWith(1);
  });
});

describe('<Slider/> prop renderLeftIcon and renderRightIcon', () => {
  const renderLeftIcon = (disabled: boolean) => {
    const color = disabled ? 'rgba(221, 221, 221, 0.4)' : Greyscale.white;
    return <svg color={color} />;
  };

  const renderRightIcon = (disabled: boolean) => {
    const color = disabled ? 'rgba(221, 221, 221, 0.4)' : Greyscale.white;
    return <svg color={color} />;
  };

  test(`should display the custom icons`, () => {
    const { getByTestId } = render(
      <SliderComponent
        renderLeftIcon={renderLeftIcon}
        renderRightIcon={renderRightIcon}
      />
    );

    expect(getByTestId('slider_left-arrow').children[0]).toContainHTML(
      'svg color="rgba(221, 221, 221, 0.4)'
    );
    expect(getByTestId('slider_right-arrow').children[0]).toContainHTML(
      'svg color="#FFFFFF'
    );
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

describe('<Slider/> setSize', () => {
  test(`setSize should be called when resize event is triggered`, () => {
    const useRefSpy = jest
      .spyOn(React, 'useRef')
      .mockReturnValue(mockContainer(500));
    const { asFragment } = render(
      <Slider initialItem={2}>
        <Slider.Item>a</Slider.Item>
        <Slider.Item>b</Slider.Item>
        <Slider.Item>c</Slider.Item>
      </Slider>
    );

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
