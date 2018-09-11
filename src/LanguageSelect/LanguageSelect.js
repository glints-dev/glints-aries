import React, { Component } from 'react';

import Dropdown from '../Dropdown';

import { ImageContainer, Image, ListBox } from '../Style/LanguageSelectStyle';

class LanguageSelect extends Component <State, Props> {
  constructor() {
    super();
    this.state = {
      flag: null,
    };
  }

  async componentDidMount() {
    const flag = await import('../../assets/icons/flag/gb.svg');
    this.setState({ flag });
  }

  render() {
    const { width, height } = this.props;
    const { flag } = this.state;
    return (
      <div>
        <ImageContainer
          width={width}
          height={height}
        >
          <Image src={flag} />
        </ImageContainer>
        <Dropdown title="EN" size="medium">
          <Dropdown.Body>
            <Dropdown.Item>Accounting</Dropdown.Item>
            <Dropdown.Item>Art & Design</Dropdown.Item>
            <Dropdown.Item>Business Development</Dropdown.Item>
            <Dropdown.Item>Consulting</Dropdown.Item>
            <Dropdown.Item>Engineering</Dropdown.Item>
          </Dropdown.Body>
        </Dropdown>
      </div>
    );
  }
}

type State = {
    flag: string
}

type Props = {
    width: number,
    height: number,
  };

export default LanguageSelect;
