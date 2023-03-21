import styled from 'styled-components';
import { borderRadius4 } from '../../../utilities/borderRadius';
import { Neutral } from '../../../utilities/colors';
import { space4, space8 } from '../../../utilities/spacing';

interface OptionListContainerProps {
  textInputWidth?: number;
}

export const OptionListContainer = styled.div<OptionListContainerProps>`
  width: ${props => props.textInputWidth - 14}px;
  padding: ${space8} 0;
`;

export const StyledOptionList = styled.ul`
  list-style: none;
  margin: 0 ${space8};
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

    &[data-active='true'] {
      border-radius: ${borderRadius4};
      cursor: default;
    }

    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

export const EmptyOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
