import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const TagContent = styled.label`
  display: flex;
  align-items: center;
  padding: .4em 1em;
  outline: none;
  
  * {
    margin-left: 1em;
  }
`;

export const TagContainer = styled.div`
  display: inline-flex;
  background: ${SecondaryColor.whitesmoke};
  border-radius: 1em;
  font-size: 1em;
  line-height: 1.5;
  
  &:focus {
    outline: none;
  }

  &:focus > ${TagContent} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
