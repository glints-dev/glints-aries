import styled from 'styled-components';

import { Device } from '../../Utils/StyleConfig';

import { SecondaryColor } from '../Colors';

export const BlockquoteWrapper = styled.div`
  position: relative;
  padding: 30px;
  outline: none;
`;

export const BlockquoteContainer = styled.div`
  position: relative;
  border: 1px solid ${SecondaryColor.black};
  background: ${SecondaryColor.white};

  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(-45deg, transparent, transparent 5px, ${SecondaryColor.black} 7px);
    top: 12px;
    left: 12px;
    z-index: -1;
    transition: all .2s;
  }

  &:hover:after {
    opacity: 1;
    transition: all .2s;
  }

  &:focus {
    outline: none;
  }

  &:focus > ${BlockquoteWrapper} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const BlockquoteContent = styled.p`
  position: relative;
  font-size: 1em;
  line-height: 1.5;
`;

export const BlockquoteProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${Device.mobileL} {
    justify-content: flex-start;
  }
`;

export const BlockquoteProfilePicture = styled.div`
  position: relative;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  background: white;
  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.2);
  padding: .2em;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${Device.mobileS} {
    width: 4em;
    height: 4em;
  }
`;

export const BlockquoteIdentity = styled.div`
  position: relative;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 150px;

  p {
    margin: 0;
    font-weight: bold;
  }
`;
