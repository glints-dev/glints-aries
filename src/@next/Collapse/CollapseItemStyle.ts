import styled from 'styled-components';
import { space4, space8 } from '../utilities/spacing';
import { Neutral } from '../utilities/colors';

export const CollapseItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${space4};
  padding: ${space8};

  cursor: pointer;
  background-color: ${Neutral.B100};
  border-bottom: 1px solid ${Neutral.B85};

  svg {
    height: 20px;
    width: 20px;
    fill: ${Neutral.B40};
  }

  &[data-disabled='true'] {
    cursor: not-allowed;

    svg {
      fill: ${Neutral.B85};
    }
  }
`;

export const RightHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${space4};
  margin-left: auto;
`;

export const CollapseItemContent = styled.div`
  width: 100%;
  padding: ${space8};

  border-bottom: 1px solid ${Neutral.B85};
  background-color: ${Neutral.B99};
`;
