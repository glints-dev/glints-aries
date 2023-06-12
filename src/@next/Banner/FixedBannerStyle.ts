import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { Blue, Green, Neutral, Orange, Red } from '../utilities/colors';

export const StyledFixedBanner = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 48px;
  background: ${Neutral.B99};
  color: ${Neutral.B18};

  svg {
    position: static;
    fill: ${Neutral.B40};
    height: 24px;
    width: 24px;
    margin-top: 2px;
  }

  &[data-status='success'] {
    background: ${Green.B89};
  }
  &[data-status='info'] {
    background: ${Blue.S08};
  }
  &[data-status='warning'] {
    background: ${Orange.S21};
  }
  &[data-status='critical'] {
    background: ${Red.B100};
  }

  @media (max-width: ${Breakpoints.large}) {
    padding: 16px;
    min-height: 100px;
    justify-content: flex-start;
    align-items: flex-start;

    svg {
      margin-top: -2px;
    }

    &[data-nobutton='true'] {
      min-height: 52px;
    }
  }
`;

export const StyledFixedIconWrapper = styled.div`
  padding-right: 12px;

  &[data-status='success'] svg {
    fill: ${Green.B61};
  }
  &[data-status='info'] svg {
    fill: ${Blue.S99};
  }
  &[data-status='warning'] svg {
    fill: ${Orange.S87};
  }
  &[data-status='critical'] svg {
    fill: ${Red.B93};
  }

  @media (max-width: ${Breakpoints.large}) {
    position: absolute;
    left: 16px;
    top: 16px;
  }
`;

export const StyledFixedBannerContentContainer = styled.div`
  padding-right: 16px;

  @media (max-width: ${Breakpoints.large}) {
    padding-left: 36px;
    padding-right: 0px;

    &[data-dismissable='true'] {
      padding-right: 36px;
    }

    &[data-has-action='true'] {
      padding-bottom: 52px;
    }

    &:not([data-show-icon='true']) {
      padding-left: 0px;
    }
  }
`;

export const StyledFixedBannerButtonContainer = styled.div`
  @media (max-width: ${Breakpoints.large}) {
    position: absolute;
    bottom: 16px;
    left: 52px;

    &:not([data-show-icon='true']) {
      left: 16px;
    }
  }
`;

export const StyledFixedCloseIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  color: ${Neutral.B40};
  right: 48px;
  padding-left: 16px;

  svg {
    fill: ${Neutral.B40};
  }

  @media (max-width: ${Breakpoints.large}) {
    top: 16px;
    right: 16px;
  }
`;
