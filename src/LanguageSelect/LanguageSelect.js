import React, { Component } from 'react';

import {
  ImageContainer, Image, LanguageItemWrapper, LanguageContainer, LanguageItem, LanguageLabel,
} from '../Style/LanguageSelectStyle';
import {
  DropdownLabelWrapper,
} from '../Style/DropdownStyle';

import { Icon } from '../Icon';
class LanguageSelect extends Component <State, Props> {
  constructor() {
    super();
    this.state = {
      flag: null,
      isOpen: true,
    };
  }

  async componentDidMount() {
    const flag = await import('../../assets/icons/flag/gb.svg');
    this.setState({ flag });
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const {
      title,
    } = this.props;
    const { flag, isOpen } = this.state;
    return (
      <LanguageContainer
        size="medium"
        open={isOpen}
        onClick={this.handleOpen}
        onBlur={this.handleClickOutside}
      >
        <DropdownLabelWrapper spaceBetween={false}>
          <ImageContainer>
            <Image src={flag} />
          </ImageContainer>
          <LanguageLabel>
            <span>
              {title}
            </span>
          </LanguageLabel>
          <Icon name="arrow-down" size="15" color="white" />
        </DropdownLabelWrapper>
        <If condition={isOpen}>
          <LanguageItemWrapper>
            <LanguageItem>
                English
            </LanguageItem>
            <LanguageItem>
                Indonesian
            </LanguageItem>
          </LanguageItemWrapper>
        </If>
      </LanguageContainer>
    );
  }
}

LanguageSelect.defaultProps = {
  size: 'small',
  title: 'EN',
};

type State = {
    flag: string
}

type Props = {
    width: number,
    height: number,
  };

export default LanguageSelect;
