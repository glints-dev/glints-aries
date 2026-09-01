import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StyledTooltip } from './TooltipStyle';

describe('StyledTooltip motion', () => {
  test('uses the soft-scale animation for entry and exit', () => {
    const sheet = new ServerStyleSheet();

    renderToString(
      sheet.collectStyles(<StyledTooltip className="closed-animation" />)
    );

    const css = sheet.getStyleTags();
    sheet.seal();

    expect(css).toContain('240ms cubic-bezier(0.2,1.45,0.4,1)');
    expect(css).toContain('120ms ease-in');
    expect(css).toContain('scale:0.88');
    expect(css).toContain('scale:none');
    expect(css).toContain('scale:0.96');
    expect(css).toContain('@media (prefers-reduced-motion:reduce)');
  });
});
