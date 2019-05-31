import * as React from 'react';

import TabPane, { Props as TabPaneProps } from './TabPane';

import {
  TabsContainer,
  TabsHeader,
  TabsBody,
} from '../../Style/Display/TabsStyle';

class Tabs extends React.Component<Props, State> {
  static Pane = TabPane;

  constructor(props: Props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleClickTab = (index: number) => {
    const listener = () => {
      this.setState({
        currentIndex: index,
      });
    };
    return listener;
  }

  render() {
    const {
      children,
      className,
    } = this.props;

    const { currentIndex } = this.state;

    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[currentIndex];

    return (
      <TabsContainer id="aries-tabs" className={className}>
        <TabsHeader id="tabs-header">
          <ul id="tabs-list" role="tablist">
            {React.Children.map(children, (data: React.ReactElement<TabPaneProps>, index) => (
              <li
                id={`tab-${index}`}
                key={data.props.tab}
                className={currentIndex === index ? 'active' : undefined}
                role="tab"
                aria-selected={currentIndex === index && true}
                aria-controls={`tab-item-${index}`}
                tabIndex={currentIndex === index ? 0 : -1}
              >
                <button
                  type="button"
                  onClick={this.handleClickTab(index)}
                  tabIndex={-1}
                >
                  {data.props.tab}
                </button>
              </li>
            ))}
          </ul>
        </TabsHeader>
        <TabsBody id="tabs-body" tabIndex={0}>
          <TabPane
            id={`tab-item-${currentIndex}`}
            className="tabs-item"
            role="tabpanel"
            aria-labelledby={`tab-${currentIndex}`}
            tabIndex={-1}
          >
            {React.isValidElement<TabPaneProps>(currentChild) &&
              currentChild.props.children}
          </TabPane>
        </TabsBody>
      </TabsContainer>
    );
  }
}

interface Props {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

interface State {
  currentIndex: number;
}

export default Tabs;
