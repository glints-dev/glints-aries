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

describe('<ToggleSwitch /> prop iconOptions', () => {
  it('should match snapshot when iconOptions is passed', () => {
    const { asFragment } = render(
      <ToggleSwitch
        defaultActive={false}
        iconOptions={{
          active: EyeIcon,
          inactive: EyeSlashedIcon,
        }}
      />
    );
    // validate iconOptions from snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when no iconOptions is passed', () => {
    const { asFragment } = render(<ToggleSwitch defaultActive={false} />);
    // validate iconOptions from snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<ToggleSwitch /> prop active', () => {
  const activeOptions = [false, true];
  const matchSnapshot = (active: boolean) => {
    it(`should match snapshot when active ${active} is passed`, () => {
      const { asFragment } = render(
        <ToggleSwitch
          active={active}
          iconOptions={{
            active: EyeIcon,
            inactive: EyeSlashedIcon,
          }}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  activeOptions.forEach(defaultActive => matchSnapshot(defaultActive));
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
      // validate defaultActive from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  defaultActiveOptions.forEach(defaultActive => matchSnapshot(defaultActive));
});

describe('<ToggleSwitch /> click behavior', () => {
  it('should change aria-checked correctly when it is uncontrolled', () => {
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

  it('should change aria-checked correctly when it is controlled', () => {
    let active = false;
    const onChangeSpy = jest.fn(isActive => {
      active = isActive;
    });

    const { getByRole, rerender } = render(
      <ToggleSwitch
        active={active}
        iconOptions={{
          active: EyeIcon,
          inactive: EyeSlashedIcon,
        }}
        onChange={onChangeSpy}
      />
    );
    const toggleSwitchContainer = getByRole('switch');
    expect(toggleSwitchContainer).toHaveAttribute('aria-checked', 'false');
    expect(active).toEqual(false);

    userEvent.click(toggleSwitchContainer);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);

    // should still be false before re-rendering
    expect(toggleSwitchContainer).toHaveAttribute('aria-checked', 'false');
    expect(active).toEqual(true);

    rerender(<ToggleSwitch active={active} onChange={onChangeSpy} />);
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
