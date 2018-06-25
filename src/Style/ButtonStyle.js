import styled, { keyframes } from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import './GlobalStyle';

const Button = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  padding: .8em .6em;
  min-width: 8.5em;
`;

/*
 * Default Button
 */

export const DefaultBtn = Button.extend`
  flex: 1;
  background: ${SecondaryColor.white};
  transition: all .5s;

  &:hover {
    background: ${SecondaryColor.whitesmoke};
    transition: all .5s;
  }

  &:active {
    background: ${SecondaryColor.black};
    color: ${SecondaryColor.white};
    transition: all .5s;
  }
`;

/*
 * Primary Button
 */

export const PrimaryContainer = styled.div`
  position: relative;
  display: inline-flex;

  &:after {
    content: '';
    background-color: ${PrimaryColor.glintsyellow};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: .5em;
    left: .5em;
    transition: all .2s;
  }

  &:hover:after {
    transform: translate3d(-.15em, -.15em, 0);
    transition: all .2s;
    background-color: ${SecondaryColor.black};
  }

  &:active:after {
    transform: translate3d(-.265em, -.265em, 0);
    transition: all .2s;
  }
`;

export const PrimaryBtn = Button.extend`
  flex: 1;
  transition: all .2s;

  ${props => {
    switch(props.theme) {
      case 'red':
        return`
          background-color: ${PrimaryColor.glintsred};
          color: ${SecondaryColor.white};
        `;
      case 'blue':
        return`
          background-color: ${PrimaryColor.glintsblue};
          color: ${SecondaryColor.white};
        `;
      default:
        return`
          background-color: ${SecondaryColor.white};
          color: ${PrimaryColor.glintsblue};

          &:active {
            color: ${SecondaryColor.white};
          }
        `;
    }
  }}

  &:hover {
    transform: translate3d(.15em, .15em, 0);
    transition: all .2s;
  }

  &:active {
    transform: translate3d(.265em, .265em, 0);
    transition: all .2s;
    background-color: ${SecondaryColor.black};
  }
`;

/*
 * Secondary Button
 */

const Bouncing = keyframes`
  25%, 75% {
    transform: translate3d(0, 0, 0);
  }

  50%, 100% {
    transform: translate3d(-.265em, -.265em, 0);
  }
`;

export const SecondaryBtn = Button.extend`
  flex: 1;
  background-color: ${SecondaryColor.whitesmoke};
  color: ${SecondaryColor.black};
  transition: all .2s;
  z-index: 2;
`;

export const SecondaryContainer = styled.div`
  position: relative;
  display: inline-flex;

  &:after {
    content: '';
    opacity: 0;
    background-color: ${PrimaryColor.glintsred};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: .5em;
    left: .5em;
    transition: all .2s;
    cursor: pointer;
    transform: translate3d(-.265em, -.265em, 0);
    z-index: 1;
  }

  &:hover {
    ${SecondaryBtn} {
      background-color: ${PrimaryColor.glintsyellow};
      transform: translate3d(-.265em, -.265em, 0);
      transition: transform .2s;
    }
  }

  &:hover:after {
    opacity: 1;
    transition: opacity .8s linear;
    animation: ${Bouncing} .5s linear;
  }

  &:active {
    ${SecondaryBtn} {
      background-color: ${SecondaryColor.black};
      color: ${SecondaryColor.white};
      transition: all .2s;
      transform: translate3d(0, 0, 0);
    }
  }

  &:active:after {
    background-color: ${SecondaryColor.black};
    transform: translate3d(-.45em, -.5em, 0);
    transition: all .2s;
  }
`;

/*
 * Secondary Button
 */

export const GhostBtn = Button.extend`
  flex: 1;
  transition: background-color .5s;

  ${props => {
    switch(props.theme) {
      case 'red':
        return`
          border: 2px solid ${PrimaryColor.glintsred};
          color: ${PrimaryColor.glintsred};
        `;
      case 'yellow':
        return`
          border: 2px solid ${PrimaryColor.glintsyellow};
          color: ${PrimaryColor.glintsyellow};
        `;
      case 'blue':
        return`
          border: 2px solid ${PrimaryColor.glintsblue};
          color: ${PrimaryColor.glintsblue};
        `;
      default:
        null
    }
  }}

  &:hover {
    transition: background-color .5s;

    ${props => {
      switch(props.theme) {
        case 'red':
          return`
            background-color: ${PrimaryColor.glintsred};
            color: ${SecondaryColor.white};
          `;
        case 'yellow':
          return`
            background-color: ${PrimaryColor.glintsyellow};
            color: ${SecondaryColor.white};
          `;
        case 'blue':
          return`
            background-color: ${PrimaryColor.glintsblue};
            color: ${SecondaryColor.white};
          `;
        default:
          null
      }
    }}
  }

  &:active {
    background-color: ${SecondaryColor.black};
    color: ${SecondaryColor.white};
    border: 2px solid ${SecondaryColor.black};
    transition: background-color .5s; 
  }
`;

/*
 * Link Button
 */

export const LinkBtn = styled(Button)`
  font-weight: normal;
  text-transform: inherit;
`;

