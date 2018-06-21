import styled from 'styled-components';

export const Icon = styled.i`
  background: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 12px;
  width: 12px;

  ${props => {
    if(props.position === 'left') {
      return `margin-right: .8em;`;
    } else {
      return `margin-left: .8em;`;
    }
  }}
`;