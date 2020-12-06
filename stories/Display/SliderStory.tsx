/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Slider from '../../src/Display/Slider';
import { ScreenSize } from '../../src/Utils/StyleConfig';

// References: https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/src/useMediaQuery.js
export const useMediaQuery = (mediaQuery: string) => {
  if (!('matchMedia' in window)) {
    return null;
  }

  const [isVerified, setIsVerified] = React.useState(
    Boolean(window.matchMedia(mediaQuery).matches)
  );

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () =>
      setIsVerified(Boolean(mediaQueryList.matches));

    /*
      MediaQueryList.addEventListener() is not supported on iOS browser, so we
      need to use addListener instead, even it is marked as deprecated.
    */
    mediaQueryList.addListener(documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [mediaQuery]);

  return isVerified;
};

const props = {
  Slider: [
    {
      name: 'initialItem',
      type: 'number',
      defaultValue: '1',
      possibleValue: 'index of item',
      require: 'no',
      description:
        'Sets initial item to show. Index starts from 1 until so on.',
    },
    {
      name: 'fullContent',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets content to fill all area.',
    },
    {
      name: 'arrowWhite',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Changes arrow color to white.',
    },
    {
      name: 'removeDots',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Remove dots.',
    },
    {
      name: 'autoplay',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets slider to slide automatically.',
    },
    {
      name: 'afterChange',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Gets current index of item.',
    },
  ],
};

const mobileImagePath =
  'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/images/expert-class/1202-mobile.png';
const desktopImagePath =
  'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/images/expert-class/1202-desktop.png';

const SliderStory = () => {
  const isDesktop = useMediaQuery(`(min-width: ${ScreenSize.tablet}px)`);
  const imagePath = isDesktop ? desktopImagePath : mobileImagePath;

  return (
    <StorybookComponent
      propsObject={props}
      usage={`getCurrentIndex = (index) => {
  console.log(index);
}

<Slider
  afterChange={this.getCurrentIndex}
  autoplay
>
  <Slider.Item>
    <Component />
    <Component />
  </Slider.Item>
  <Slider.Item>
    <Component />
  </Slider.Item>
</Slider>`}
    >
      <Slider autoplay fullContent>
        <Slider.Item>
          <img src={imagePath} alt="1" />
        </Slider.Item>
        <Slider.Item>
          <img src={imagePath} alt="2" />
        </Slider.Item>
        <Slider.Item>
          <img src={imagePath} alt="3" />
        </Slider.Item>
      </Slider>
    </StorybookComponent>
  );
};
export default SliderStory;
