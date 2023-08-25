import styled from 'styled-components';
import { borderRadius4 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space12, space16, space8 } from '../utilities/spacing';
import * as Breakpoints from '../utilities/breakpoints';

export const StyledActionListContainer = styled.div`
  padding: ${space8} 0;
  background: ${Neutral.B100};
  color: ${Neutral.B18};

  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export const StyledActionListSection = styled.div`
  padding: ${space12} ${space16} ${space8};
  color: ${Neutral.B40};
  text-transform: uppercase;
`;
export const StyledActionListItemWrapper = styled.div`
  margin: 0 ${space8};
  cursor: pointer;

  &:hover {
    background: ${Neutral.B99};
    border-radius: ${borderRadius4};
  }

  &:active {
    background: ${Neutral.B95};
    border-radius: ${borderRadius4};
  }
  &&& {
    &:active {
      border: 0;
    }
  }

  &:focus {
    outline: none;
    border: 2px solid ${Blue.S54};
    border-radius: ${borderRadius4};
  }

  &[data-disabled='true'] {
    pointer-events: none;

    svg {
      fill: ${Neutral.B85};
    }

    .action-item-content,
    .action-item-description {
      color: ${Neutral.B85};
    }
  }
`;

export const StyledActionListItem = styled.div`
  display: flex;
  gap: ${space8};
  padding: ${space8};
  align-items: center;

  svg {
    height: 24px;
    width: 24px;
    fill: ${Neutral.B40};
  }

  @media (max-width: ${Breakpoints.large}) {
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

export const StyledActionListItemDescription = styled.div`
  padding: 0 ${space8} ${space8};
  margin-top: calc(${space8} * -1);
  align-items: center;
`;
