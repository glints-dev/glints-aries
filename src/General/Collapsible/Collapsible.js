import React, { Component } from 'react';
import Icon from '../Icon';

import { Container, Header, Body } from '../../Style/CollapsibleStyle';

class Collapsible extends Component <Props, State> {
  state = {
    isOpen: false,
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  componentDidMount() {
    const { collapsing } = this.props;

    if (collapsing) {
      this.setState({
        isOpen: false,
      });
    }
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
      <Container className="collapsible" {...defaultProps} onClick={this.handleOpen}>
        <Header className="head">
          {label}
          <Choose>
            <When condition={isOpen === false}>
              <Icon name="arrow-down" color="#000000" />
            </When>
            <Otherwise>
              <Icon name="arrow-up" color="#000000" />
            </Otherwise>
          </Choose>
        </Header>
        {isOpen && (
          <Body className="body">
            {children}
          </Body>
        )}
      </Container>
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
