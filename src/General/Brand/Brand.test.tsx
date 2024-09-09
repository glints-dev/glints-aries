import * as React from 'react';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';

import Brand from './Brand';

describe('<Brand/>', () => {
  it('should render as expected', () => {
    const { asFragment: blackLogoAsFragment } = render(
      <Brand asset="glints-black" />
    );
    expect(blackLogoAsFragment()).toMatchSnapshot();
    const { asFragment: whiteLogoAsFragment } = render(
      <Brand asset="glints-white" />
    );
    expect(whiteLogoAsFragment()).toMatchSnapshot();
    const { asFragment: blackTapLokerAsFragment } = render(
      <Brand asset="glints-taploker-black" />
    );
    expect(blackTapLokerAsFragment()).toMatchSnapshot();
    const { asFragment: whiteTapLokerAsFragment } = render(
      <Brand asset="glints-taploker-white" />
    );
    expect(whiteTapLokerAsFragment()).toMatchSnapshot();
    const { asFragment: customLogoAsFragment } = render(
      <Brand asset="http://example.com/example.jpg" />
    );
    expect(customLogoAsFragment()).toMatchSnapshot();
  });

  it('should open the given rightClickUrl', () => {
    delete window.location;
    window.location = {} as Location;

    const url = 'https://glints.com';
    const { getByRole } = render(
      <Brand asset="glints-black" rightClickURL={url} />
    );
    const container = getByRole('presentation');
    fireEvent.contextMenu(container);
    expect(window.location.href).toBe(url);
  });

  it('should call onContextMenu', () => {
    delete window.location;
    window.location = {} as Location;

    const url = 'https://glints.com';
    const onContextMenu = jest.fn();
    const { getByRole } = render(
      <Brand
        asset="glints-black"
        rightClickURL={url}
        onContextMenu={onContextMenu}
      />
    );
    const container = getByRole('presentation');
    expect(onContextMenu).toHaveBeenCalledTimes(0);
    fireEvent.contextMenu(container);
    expect(onContextMenu).toHaveBeenCalledTimes(1);
  });
});
