import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { borderRadius8 } from '../utilities/borderRadius';
import { Neutral } from '../utilities/colors';
import { space12, space16, space24, space4 } from '../utilities/spacing';

export const StyledCardContainer = styled.div`
  border-radius: ${borderRadius8};
  box-shadow:
    0px 0px 5px 0px rgba(71, 71, 71, 0.1),
    0px 1px 2px 0px rgba(71, 71, 71, 0.2);
  color: ${Neutral.B18};
  background-color: ${Neutral.B100};
`;

export const StyledCardHeaderWrapper = styled.div`
  display: flex;
  padding: ${space24} ${space24} 20px;
  flex-wrap: nowrap;
  flex-direction: row;
  height: max-content;
  border-bottom: solid 1px ${Neutral.B85};

  @media (max-width: ${Breakpoints.large}) {
    padding: ${space12} ${space16} 10px;
  }
`;

export const StyledCardHeaderSection = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledCardHeaderSectionHalf = styled.div`
  flex: 0 0 50%;
`;

export const StyledCardContentWrapper = styled.div`
  padding-bottom: ${space4};

  @media (max-width: ${Breakpoints.large}) {
    padding-bottom: 0px;
  }

  &[data-actions='true'] {
    padding-bottom: 0px;
  }
`;

export const StyledCardSection = styled.div`
  padding: 20px ${space24};

  .section {
    padding: ${space16} ${space24};

    &:last-child {
      padding-bottom: 0;
    }
  }

  .section + .section {
    border-top: solid 1px ${Neutral.B85};
  }

  @media (max-width: ${Breakpoints.large}) {
    padding: ${space12} ${space16};

    .section {
      padding: ${space12} ${space16};
    }
  }
`;

export const StyledCardActionWrapper = styled.div`
  display: flex;
  padding: 20px ${space24} ${space24};
  flex-direction: column-reverse;
  align-items: flex-end;
  border-top: solid 1px ${Neutral.B85};

  &[data-align='left'] {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: ${Breakpoints.large}) {
    padding: 10px ${space16} ${space12};
  }
`;

export const StyledCustomHeader = styled.div`
  & > * {
    margin: 0;
  }
`;

export const StyledCardHeaderLeftContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

export const StyledCardHeaderRightContainer = styled.div`
  margin-left: 16px;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${Breakpoints.large}) {
    align-items: flex-end;
  }
`;
