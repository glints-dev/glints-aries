import '@testing-library/jest-dom/extend-expect';

import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EyeIcon, EyeSlashedIcon } from '../../General/Icon/components';
import ToggleSwitch from './ToggleSwitch';

describe('<ToggleSwitch /> prop className', () => {
  const matchSnapshot = (className: string) => {
    it(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(
        <ToggleSwitch
          defaultActive={false}
          iconOptions={{
            active: EyeIcon,
            inactive: EyeSlashedIcon,
          }}
        />
      );
      // validate class name from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(matchSnapshot);
});

describe('<ToggleSwitch /> prop defaultActive', () => {
  const defaultActiveOptions = [false, true];
  const matchSnapshot = (defaultActive: boolean) => {
    it(`should match snapshot when defaultActive ${defaultActive} is passed`, () => {
      const { asFragment } = render(
        <ToggleSwitch
          defaultActive={defaultActive}
          iconOptions={{
            active: EyeIcon,
            inactive: EyeSlashedIcon,
          }}
        />
      );
      // validate icon position from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  defaultActiveOptions.forEach(defaultActive => matchSnapshot(defaultActive));
});

describe('<ToggleSwitch /> click behavior', () => {
  it('should change aria-checked correctly', () => {
    const { getByRole } = render(
      <ToggleSwitch
        defaultActive={false}
        iconOptions={{
          active: EyeIcon,
          inactive: EyeSlashedIcon,
        }}
      />
    );
    const toggleSwitchContainer = getByRole('switch');
    expect(toggleSwitchContainer).toHaveAttribute('aria-checked', 'false');

    userEvent.click(toggleSwitchContainer);
    expect(toggleSwitchContainer).toHaveAttribute('aria-checked', 'true');
  });

  it('should trigger onChange when toggle', () => {
    const onChangeSpy = jest.fn();

    const { getByRole } = render(
      <ToggleSwitch
        defaultActive={false}
        iconOptions={{
          active: EyeIcon,
          inactive: EyeSlashedIcon,
        }}
        onChange={onChangeSpy}
      />
    );
    const toggleSwitchContainer = getByRole('switch');

    userEvent.click(toggleSwitchContainer);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);

    userEvent.click(toggleSwitchContainer);
    expect(onChangeSpy).toHaveBeenCalledTimes(2);
  });
});
