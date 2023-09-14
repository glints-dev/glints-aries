import styled from 'styled-components';
import { space8 } from '../utilities/spacing';

export const StyledInputsContainer = styled.div`
  display: flex;
  gap: ${space8};
  width: fit-content;

  .authentication-input {
    width: 36px;
    height: 36px;
  }
`;
