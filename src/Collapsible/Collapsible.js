import React, { Component } from 'react';
import Icon from '../Icon';

import { CollapsibleContainer, CollapsibleHead, CollapsibleBody } from '../Style/CollapsibleStyle';

class Collapsible extends Component <Props, State> {
  state = {
    isOpen: false,
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const {
      label,
      children,
      className,
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <CollapsibleContainer className={className} {...defaultProps} onClick={this.handleOpen}>
        <CollapsibleHead className="head">
          {label}
          <Choose>
            <When condition={isOpen === false}>
              <Icon name="arrow-down" size="12" color="#000000" />
            </When>
            <Otherwise>
              <Icon name="arrow-up" size="12" color="#000000" />
            </Otherwise>
          </Choose>
        </CollapsibleHead>
        {isOpen && (
          <CollapsibleBody className="body">
            {children}
          </CollapsibleBody>
        )}
      </CollapsibleContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
  label: string,
};

type State = {
  isOpen: boolean,
}

export default Collapsible;
