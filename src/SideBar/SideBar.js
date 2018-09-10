import React, { Component } from 'react';

import { SideBarContainer } from '../Style/SidebarStyle';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOnClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <SideBarContainer open={open}>
          <button type="button" onClick={this.handleOnClick}>
            CLICK
          </button>
        </SideBarContainer>
        <button type="button" onClick={this.handleOnClick}>
            CLICK
        </button>
      </div>
    );
  }
}

export default SideBar;
