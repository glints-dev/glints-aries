import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { borderRadius8 } from '../utilities/borderRadius';
import { Blue, Green, Neutral, Orange, Red } from '../utilities/colors';
import { space4 } from '../utilities/spacing';

export const StyledCloseIconWrapper = styled.div`
  cursor: pointer;
  &&& svg {
    right: 0;
    top: 0;
    fill: ${Neutral.B40};
  }

  @media (max-width: ${Breakpoints.large}) {
    &&& svg {
      top: -1px;
    }
  }
`;

export const StyledBanner = styled.div`
  min-height: 100px;
  padding: 20px;

  background: ${Neutral.B99};
  color: ${Neutral.B18};
  border: 1px solid ${Neutral.B68};
  border-radius: ${borderRadius8};

  svg {
    position: absolute;
    fill: ${Neutral.B40};
    height: 24px;
    width: 24px;
    top: 0;
  }

  &[data-titled='true'] svg {
    top: 3px;
  }

  &[data-status='success'] {
    background: ${Green.B89};
    border: 1px solid ${Neutral.B68};
  }
  &[data-status='success'] svg {
    fill: ${Green.B61};
  }

  &[data-status='info'] {
    background: ${Blue.S08};
    border: 1px solid ${Blue.S99};
  }
  &[data-status='info'] svg {
    fill: ${Blue.S99};
  }

  &[data-status='warning'] {
    background: ${Orange.S21};
    border: 1px solid ${Orange.S86};
  }
  &[data-status='warning'] svg {
    fill: ${Orange.S87};
  }

  &[data-status='critical'] {
    background: ${Red.B100};
    border: 1px solid ${Red.B93};
  }
  &[data-status='critical'] svg {
    fill: ${Red.B93};
  }

  &[data-type='fixed'],
  &[data-type='fixed-noicon'] {
    position: fixed;
    border: 0;
    border-radius: 0;
    left: 0;
    right: 0;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 48px;

    svg {
      height: 20px;
      width: 20px;
      position: static;
      margin-top: 4px;
    }
  }

  @media (max-width: ${Breakpoints.large}) {
    min-height: 89px;

    &[data-titled='true'] svg {
      top: 0;
    }

    &[data-type='fixed'],
    &[data-type='fixed-noicon'] {
      padding: 16px;
      height: 100px;

      svg {
        margin-top: 0px;
      }
    }
  }
`;

export const StyledFixedIconWrapper = styled.div`
  padding-right: 12px;

  @media (max-width: ${Breakpoints.large}) {
    position: absolute;
    left: 16px;
    top: 16px;
  }
`;

export const StyledBannerContentContainer = styled.div`
  &[data-type='static'] {
    padding-left: 40px;

    button {
      margin-top: 10px;
    }
  }

  &[data-type='fixed'],
  &[data-type='fixed-noicon'] {
    padding-right: 16px;
    margin: 0 0;
  }
  &[data-button='true'] {
    padding-right: 0;
  }

  @media (max-width: ${Breakpoints.large}) {
    &[data-type='fixed'],
    &[data-type='fixed-noicon'] {
      position: absolute;
      top: 16px;
      left: 52px;

      &[data-button='true'] {
        top: 48px;
        left: 52px;
      }
    }
  }
`;

export const StyledBannerTitleContainer = styled.div`
  position: relative;
`;

export const StyledBannerTitle = styled.div`
  margin-bottom: ${space4};
  padding-left: 40px;

  &[data-type='static'] {
    button {
      margin-top: 10px;
    }
  }
`;

export const StyledFixedCloseIconWrapper = styled.div`
  cursor: pointer;
  color: ${Neutral.B40};
  position: absolute;
  right: 48px;
  padding-left: 16px;

  @media (max-width: ${Breakpoints.large}) {
    &[data-type='fixed'],
    &[data-type='fixed-noicon'] {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
`;
