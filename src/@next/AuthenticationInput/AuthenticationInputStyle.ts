import styled from 'styled-components';
import { space4 } from '../utilities/spacing';

export const StyledInputsContainer = styled.div`
  display: flex;
  gap: ${space4};
  width: fit-content;

  .authentication-input {
    width: 36px;
    height: 36px;
  }
`;
