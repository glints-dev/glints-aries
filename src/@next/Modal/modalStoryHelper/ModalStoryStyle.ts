import styled from 'styled-components';
import { Modal } from '../Modal';

export const SelectWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const StyledModal = styled(Modal)`
  height: 600px;
  width: 800px;

  .modal-content {
    height: 100%;
  }
`;
