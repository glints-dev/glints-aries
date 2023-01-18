import styled from 'styled-components';
import { borderRadius4 } from '../utilities/borderRadius';
import { Neutral } from '../utilities/colors';
import { space8 } from '../utilities/spacing';

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: ${space8};

  &[data-segmented='true'] {
    gap: 0;
  }

  &[data-segmented='true'] button[data-active='true'] {
    border: 1px solid ${Neutral.B40};
  }

  &[data-segmented='true'] button {
    border-radius: 0;
    border-right: 0;

    :nth-child(1) {
      border-radius: ${borderRadius4} 0px 0px ${borderRadius4};
    }

    :nth-last-child(1) {
      border-radius: 0px ${borderRadius4} ${borderRadius4} 0px;
      border-right: 1px solid ${Neutral.B68};
    }
  }

  &[data-segmented='true'] button:focus {
    z-index: 1;
    border: 1px solid ${Neutral.B68};
  }

  &[data-full-width='true'] button {
    flex: 1;
  }

  &[data-segmented='true']&[data-button-wrapped='true'] > * {
    button {
      border-radius: 0;
      border-right: 0;
    }
    :nth-child(1) button {
      border-radius: ${borderRadius4} 0px 0px ${borderRadius4};
    }

    :nth-last-child(1) button {
      border-radius: 0px ${borderRadius4} ${borderRadius4} 0px;
      border-right: 1px solid ${Neutral.B68};
    }
  }
`;
