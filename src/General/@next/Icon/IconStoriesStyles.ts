import styled from 'styled-components';

import { Icon, IconProps } from './Icon';

export const StyledUnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const StyledItemList = styled.li`
  display: flex;
  flex-basis: 220px;
  align-items: center;
`;

export const StyledIcon = styled(Icon)<IconProps>`
  margin-right: 1em;
`;
