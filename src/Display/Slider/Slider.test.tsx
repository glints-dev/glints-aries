import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, wait, fireEvent } from '@testing-library/react';
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

describe('<Slider/> prop className', () => {
  const matchSnapshot = (className: string) => {
    it(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(<SliderComponent className={className} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(className => matchSnapshot(className));
});

describe('<Slider/> prop initialItem', () => {
  const matchSnapshot = (initialItem: number) => {
    it(`should match snapshot when initialItem ${initialItem} is passed`, async () => {
      const sliderRef: any = {
        current: null,
      };
      const { rerender, asFragment } = render(
        <Slider ref={sliderRef} initialItem={initialItem}>
          <Slider.Item>a</Slider.Item>
          <Slider.Item>b</Slider.Item>
          <Slider.Item>c</Slider.Item>
        </Slider>
      );

      const index = initialItem > 0 ? initialItem - 1 : 0;
      await wait(() => {
        expect(
          document.querySelectorAll('li')[index].classList.contains('active')
        ).toBeTruthy();
      });

      // mock getSliderContainerDOMNode to calculate translateX
      sliderRef.current.getSliderContainerDOMNode = () => ({
        getBoundingClientRect: () => ({
          width: 500,
        }),
      });

      rerender(
        <Slider ref={sliderRef} initialItem={initialItem}>
          <Slider.Item>a</Slider.Item>
          <Slider.Item>b</Slider.Item>
          <Slider.Item>c</Slider.Item>
        </Slider>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  [0, 1, 2, 3].forEach(initialItem => matchSnapshot(initialItem));
});

describe('<Slider/> prop fullContent', () => {
  const matchSnapshot = (fullContent: boolean) => {
    it(`should match snapshot when fullContent ${fullContent} is passed`, async () => {
      const { asFragment } = render(
        <SliderComponent fullContent={fullContent} />
      );
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
      expect(asFragment()).toMatchSnapshot();
    });
  };

  [true, false].forEach(removeDots => matchSnapshot(removeDots));
});

describe('<Slider/> prop autoplay', () => {
  it(`should go to next slide after 6000ms when autoplay is truthy`, () => {
    jest.useFakeTimers();
    const { asFragment } = render(<SliderComponent autoplay={true} />);

    // validate initial active slide
    expect(
      document.querySelectorAll('li')[0].classList.contains('active')
    ).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();

    // validate autoplay
    jest.advanceTimersByTime(6000);
    expect(
      document.querySelectorAll('li')[1].classList.contains('active')
    ).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it(`should go to the first slide after 6000ms when autoplay is truthy and the current slide is the last slide`, () => {
    jest.useFakeTimers();
    const { asFragment } = render(
      <SliderComponent autoplay={true} initialItem={3} />
    );

    // validate initial active slide
    expect(
      document.querySelectorAll('li')[2].classList.contains('active')
    ).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();

    // validate autoplay
    jest.advanceTimersByTime(6000);
    expect(
      document.querySelectorAll('li')[0].classList.contains('active')
    ).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
  });

  it(`should not go to next slide after 6000ms when autoplay is falsy`, () => {
    jest.useFakeTimers();
    const { asFragment } = render(<SliderComponent autoplay={false} />);

    // validate initial active slide
    expect(
      document.querySelectorAll('li')[0].classList.contains('active')
    ).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();

    // validate autoplay
    jest.advanceTimersByTime(6000);
    expect(
      document.querySelectorAll('li')[0].classList.contains('active')
    ).toBeTruthy();
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
    expect(afterChange).not.toBeCalled();
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

describe('<Slider/> keydown event', () => {
  test(`when active slide is the first slide`, () => {
    render(<SliderComponent />);

    const sliderContainer = document.querySelector('.aries-slider');
    fireEvent.focus(sliderContainer);
    fireEvent.keyDown(sliderContainer, { key: 'right arrow', keyCode: 39 });
    expect(
      document.querySelectorAll('li')[1].classList.contains('active')
    ).toBeTruthy();
    fireEvent.keyDown(sliderContainer, { key: 'left arrow', keyCode: 37 });
    expect(
      document.querySelectorAll('li')[0].classList.contains('active')
    ).toBeTruthy();
  });
});

describe('<Slider/> unmount', () => {
  it(`should removeEventListener and clearInterval`, () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const clearIntervalSpy = jest.spyOn(window, 'clearInterval');
    const sliderRef: React.LegacyRef<Slider> = { current: null };
    const { unmount } = render(
      <Slider ref={sliderRef}>
        <Slider.Item>a</Slider.Item>
        <Slider.Item>b</Slider.Item>
        <Slider.Item>c</Slider.Item>
      </Slider>
    );
    const setSize = sliderRef.current.setSize;
    const interval = sliderRef.current.interval;
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', setSize);
    expect(clearIntervalSpy).toHaveBeenLastCalledWith(interval);
  });
});

describe('<Slider/> setSize', () => {
  test(`setSize should be called when resize event is triggered`, () => {
    const sliderRef: any = {
      current: null,
    };
    const { asFragment } = render(
      <Slider ref={sliderRef} initialItem={2}>
        <Slider.Item>a</Slider.Item>
        <Slider.Item>b</Slider.Item>
        <Slider.Item>c</Slider.Item>
      </Slider>
    );

    sliderRef.current.getSliderContainerDOMNode = () => ({
      getBoundingClientRect: () => ({
        width: 1000,
      }),
    });

    fireEvent(window, new Event('resize'));
    expect(asFragment()).toMatchSnapshot();
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
