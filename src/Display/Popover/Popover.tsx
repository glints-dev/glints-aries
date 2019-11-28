import * as React from 'react';

import classNames from 'classnames';

import { ArrowDownIcon } from '../../General/Icon/components';

import {
  PopoverContainer,
  PopoverContentWrapper,
  PopoverChildren,
  PopoverIcon,
  PopOverContent,
  PopoverItemWrapper,
} from '../../Style/Display/PopoverStyle';
import Badge from '../../General/Badge';

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
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  renderChildren = () => {
    const { content } = this.props;
    const { isOpen } = this.state;

    return (
      <PopoverItemWrapper>
        <PopoverIcon>
          <ArrowDownIcon color="black" />
        </PopoverIcon>
        {isOpen && <PopOverContent>{content}</PopOverContent>}
      </PopoverItemWrapper>
    );
  };

  renderBadge = (number: number) => {
    if (number > 0) {
      return <Badge label={number} />;
    }
  };

  render() {
    const { children, className } = this.props;
    let { showBadgeNumber } = this.props;
    if (!showBadgeNumber) {
      showBadgeNumber = 0;
    }
    return (
      <PopoverContainer
        className={classNames('aries-popover', className)}
        onBlur={this.handleClickOutside}
        aria-haspopup="true"
        aria-busy="false"
        tabIndex={0}
      >
        <PopoverChildren onClick={this.handleOnClick}>
          {children} {this.renderBadge(showBadgeNumber)}
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
  showBadgeNumber?: number;
  children: React.ReactNode;
  content: React.ReactNode;
}

interface State {
  isOpen: boolean;
}

export default Popover;
