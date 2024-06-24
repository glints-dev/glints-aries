import styled from 'styled-components';
import { Blue, Neutral } from '../utilities/colors';
import { space16, space4, space8 } from '../utilities/spacing';
import * as Breakpoints from '../utilities/breakpoints';

export const StyledTabsContainer = styled.div`
  display: block;
`;

export const StyledTabHeaderContainer = styled.div`
  box-shadow: inset 0px -1px 0px #e1e3e5;
  overflow-x: auto;
  white-space: nowrap;
  background: transparent;
  position: relative;
  margin: 0;

  ::-webkit-scrollbar {
    display: none;
  }

  &[data-scroll-left='true'] {
    box-shadow: 30px 0 50px -50px #474747 inset;
  }

  &[data-scroll-right='true'] {
    box-shadow: -30px 0px 50px -50px #474747 inset;
  }

  &[data-scroll-left='true'][data-scroll-right='true'] {
    box-shadow:
      30px 0 50px -50px #474747 inset,
      -30px 0px 50px -50px #474747 inset;
  }

  &[data-grabbing='true'] {
    cursor: grabbing;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: ${space8};
  margin: 0;

  &[data-fitted='true'] li {
    flex: 1;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  margin: 0;
  padding: 0 ${space4};
`;
export const StyledSpan = styled.span`
  position: relative;
  display: block;
  padding: 0 ${space16};

  &::before {
    content: '';
    position: absolute;
    bottom: -${space16};
    left: 0;
    right: 0;
    height: 3px;
    border-top-left-radius: ${space4};
    border-top-right-radius: ${space4};
  }

  &&::after {
    content: '';
    position: absolute;
    z-index: 1;
    inset: -1px;
    pointer-events: none;
    box-shadow: 0 0 0 -1px ${Blue.S99};
    transition: box-shadow 100ms ease;
  }

  @media (max-width: ${Breakpoints.large}) {
    &::before {
      bottom: -14px;
    }
  }
`;

export const StyledTabButton = styled.button`
  border: 0;
  background: transparent;
  height: 56px;
  cursor: default;
  color: ${Neutral.B40};
  width: 100%;
  padding: 0 ${space4};

  &[data-disabled='false'] {
    cursor: pointer;

    &:hover {
      color: ${Neutral.B18};
    }

    &:hover span::before {
      background: ${Blue.S100};
    }
  }

  &&&[data-selected='true'] {
    color: ${Blue.S99};
  }

  &&&[data-selected='true'] > span::before {
    background: ${Blue.S99};
  }

  @media (max-width: ${Breakpoints.large}) {
    height: 48px;
  }
`;
