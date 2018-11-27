import styled from 'styled-components';

import CrossPattern from '../../../assets/image/cross-pattern.svg';

export const ProfilePictureContent = styled.div`
  position: relative;
  z-index: 1;
  width: 5em;
  height: 5em;
  outline: none;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ editable }) => {
    if (editable) {
      return `
        &:hover:before {
          content: '';
          position: absolute;
          background-color: rgba(0, 0, 0, .5);
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

export const ProfilePictureContainer = styled.div`
  position: relative;
  display: inline-flex;

  &:focus {
    outline: none;
  }

  &:focus > ${ProfilePictureContent} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
