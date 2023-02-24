import styled from 'styled-components';
import * as Breakpoints from '../utilities/breakpoints';
import { borderRadius8 } from '../utilities/borderRadius';
import { Neutral } from '../utilities/colors';
import { space12, space16, space24, space4 } from '../utilities/spacing';

export const StyledCardContainer = styled.div`
  border-radius: ${borderRadius8};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.15);
  color: ${Neutral.B18};
`;

export const StyledCardHeaderWrapper = styled.div`
  display: flex;
  padding: ${space24} ${space24} 20px;
  flex-wrap: wrap;
  flex-direction: column;
  height: max-content;
  border-bottom: solid 1px ${Neutral.B85};

  @media (max-width: ${Breakpoints.large}) {
    padding: ${space12} ${space16} 10px;
  }
`;

export const StyledCardHeaderSection = styled.div`
  flex: 0 0 100%;
`;

export const StyledCardHeaderSectionHalf = styled.div`
  flex: 0 0 50%;
`;

export const StyledCardContentWrapper = styled.div`
  padding-left: ${space4};
`;

export const StyledCardSection = styled.div`
  padding: ${space16} 20px;

  .section + .section {
    border-top: solid 1px ${Neutral.B85};
  }

  @media (max-width: ${Breakpoints.large}) {
    padding: ${space16} ${space12};
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
