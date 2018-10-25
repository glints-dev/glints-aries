import styled from 'styled-components';
import { PrimaryColor } from '../Colors';

export const HeadingContainer = styled.h1`
  position: relative;
  display: ${({ inline }) => inline ? 'inline-block' : 'block'};
  font-size: 2em;
  text-transform: ${({ uppercaseText }) => uppercaseText ? 'uppercase' : null};

  span {
    background-image: ${`linear-gradient(to top, ${PrimaryColor.glintsyellow} 40%, transparent 0)`};
  }
`;
