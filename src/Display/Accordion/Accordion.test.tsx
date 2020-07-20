import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render } from '@testing-library/react';

import Accordion, { IconPosition } from './Accordion';
import userEvent from '@testing-library/user-event';

describe('<Accordion /> prop className', () => {
  const matchSnapshot = (className: string) => {
    test(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(
        <Accordion className={className}>
          <Accordion.Panel
            className={className}
            label="label"
            content="content"
          />
        </Accordion>
      );
      // validate class name from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(matchSnapshot);
});

describe('<Accordion.Panel /> prop iconPosition', () => {
  const iconPositionArray = ['left', 'right'] as IconPosition[];
  const matchSnapshot = (iconPosition: IconPosition) => {
    test(`should match snapshot when iconPosition ${iconPosition} is passed`, () => {
      const { asFragment } = render(
        <Accordion iconPosition={iconPosition}>
          <Accordion.Panel label="label" content="content" />
        </Accordion>
      );
      // validate icon position from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  iconPositionArray.forEach(iconPosition => matchSnapshot(iconPosition));
});

describe('<Accordion /> click behavior', () => {
  test('<Accordion.Panel /> should be open/ close when it is clicked', () => {
    const { queryByText } = render(
      <Accordion>
        <Accordion.Panel label="label" content="content" />
      </Accordion>
    );

    const panelLabel = queryByText('label');
    const panelContent = queryByText('content');
    expect(panelContent).not.toBeVisible();

    userEvent.click(panelLabel);
    expect(panelContent).toBeVisible();

    userEvent.click(panelLabel);
    expect(panelContent).not.toBeVisible();
  });

  test('<Accordion /> should open one panel only', () => {
    const { queryByText } = render(
      <Accordion>
        <Accordion.Panel label="label-1" content="content-1" />
        <Accordion.Panel label="label-2" content="content-2" />
      </Accordion>
    );

    const panelContent1 = queryByText('content-1');
    const panelContent2 = queryByText('content-2');
    expect(panelContent1).not.toBeVisible();
    expect(panelContent2).not.toBeVisible();

    const panelLabel1 = queryByText('label-1');
    userEvent.click(panelLabel1);

    expect(panelContent1).toBeVisible();
    expect(panelContent2).not.toBeVisible();

    const panelLabel2 = queryByText('label-2');
    userEvent.click(panelLabel2);

    expect(panelContent1).not.toBeVisible();
    expect(panelContent2).toBeVisible();
  });
});
