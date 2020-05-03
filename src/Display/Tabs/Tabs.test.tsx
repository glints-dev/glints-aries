import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Tabs from './Tabs';
import { EHorizontalTabVariant } from '../../Utils/StyleConfig';
import { SecondaryColor } from '../../Style/Colors';

describe('<Tabs/> render', () => {
  test('should match snapshot', () => {
    const snapshot = renderer
      .create(
        <Tabs>
          <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
          <Tabs.Pane tab="Company">Glints</Tabs.Pane>
          <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
          <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
        </Tabs>
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

describe('<Tabs/> should render correctly with the alignment prop', () => {
  test('horizontal, when alignment is set horizontal', () => {
    const { getByRole } = render(
      <Tabs alignment="horizontal">
        <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    );
    const tabContainer = getByRole('tablist');
    expect(tabContainer).toHaveStyle('display: flex');
  });
});

describe('<Tabs/> should render correctly with the variant prop', () => {
  test('colored, when alignment is set colored', () => {
    const { getByRole } = render(
      <Tabs alignment="horizontal" variant={EHorizontalTabVariant.COLORED}>
        <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    );
    const tabContainer = getByRole('tablist');
    expect(tabContainer).toHaveStyle(`
      border-top: 1px solid ${SecondaryColor.lightergrey}; 
      border-bottom: 1px solid ${SecondaryColor.lightergrey};
    `);
  });

  test('underlined, when alignment is set underlined', () => {
    const { getByRole } = render(
      <Tabs alignment="horizontal" variant={EHorizontalTabVariant.UNDERLINED}>
        <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    );
    const tabContainer = getByRole('tablist');
    expect(tabContainer).toHaveStyle(
      `border-bottom: 1px solid ${SecondaryColor.lightergrey}`
    );
  });
});

describe('<Tabs/> should render correctly with an active tab item set', () => {
  const inactiveTabIndex = 0;
  const activeTabIndex = 1;
  test('active tab, to be visible when set', () => {
    const { getAllByRole } = render(
      <Tabs activeTab={activeTabIndex}>
        <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
      </Tabs>
    );
    const activeTab = getAllByRole('tab-button');

    expect(activeTab[activeTabIndex]).toHaveStyle('font-weight: bold');
    expect(activeTab[inactiveTabIndex]).not.toHaveStyle('font-weight: bold');
  });
});

describe('<Tabs/> should render correctly when an item is clicked', () => {
  const firstTabIndex = 0;
  const clickedTabIndex = 1;
  test('clicked tab pane should show the correct body and the item should turn active', () => {
    const { getAllByRole, queryByText } = render(
      <Tabs>
        <Tabs.Pane tab="Job">Software Engineer</Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
      </Tabs>
    );
    const tab = getAllByRole('tab-button');

    expect(tab[firstTabIndex]).toHaveStyle('font-weight: bold');
    expect(tab[clickedTabIndex]).not.toHaveStyle('font-weight: bold');

    fireEvent.click(tab[clickedTabIndex]);
    const Job = queryByText('Software Engineering');
    const Company = queryByText('Glints');

    expect(tab[firstTabIndex]).not.toHaveStyle('font-weight: bold');
    expect(tab[clickedTabIndex]).toHaveStyle('font-weight: bold');
    expect(Job).not.toBeInTheDocument();
    expect(Company).toBeVisible();
  });
});
