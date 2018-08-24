import styled from 'styled-components';
import { SecondaryColor } from './Colors';

export const CollapsibleContainer = styled.div`
  cursor: pointer;
  color: black;
  background-color: ${SecondaryColor.white};
  border: solid 1px ${SecondaryColor.lightgrey};
  font-size: 16px;
`;

export const CollapsibleHead = styled.div`
  background: ${SecondaryColor.white};
  display: flex;
  justify-content: space-between;
  padding: 1.2em;

  &:hover {
    color: ${SecondaryColor.blue};
  }

  svg {
    margin-top: 6px;
  }
`;

export const CollapsibleBody = styled.div`
  padding: 0 1.2em 1.2em 1.2em;
`;
