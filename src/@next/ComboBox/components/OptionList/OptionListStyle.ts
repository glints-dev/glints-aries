import styled from 'styled-components';
import { borderRadius4 } from '../../../utilities/borderRadius';
import { Blue, Neutral } from '../../../utilities/colors';
import { space4, space8 } from '../../../utilities/spacing';

export const StyledOptionList = styled.ul`
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
    }
  }
`;
