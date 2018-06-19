/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

jest.mock('uikit-manifest');
jest.mock('react-dom', () => ({
  findDOMNode: () => {},
}));
import UikitManifest from 'uikit-manifest';

import IntroStories from '../../stories/IntroStory';

// import UikitProvider from '../../src/Provider';

test('Render Intor story correctly', () => {
  const mockUikitManifest = UikitManifest.getManifest();
  const tree = renderer
    .create(
      <IntroStories />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
