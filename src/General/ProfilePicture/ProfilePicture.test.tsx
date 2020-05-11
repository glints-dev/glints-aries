import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import ProfilePicture from './ProfilePicture';

describe('<ProfilePicture/> snapshots with prop editable', () => {
  const matchSnapshotWithPropEditable = (editable: boolean) => {
    test(`editable ${editable}`, () => {
      const { asFragment } = render(
        <ProfilePicture editable={editable}>
          <img src="/mock.jpg" />
        </ProfilePicture>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  [true, false].forEach(editable => matchSnapshotWithPropEditable(editable));
});

describe('<ProfilePicture/> snapshots with mouse event', () => {
  test('mouseenter and mouseleave when is editable', () => {
    const { asFragment, queryByRole } = render(
      <ProfilePicture editable={true}>
        <img src="/mock.jpg" />
      </ProfilePicture>
    );

    const container = queryByRole('button');
    fireEvent.mouseEnter(container);
    expect(asFragment()).toMatchSnapshot();
    fireEvent.mouseLeave(container);
    expect(asFragment()).toMatchSnapshot();
  });

  test('mouseenter and mouseleave when is not editable', () => {
    const { asFragment, queryByRole } = render(
      <ProfilePicture editable={false}>
        <img src="/mock.jpg" />
      </ProfilePicture>
    );

    const container = queryByRole('presentation');
    fireEvent.mouseEnter(container);
    expect(asFragment()).toMatchSnapshot();
    fireEvent.mouseLeave(container);
    expect(asFragment()).toMatchSnapshot();
  });
});
