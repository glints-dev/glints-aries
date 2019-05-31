import styled from 'styled-components';

const CrossPattern = require('../../../assets/image/cross-pattern.svg');

export const ProfilePictureContent = styled.div<ProfilePictureContentProps>`
  position: relative;
  z-index: 1;
  width: 5em;
  height: 5em;
  border-radius: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ editable }) => {
    if (editable) {
      return `
        outline: none;
        cursor: pointer;

        &:hover:before {
          content: '';
          position: absolute;
          background-color: rgba(0, 0, 0, .5);
          height: 100%;
          width: 100%;
          top: 0
          left: 0;
          border-radius: 50%;
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

interface ProfilePictureContentProps {
  editable: boolean;
}

export const ProfilePictureContainer = styled.div<ProfilePictureContainerProps>`
  position: relative;
  display: inline-flex;

  ${({ editable }) => {
    if (editable) {
      return `
        &:focus {
          outline: none;
        }

        &:focus > ${ProfilePictureContent} {
          outline: 5px auto -webkit-focus-ring-color;
        }
      `;
    }
  }}
`;

interface ProfilePictureContainerProps {
  editable?: boolean;
}
