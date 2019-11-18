import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Tag from './Tag';

const children = 'Glints Aries';

it(`<Tag> should render a label with the text "Glints Aries"`, () => {
  const TagSnapshot = renderer.create(<Tag>{children}</Tag>).toJSON();
  expect(TagSnapshot).toMatchSnapshot();
});

it('should display the correct text when rendered', () => {
  const { getByText } = render(<Tag>{children}</Tag>);
  const tagContent = getByText(children);
  expect(tagContent).toBeTruthy();
});

describe('when block is:', () => {
  it('true, it should not have a border-radius property', () => {
    const { getByRole } = render(<Tag block>{children}</Tag>);
    const tagContainer = getByRole('presentation');
    const { borderRadius } = getComputedStyle(tagContainer);
    expect(borderRadius).toBeFalsy();
  });

  it('false, it should have a border-radius property', () => {
    const { getByRole } = render(<Tag>{children}</Tag>);
    const tagContainer = getByRole('presentation');
    const { borderRadius } = getComputedStyle(tagContainer);
    expect(borderRadius).toBeTruthy();
  });
});

describe('when outline is:', () => {
  it('true, should not have a background property', () => {
    const { getByRole } = render(<Tag outline>{children}</Tag>);
    const tagContainer = getByRole('presentation');
    const { background } = getComputedStyle(tagContainer);
    expect(background).toBeFalsy();
  });

  it('false, should have a background property', () => {
    const { getByRole } = render(<Tag>{children}</Tag>);
    const tagContainer = getByRole('presentation');
    const { background } = getComputedStyle(tagContainer);
    expect(background).toBeTruthy();
  });
});
