/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import UikitManifest from 'uikit-manifest';
import IntroStories from '../../stories/IntroStory';

jest.mock('uikit-manifest');
jest.mock('react-dom', () => ({
  findDOMNode: () => {},
}));

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
