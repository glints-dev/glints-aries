import * as React from 'react';

import classNames from 'classnames';

import { EHorizontalTabVariant, ETabColourVariant } from '../../Utils/StyleConfig';
import TabPane, { Props as TabPaneProps } from './TabPane';

import { TabsContainer, TabsHeader, TabsBody } from './TabsStyle';

const Tabs: Tabs = ({
  activeTab,
  onTabClick,
  children,
  variant = 'underlined',
  className,
  alignment = 'horizontal',
  colour = ETabColourVariant.BLACK,
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
        colour={colour}
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

interface Props {
  children: React.ReactNode;
  variant?: EHorizontalTabVariant;
  alignment?: string;
  activeTab?: string | number;
  onTabClick?(tab: React.ReactText | React.ReactNode): void;
  className?: string;
  colour?: ETabColourVariant;
}

export default Tabs;
