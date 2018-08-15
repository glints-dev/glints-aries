import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

export const Container = styled.div`
  display: inline-flex;
  background: ${PrimaryColor.glintsred};
  color: ${SecondaryColor.white};
  padding: .1rem .5rem;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
`;
