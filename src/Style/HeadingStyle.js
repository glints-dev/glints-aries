import styled from 'styled-components';
import { PrimaryColor } from './Colors';

export const Container = styled.h1`
  position: relative;
  font-size: 3em;

  span {
    background-image: ${`linear-gradient(to top, ${PrimaryColor.glintsyellow} 40%, white 0)`};
  }
`;
