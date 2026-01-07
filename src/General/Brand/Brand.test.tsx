import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';

import Brand from './Brand';

describe('<Brand/>', () => {
  it('should render as expected', () => {
    const white = renderer
      .create(<Brand asset="glints-white" variant="square" />)
      .toJSON();
    expect(white).toMatchSnapshot();
    const whiteTapLoker = renderer
      .create(<Brand asset="glints-taploker-white" variant="square" />)
      .toJSON();
    expect(whiteTapLoker).toMatchSnapshot();
    const cutsom = renderer
      .create(<Brand asset="http://example.com/example.jpg" variant="square" />)
      .toJSON();
    expect(cutsom).toMatchSnapshot();
  });

  it('should open the given rightClickUrl', () => {
    delete window.location;
    window.location = {} as Location;

    const url = 'https://glints.com';
    const { getByRole } = render(
      <Brand asset="glints" rightClickURL={url} variant="square" />
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
        asset="glints"
        rightClickURL={url}
        onContextMenu={onContextMenu}
        variant="square"
      />
    );
    const container = getByRole('presentation');
    expect(onContextMenu).toHaveBeenCalledTimes(0);
    fireEvent.contextMenu(container);
    expect(onContextMenu).toHaveBeenCalledTimes(1);
  });
  it('should render with correct styles based on variant', () => {
    const { container: defaultContainer } = render(<Brand asset="glints" />);
    expect(defaultContainer.querySelector('.brand-image')).toHaveStyleRule(
      'width',
      '5em'
    );

    const { container: horizontalContainer } = render(
      <Brand asset="glints" variant="horizontal" />
    );
    expect(horizontalContainer.querySelector('.brand-image')).toHaveStyleRule(
      'width',
      '5em'
    );

    const { container: squareContainer } = render(
      <Brand asset="glints" variant="square" />
    );
    expect(squareContainer.querySelector('.brand-image')).toHaveStyleRule(
      'width',
      '3em'
    );
  });
});
