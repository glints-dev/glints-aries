import styled from 'styled-components';
import { Breakpoints } from '..';
import { borderRadius4 } from '../utilities/borderRadius';
import { Neutral, Red } from '../utilities/colors';
import { NotoSans } from '../utilities/fonts';
import { space4 } from '../utilities/spacing';
import { SelectProps } from './Select';

export const StyledSelect = styled.select<SelectProps>`
  display: flex;
  align-items: center;
  height: 36px;
  appearance: none;
  background: url("data:image/svg+xml,<svg height='20px' width='20px' viewBox='0 0 24 24' fill='%23666666' xmlns='http://www.w3.org/2000/svg'><path d='M12 13.1719L16.95 8.22192L18.364 9.63592L12 15.9999L5.63599 9.63592L7.04999 8.22192L12 13.1719Z'/></svg>")
    no-repeat right 0.8em center / 1.4em;
  cursor: pointer;
  padding: 0px 8px 0px 12px;
  border: 1px solid ${Neutral.B68};
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${borderRadius4};

  color: ${Neutral.B18};
  font-family: ${NotoSans}, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px #ffffff, 0px 0px 0px 3px #6cc9ec;
  }

  &:disabled {
    color: ${Neutral.B85};
    background: url("data:image/svg+xml,<svg height='20px' width='20px' viewBox='0 0 24 24' fill='%23D4D5D8' xmlns='http://www.w3.org/2000/svg'><path d='M12 13.1719L16.95 8.22192L18.364 9.63592L12 15.9999L5.63599 9.63592L7.04999 8.22192L12 13.1719Z'/></svg>")
        no-repeat right 0.8em center / 1.4em,
      ${Neutral.B95};
    cursor: default;
  }

  &[data-error='true'] {
    height: 36px;
    border: 1px solid ${Red.B93};
    border-radius: ${borderRadius4};
  }
`;

export const Label = styled.label`
  margin-bottom: ${space4};
`;

export const HelpTextContainer = styled.div`
  margin-top: ${space4};
`;
