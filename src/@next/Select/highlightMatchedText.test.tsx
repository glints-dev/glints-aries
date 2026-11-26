import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { highlightMatchedText } from './highlightMatchedText';

describe('highlightMatchedText', () => {
  const options = [
    { label: 'Indonesia', value: 'ID' },
    { label: <span>Node</span>, value: 'NODE' },
  ];

  test('returns options unchanged when search is empty', () => {
    expect(highlightMatchedText(options, '')).toBe(options);
  });

  test('bolds every case-insensitive match and keeps the full text', () => {
    const [indonesia] = highlightMatchedText(options, 'ia');
    const { container } = render(<>{indonesia.label}</>);
    expect(container).toHaveTextContent('Indonesia');
    expect(container.querySelectorAll('span')).toHaveLength(1);
    expect(container.querySelector('span')).toHaveTextContent('ia');

    const [upper] = highlightMatchedText(options, 'IN');
    const { container: c2 } = render(<>{upper.label}</>);
    expect(c2.querySelector('span')).toHaveTextContent('In');
  });

  test('escapes regex characters and skips non-string labels', () => {
    const [indonesia, node] = highlightMatchedText(options, '(');
    expect(indonesia.label).toEqual(['Indonesia']);
    expect(node).toBe(options[1]);
  });
});
