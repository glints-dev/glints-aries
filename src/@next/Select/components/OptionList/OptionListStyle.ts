import styled from 'styled-components';

import { space8 } from '../../../utilities/spacing';

interface OptionListContainerProps {
  width?: string;
}

export const OptionListContainer = styled.div<OptionListContainerProps>`
  width: ${props => props.width};
  padding: ${space8} 0;
`;

export const EmptyOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
