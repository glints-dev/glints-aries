import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Collapsible from './Collapsible';

const defaultCollapsible = <Collapsible label="label">children</Collapsible>;

const closedCollapsible = (
  <Collapsible label="label" isOpen={false}>
    children
  </Collapsible>
);

const openCollapsible = (
  <Collapsible label="label" isOpen={true}>
    children
  </Collapsible>
);

const setupCollapsible = () => {
  const { getByRole, getByTestId } = render(defaultCollapsible);
  return {
    header: getByRole('tab'),
    container: getByTestId('collapsible-container'),
    body: getByTestId('collapsible-content'),
  };
};

function createNodeMock(element: any) {
  if (element.type === 'div') {
    return {
      contains: jest.fn(),
    };
  }
  return null;
}

describe('<Collapsible>', () => {
  it('should render as expected', () => {
    const options = { createNodeMock };
    const closedCollapsibleSnapshot = renderer
      .create(closedCollapsible, options)
      .toJSON();
    expect(closedCollapsibleSnapshot).toMatchSnapshot();

    const openCollapsibleSnapshot = renderer
      .create(openCollapsible, options)
      .toJSON();
    expect(openCollapsibleSnapshot).toMatchSnapshot();
  });

  it('should be open by default', () => {
    const { header } = setupCollapsible();
    expect(header).toHaveAttribute('aria-expanded', 'true');
  });

  it('should close on click', () => {
    const { header, container } = setupCollapsible();
    fireEvent.click(container);
    expect(header).toHaveAttribute('aria-expanded', 'false');
  });

  it('should open on second click', () => {
    const { header, container } = setupCollapsible();
    fireEvent.click(container);
    fireEvent.click(container);
    expect(header).toHaveAttribute('aria-expanded', 'true');
  });

  it('should not propagate click events from CollapsibleBody', () => {
    const { body } = setupCollapsible();
    const mockEventListener = jest.fn();
    window.addEventListener('click', mockEventListener);
    fireEvent.click(body);
    expect(mockEventListener).not.toHaveBeenCalled();
  });
});
