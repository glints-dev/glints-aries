import * as React from 'react';

import classNames from 'classnames';

import TabPane, { Props as TabPaneProps } from './TabPane';

import {
  TabsContainer,
  TabsHeader,
  TabsBody,
} from '../../Style/Display/TabsStyle';

const Tabs: Tabs = ({activeTab, onTabClick, children, className}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const activeTabOrIndex: any = activeTab || currentIndex;
  const onClick = onTabClick || setCurrentIndex;

  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray[activeTabOrIndex];

  const handleTabClick = (tab: any) => {
    const listener = () => onClick(tab);
    return listener;
  };

  return (
    <TabsContainer className={classNames('aries-tabs', className)}>
      <TabsHeader className="tabs-header">
        <ul className="tabs-list" role="tablist">
          {React.Children.map(children, (data: React.ReactElement<TabPaneProps>, index) => {
            const tabLabel = data.props.label || index;
            return(
            <li
              className={classNames(`tab-${tabLabel}`, { active: activeTabOrIndex === tabLabel })}
              key={data.props.tab}
              role="tab"
              aria-selected={activeTabOrIndex === tabLabel && true}
              aria-controls={`tab-item-${tabLabel}`}
              tabIndex={-1}
            >
              <button
                type="button"
                onClick={handleTabClick(tabLabel)}
              >
                {data.props.tab}
              </button>
            </li>
          )})}
        </ul>
      </TabsHeader>
      <TabsBody className="tabs-body" tabIndex={0}>
        <TabPane
          className={classNames('tabs-item', `tab-item-${activeTabOrIndex}`)}
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
}

type Tabs = React.FunctionComponent<Props> & {
  Pane: typeof TabPane;
}

Tabs.Pane = TabPane;

interface Props {
  children: React.ReactNode;
  activeTab?: string;
  onTabClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  className?: string;
}

export default Tabs;
