import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Gallery from './Gallery';

const Component = () => (
  <Gallery>
    <img src="mockImageSrc" />
  </Gallery>
);

describe('<Gallery>', () => {
  it('Slider should be focused when Modal is open', () => {
    render(<Component />);
    const item = document.querySelector('.gallery-item');
    fireEvent.click(item);
    const slider = document.querySelector('.aries-slider');
    expect(slider).toHaveFocus();
  });
});
