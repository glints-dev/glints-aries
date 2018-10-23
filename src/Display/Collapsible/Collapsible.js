import React, { Component } from 'react';
import Icon from '../../General/Icon';

import {
  CollapsibleContainer,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleBody,
} from '../../Style/Display/CollapsibleStyle';

class Collapsible extends Component <Props, State> {
  state = {
    isOpen: true,
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isOpen } = this.state;
    if (isOpen !== nextState.isOpen) {
      // re-render
      return true;
    }

    // nothing changed. avoid unnecessary re-render
    return false;
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
      <CollapsibleContainer
        className="collapsible"
        tabIndex="0"
        onClick={this.handleOpen}
        {...defaultProps}
      >
        <CollapsibleContent tabIndex="-1">
          <CollapsibleHeader
            className="head"
            role="tab"
            aria-expanded={isOpen}
          >
            {label}
            <Choose>
              <When condition={isOpen === false}>
                <Icon name="arrow-down" color="#000000" />
              </When>
              <Otherwise>
                <Icon name="arrow-up" color="#000000" />
              </Otherwise>
            </Choose>
          </CollapsibleHeader>
          {isOpen && (
            <CollapsibleBody className="body">
              {children}
            </CollapsibleBody>
          )}
        </CollapsibleContent>
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
