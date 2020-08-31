import 'jest-styled-components';
import { render } from '@testing-library/react';
import * as React from 'react';

import PointingModal from './PointingModal';

const TestPointingModal = (
  <PointingModal>
    <PointingModal.Header>test 0</PointingModal.Header>
    <PointingModal.Body>
      <PointingModal.Item>test 1</PointingModal.Item>
      <PointingModal.Item>test 2</PointingModal.Item>
      <PointingModal.Item>test 3</PointingModal.Item>
    </PointingModal.Body>
    <PointingModal.Footer>test4</PointingModal.Footer>
  </PointingModal>
);

describe('<Slider/>', () => {
  it(`should match snapshot`, () => {
    const { asFragment } = render(TestPointingModal);
    expect(asFragment()).toMatchSnapshot();
  });
});
