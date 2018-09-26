import styled from 'styled-components';

import CrossPattern from '../../assets/image/cross-pattern.svg';
import Edit from '../../assets/icons/edit-white.svg';

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 5em;
  height: 5em;

  ${({ editable }) => {
    if (editable) {
      return `
        &:hover:before {
          content: '';
          position: absolute;
          background-image: url(${Edit});
          background-color: rgba(0, 0, 0, .5);
          background-repeat: no-repeat;
          background-size: auto;
          background-position: center;
          height: 100%;
          width: 100%;
          border-radius: 50%;
          cursor: pointer;
        }
      `;
    }
  }}
    
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    background: url(${CrossPattern});
    height: 100%;
    width: 100%;
    border-radius: 50%;
    top: 4px;
    left: 4px;
  }

  img {
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
