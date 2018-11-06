/* @flow */

import React, { Component } from 'react';

import TabPane from './TabPane';

import {
  TabsContainer,
  TabsHeader,
  TabsBody,
} from '../../Style/Display/TabsStyle';

class Tabs extends Component <Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleClickTab = (index) => {
    const listener = (e) => {
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

    return (
      <TabsContainer className={className}>
        <TabsHeader>
          <ul role="tablist">
            {children.map((data, index) => (
              <li
                id={`tab-${index}`}
                key={data.props.tab}
                className={currentIndex === index ? 'active' : undefined}
                role="tab"
                aria-selected={currentIndex === index && true}
                aria-controls={`tab-item-${index}`}
                tabIndex={currentIndex === index ? '0' : '-1'}
              >
                <button
                  type="button"
                  onClick={this.handleClickTab(index)}
                  tabIndex="-1"
                >
                  {data.props.tab}
                </button>
              </li>
            ))}
          </ul>
        </TabsHeader>
        <TabsBody tabIndex="0">
          <TabPane
            id={`tab-item-${currentIndex}`}
            className={className}
            role="tabpanel"
            aria-labelledby={`tab-${currentIndex}`}
            tabIndex="-1"
          >
            {children[currentIndex].props.children}
          </TabPane>
        </TabsBody>
      </TabsContainer>
    );
  }
}

type Props = {
  children: React$Node,
  label: string,
  className: string,
}

type State = {
  currentIndex: number,
}

export default Tabs;
