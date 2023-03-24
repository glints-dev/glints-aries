import styled from 'styled-components';
import { borderRadius4 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space16, space4, space8 } from '../utilities/spacing';

import { MenuProps } from './Menu';

export const StyledMenu = styled.ul<MenuProps>`
  list-style: none;
  margin: ${space8} 0;
  padding: 0;

  li {
    display: flex;
    height: 44px;
    position: relative;
    align-items: center;
    padding: 0 ${space8};
    margin-bottom: ${space4};

    svg {
      height: 24px;
      width: 24px;
    }

    &:hover {
      background: ${Neutral.B99};
      border-radius: ${borderRadius4};
      cursor: pointer;
    }

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.001);
      border: 2px solid ${Blue.S54};
      border-radius: ${space4};
    }

    &[aria-disabled='true'] {
      cursor: default;
      pointer-events: none;

      span {
        color: ${Neutral.B85};
      }
    }

    &[data-active='true'] {
      background: ${Blue.S08};
      border-radius: ${borderRadius4};
      cursor: default;

      ::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -${space8};
        height: 44px;
        width: 3px;
        background-color: ${Blue.S99};
        border-radius: 0px 4px 4px 0px;
      }

      &[data-multiple='true'] {
        background: ${Neutral.B100};
      }
    }
  }
`;

export const TitleContainer = styled.div`
  padding: ${space8} ${space16};

  span {
    text-transform: uppercase;
  }
`;

export const ListContainer = styled.div`
  padding: 0 ${space8};
`;

export const StyledSections = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${space8} 0;
`;
