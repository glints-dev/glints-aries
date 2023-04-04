import styled from 'styled-components';

import { space4 } from '../utilities/spacing';

interface ActivatorWrapperProps {
  width?: string;
}

export const HelpTextContainer = styled.div`
  margin-top: ${space4};
`;

export const ActivatorWrapper = styled.div<ActivatorWrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
`;
