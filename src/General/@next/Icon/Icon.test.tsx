import * as React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as Blue from '../../../Utils/@next/colors/blue';

import { Icon } from './Icon';
import styled from 'styled-components';

describe('<Icon />', () => {
  const iconName = 'ri-account-circle-fill';

  test('resize based on passed height prop', () => {
    const height = 24;
    render(<Icon name={iconName} height={height} />);

    const svg = document.querySelector('svg');

    expect(svg).toHaveStyle({ height });
  });

  test('resize based on passed height from styled-component', () => {
    const customStyle = 'height: 24px';
    const StyledIcon = styled(Icon)`
      ${customStyle}
    `;
    render(<StyledIcon name={iconName} />);

    const svg = document.querySelector('svg');

    expect(svg).toHaveStyle(customStyle);
  });

  test('renders color based on fill prop', () => {
    render(<Icon name={iconName} height={24} fill={Blue.Brand} />);
    const svg = document.querySelector('svg');

    expect(svg).toHaveAttribute('fill', Blue.Brand);
  });
});
