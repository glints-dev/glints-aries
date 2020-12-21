import * as React from 'react';

import classNames from 'classnames';

import TabPane, { Props as TabPaneProps } from './TabPane';

import { TabsContainer, TabsHeader, TabsBody } from './TabsStyle';

export type Variant = 'underlined' | 'colored';
export type Alignment = 'horizontal' | 'vertical';
export type Theme = 'blue' | 'black';

export const Tabs: Tabs = ({
  activeTab,
  onTabClick,
  children,
  variant = 'underlined',
  className,
  alignment = 'horizontal',
  theme = 'black',
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const activeTabOrIndex: string | number = activeTab || currentIndex;
  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[currentIndex];

  const handleTabClick = (index: number, tab: React.ReactText) => {
    const listener = () => {
      setCurrentIndex(index);
      if (onTabClick) {
        onTabClick(tab);
      }
    };
    return listener;
  };

  return (
    <TabsContainer
      className={classNames(`${alignment}-aries-tabs`, 'aries-tabs', className)}
    >
      <TabsHeader
        className={classNames(`${alignment}-tabs-header`, 'tabs-header')}
        theme={theme}
        alignment={alignment}
      >
        <ul
          className={classNames(
            `${alignment}-tabs-list`,
            'tabs-list',
            `${variant}`
          )}
          role="tablist"
        >
          {React.Children.map(
            children,
            (data: React.ReactElement<TabPaneProps>, index) => {
              const tabLabel = data.props.label || index;
              const tabClassName = data.props.tabClassName || '';
              return (
                <li
                  className={classNames(
                    `tab-${tabLabel}`,
                    { active: activeTabOrIndex === tabLabel },
                    `${alignment}-tab`,
                    `${variant}`,
                    `${tabClassName}`
                  )}
                  key={index}
                  role="tab"
                  aria-selected={activeTabOrIndex === tabLabel && true}
                  aria-controls={`tab-item-${tabLabel}`}
                  tabIndex={-1}
                >
                  <button
                    type="button"
                    onClick={handleTabClick(index, tabLabel)}
                    role="tab-button"
                  >
                    {data.props.tab}
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </TabsHeader>
      <TabsBody className="tabs-body" tabIndex={0}>
        <TabPane
          className={classNames(
            'tabs-item',
            `tab-item-${activeTabOrIndex}`,
            `tabs-item-${alignment}`,
            'tabs-item'
          )}
          role="tabpanel"
          aria-labelledby={`tab-${activeTabOrIndex}`}
          tabIndex={-1}
        >
          {React.isValidElement<TabPaneProps>(currentChild) &&
            currentChild.props.children}
        </TabPane>
      </TabsBody>
    </TabsContainer>
  );
};

type Tabs = React.FunctionComponent<Props> & {
  Pane: typeof TabPane;
};

Tabs.Pane = TabPane;

export interface PropsBase {
  children: React.ReactNode;
  /** Set the change in the color pattern only for Horizontal tabs */
  variant?: Variant;
  /** Sets alignment of Tab. The vertical tabs are changed to horizontal ones for screen size below 768 */
  alignment?: Alignment;
  /** Sets the theme for the tabs in underlined variant */
  theme?: Theme;
  /** Controls the currently active tab (index) */
  activeTab?: string | number;
  /** Called when a tab gets clicked. Called with the index of the tab. */
  onTabClick?(tab: React.ReactText | React.ReactNode): void;
  className?: string;
}

export default Tabs;
