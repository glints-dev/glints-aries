import styled from 'styled-components';
import { borderRadius16 } from '../../../utilities/borderRadius';
export const CheckboxWrapper = styled.div`
  margin: 0;
  position: relative;
  top: 15%;
`;

export const CheckboxCellContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  width: 32px;
  justify-content: center;

  &:hover {
    background-color: rgba(1, 126, 183, 0.2);
    border-radius: ${borderRadius16};
  }

  div {
    display: flex;
    align-items: center;
  }

  .glints-checkbox-styled-row {
    gap: unset;
  }
`;
