import * as React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Tag from './Tag';

const children = 'Glints Aries';

describe('When <Tag /> variant prop is', () => {
  describe('"action"', () => {
    describe('and action prop is "add"', () => {
      it('should match snapshot', () => {
        const { asFragment } = render(
          <Tag variant="action" action="add" onClick={() => alert('Clicked!')}>
            Add
          </Tag>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('and action is "reset"', () => {
      it('should match snapshot', () => {
        const { asFragment } = render(
          <Tag variant="action" action="reset">
            {children}
          </Tag>
        );
        expect(asFragment()).toMatchSnapshot();
      });
    });

    describe('and action is undefined', () => {
      it('should match snapshot', () => {
        const { asFragment } = render(<Tag variant="action">{children}</Tag>);
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  describe('"button"', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Tag variant="button">{children}</Tag>);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('undefined', () => {
    it('should match snapshot', () => {
      const { asFragment } = render(<Tag>{children}</Tag>);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
