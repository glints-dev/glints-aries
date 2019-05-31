import * as React from 'react';

import classNames from 'classnames';

import Icon from '../../General/Icon';

import {
  PopoverContainer,
  PopoverContentWrapper,
  PopoverChildren,
  PopoverIcon,
  PopOverContent,
  PopoverItemWrapper,
} from '../../Style/Display/PopoverStyle';

class Popover extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleOnClick = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  renderChildren = () => {
    const { content } = this.props;
    const { isOpen } = this.state;

    return (
      <PopoverItemWrapper>
        <PopoverIcon>
          <Icon name="arrow-down" color="black" />
        </PopoverIcon>
        {isOpen &&
          <PopOverContent>
            {content}
          </PopOverContent>
        }
      </PopoverItemWrapper>
    );
  }

  render() {
    const { children, className } = this.props;

    return (
      <PopoverContainer
        className={classNames('aries-popover', className)}
        onBlur={this.handleClickOutside}
        aria-haspopup="true"
        aria-busy="false"
        tabIndex={0}
      >
        <PopoverChildren onClick={this.handleOnClick}>
          {children}
        </PopoverChildren>
        <PopoverContentWrapper onClick={this.handleOnClick}>
          {this.renderChildren()}
        </PopoverContentWrapper>
      </PopoverContainer>
    );
  }
}

interface Props {
  className?: string;
  children: React.ReactNode;
  content: React.ReactNode;
}

interface State {
  isOpen: boolean;
}

export default Popover;
