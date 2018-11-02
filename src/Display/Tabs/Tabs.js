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
          <ul>
            {children.map((data, index) => (
              <li
                key={data.props.tab}
                className={currentIndex === index ? 'active' : undefined}
              >
                <button
                  type="button"
                  onClick={this.handleClickTab(index)}
                >
                  {data.props.tab}
                </button>
              </li>
            ))}
          </ul>
        </TabsHeader>
        <TabsBody>
          <TabPane className={className}>
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
