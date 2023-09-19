import styled from 'styled-components';
import { space4, space8 } from '../utilities/spacing';
import { Neutral } from '../utilities/colors';
import { subtitle2 } from '../Typography/TypographyStyles';

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

export const CollapseItemContent = styled.div<{ open: boolean }>`
  display: grid;
  grid-template-rows: ${props => (props.open ? '1fr' : '0fr')};

  transition: all 0.2s ease-in-out;
  opacity: ${props => (props.open ? 1 : 0)};

  width: 100%;
  background-color: ${Neutral.B99};
`;

export const CollapseContentWrapper = styled.div`
  overflow: hidden;
`;

export const CollapseContent = styled.div`
  padding: ${space8};
  border-bottom: 1px solid ${Neutral.B85};
  ${subtitle2}
`;
