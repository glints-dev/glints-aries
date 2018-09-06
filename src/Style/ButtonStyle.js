import styled, { keyframes } from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import { Theme } from '../Utils/StyleConfig';

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
  padding: 1em .6em;
  background: transparent;
  transition: all .2s;

  &:hover {
    ${(props) => {
    switch (props.hoverColor) {
      case `${Theme.RED}`:
        return `
            color: ${PrimaryColor.glintsred};
          `;
      case `${Theme.YELLOW}`:
        return `
            color: ${PrimaryColor.glintsyellow};
          `;
      case `${Theme.BLUE}`:
        return `
            color: ${PrimaryColor.glintsblue};
          `;
      default:
        return null;
    }
  }}
  }
`;

/*
 * Default Button
 */

export const DefaultBtn = Button.extend`
  flex: 1;
  transition: all .5s;

  ${(props) => {
    switch (props.theme) {
      case `${Theme.RED}`:
        return `
          background-color: ${PrimaryColor.glintsred};
          color: ${SecondaryColor.white};
        `;
      case `${Theme.BLUE}`:
        return `
          background-color: ${PrimaryColor.glintsblue};
          color: ${SecondaryColor.white};
        `;
      case `${Theme.YELLOW}`:
        return `
          background-color: ${PrimaryColor.glintsyellow};
          color: ${SecondaryColor.black};
        `;
      default:
        return `
          background-color: ${SecondaryColor.white};
          color: ${SecondaryColor.black};
        `;
    }
  }}

  &:active {
    background: ${SecondaryColor.black};
    color: ${SecondaryColor.white};
    transition: all .5s;
  }

  .loader {
    margin-right: .5em;
  }
`;

/*
 * Primary Button
 */

export const PrimaryContainer = styled.div`
  position: relative;
  display: inline-flex;
  z-index: 1;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: .5em;
    left: .5em;
    transition: all .2s;

    ${(props) => {
    switch (props.theme) {
      case `${Theme.BLUE_RED}`:
        return `
          background-color: ${PrimaryColor.glintsred};
        `;
      default:
        return `
          background-color: ${PrimaryColor.glintsyellow};
        `;
    }
  }}
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

  .loader {
    margin-right: .5em;
  }

  ${(props) => {
    switch (props.theme) {
      case `${Theme.RED}`:
        return `
          background-color: ${PrimaryColor.glintsred};
          color: ${SecondaryColor.white};
        `;
      case `${Theme.BLUE}`:
        return `
          background-color: ${PrimaryColor.glintsblue};
          color: ${SecondaryColor.white};
        `;
      case `${Theme.BLUE_RED}`:
        return `
          background-color: ${PrimaryColor.glintsblue};
          color: ${SecondaryColor.white};
        `;
      default:
        return `
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

  .loader {
    margin-right: .5em;
  }
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
 * Ghost Button
 */

export const GhostBtn = Button.extend`
  flex: 1;
  transition: background-color .5s;

  .loader {
    margin-right: .5em;
  }

  ${(props) => {
    switch (props.theme) {
      case `${Theme.RED}`:
        return `
          border: 2px solid ${PrimaryColor.glintsred};
          color: ${PrimaryColor.glintsred};
        `;
      case `${Theme.YELLOW}`:
        return `
          border: 2px solid ${PrimaryColor.glintsyellow};
          color: ${PrimaryColor.glintsyellow};
        `;
      case `${Theme.BLUE}`:
        return `
          border: 2px solid ${PrimaryColor.glintsblue};
          color: ${PrimaryColor.glintsblue};
        `;
      case `${Theme.WHITE}`:
        return `
          border: 2px solid ${SecondaryColor.white};
          color: ${SecondaryColor.white};
        `;
      default:
        return null;
    }
  }}

  &:hover {
    transition: background-color .5s;

    ${(props) => {
    switch (props.theme) {
      case `${Theme.RED}`:
        return `
            background-color: ${PrimaryColor.glintsred};
            color: ${SecondaryColor.white};
          `;
      case `${Theme.YELLOW}`:
        return `
            background-color: ${PrimaryColor.glintsyellow};
            color: ${SecondaryColor.white};
          `;
      case `${Theme.BLUE}`:
        return `
            background-color: ${PrimaryColor.glintsblue};
            color: ${SecondaryColor.white};
          `;
      case `${Theme.WHITE}`:
        return `
            background-color: ${SecondaryColor.white};
            color: ${PrimaryColor.glintsblue};
          `;
      default:
        return null;
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

  .loader {
    margin-right: .5em;
  }

  label {
    cursor: pointer;
  }
`;
