import * as React from 'react';

import classNames from 'classnames';

import {
  OmniSearchContainer,
  OmniSearchBar,
  OmniSearchBodyWrapper,
  OmniSearchButton,
} from '../../Style/Input/OmniSearchStyle';
import OmniSearchBody from './OmniSearchBody';
import OmniSearchList from './OmniSearchList';
import OmniSearchItem from './OmniSearchItem';

class OmniSearch extends React.Component<Props, State> {
  static Body = OmniSearchBody;
  static Button = OmniSearchButton;
  static List = OmniSearchList;
  static Item = OmniSearchItem;

  state = {
    isOpen: false,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      label,
      children,
      className,
      content,
      value,
      ...defaultProps
    } = this.props;
    const { isOpen } = this.state;

    return (
      <OmniSearchContainer
        className={classNames('aries-omnisearch', className)}
        role="search"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <OmniSearchBar className="omnisearch-inputwrapper">
          <input
            type="text"
            placeholder={label}
            onFocus={this.handleOpen}
            onBlur={this.handleOpen}
            value={value}
            {...defaultProps}
          />
          { content }
        </OmniSearchBar>
        <OmniSearchBodyWrapper
          className="omnisearch-content"
          role="menuitem"
          aria-hidden={!isOpen && true}
          open={isOpen}
        >
          { children }
        </OmniSearchBodyWrapper>
      </OmniSearchContainer>
    );
  }
}

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'content'> {
  label: string;
  children: React.ReactNode;
  content: React.ReactNode;
}

interface State {
  isOpen: boolean;
}

export default OmniSearch;
