import styled from 'styled-components';
import { Tag } from '../../Tag';
import { space8 } from '../../utilities/spacing';
import { Select } from '../Select';

export const StyledTag = styled(Tag)`
  margin-right: ${space8};
`;

export const ActivatorSelectStyled = styled(Select.ActivatorSelect)`
  width: 180px;
`;
