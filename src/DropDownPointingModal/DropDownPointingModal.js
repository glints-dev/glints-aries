import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {
  InlineBlock, Backdrop,
  Button, Popover,
} from 'reakit';

import PointingModal from '../PointingModal';
import Label from '../Label';
import Divider from '../Divider';
import { Icons } from '../Icon';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const CustomPopover = styled(Popover)`
    position: absolute;
    border: 0px;
    width: auto;
    padding: 0px;
    left: -10px;
`;

const HiddenButton = styled(Button)`
    display: none;
`;

const CustomIcons = styled(Icons)`
    cursor: pointer;
`;

class DropDownPointingModal extends Component {
  constructor() {
    super();
    this.toggleButton = null;
    this.iconButton = null;
  }

  handleClick = () => {
    this.toggleButton.props.toggle();
  }

  render() {
    const { children } = this.props;
    const menu = (
      <PointingModal>
        <PointingModal.Header>
          <Label size="medium">
            <span>
                Hello,
            </span>
            <p>
                Fredy Yanto
            </p>
          </Label>
        </PointingModal.Header>
        <Divider size="large" thickness="thin" theme="grey" />
        <PointingModal.Body>
          <PointingModal.Item>
            View Profile
          </PointingModal.Item>
          <PointingModal.Item>
            Edit Profile
          </PointingModal.Item>
          <PointingModal.Item>
            Sign Out
          </PointingModal.Item>
        </PointingModal.Body>
        <PointingModal.Footer>
          Footer section here ...
        </PointingModal.Footer>
      </PointingModal>
    );
    return (
      <Container>
        <Popover.Container>
          {popover => (
            <InlineBlock relative>
              <Backdrop background="transparent" as={Popover.Hide} {...popover} />
              <HiddenButton
                ref={(node) => { this.toggleButton = node; }}
                as={Popover.Toggle}
                {...popover}
              >
                Toggle
              </HiddenButton>
              <CustomIcons
                ref={(node) => { this.iconButton = node; }}
                onClick={this.handleClick}
                name="drop-down"
              />
              <CustomPopover
                fade
                expand
                slide
                timing="cubic-bezier(0.25,0.1,0.25,1.5)"
                {...popover}
              >
                {menu}
              </CustomPopover>
            </InlineBlock>
          )}
        </Popover.Container>
      </Container>
    );
  }
}

export default DropDownPointingModal;
