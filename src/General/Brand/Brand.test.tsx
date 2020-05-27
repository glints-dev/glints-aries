import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';

import Brand from './Brand';

describe('<Brand/> ', () => {
  it('should render as expected', () => {
    const blackLogoSnapshot = renderer
      .create(<Brand asset="glints-black" />)
      .toJSON();
    expect(blackLogoSnapshot).toMatchSnapshot();
    const white = renderer.create(<Brand asset="glints-white" />).toJSON();
    expect(white).toMatchSnapshot();
    const cutsom = renderer
      .create(<Brand asset="http://example.com/example.jpg" />)
      .toJSON();
    expect(cutsom).toMatchSnapshot();
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
