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
 * CTA Button
 */

export const CTAContainer = styled.div`
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

export const CTABtn = Button.extend`
  flex: 1;
  background-color: ${PrimaryColor.glintsred};
  color: ${SecondaryColor.white};
  transition: all .2s;

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
 * Job Card Button
 */

const Bouncing = keyframes`
  25%, 75% {
    transform: translate3d(0, 0, 0);
  }

  50%, 100% {
    transform: translate3d(-.265em, -.265em, 0);
  }
`;

export const JobCardBtn = Button.extend`
  flex: 1;
  background-color: ${SecondaryColor.whitesmoke};
  color: ${SecondaryColor.black};
  transition: all .2s;
  z-index: 2;
`;

export const JobCardContainer = styled.div`
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
    ${JobCardBtn} {
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
    ${JobCardBtn} {
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

export const SecondaryBtn = Button.extend`
  flex: 1;
  border: 2px solid ${PrimaryColor.glintsred};
  color: ${PrimaryColor.glintsred};
  transition: background-color .5s;

  &:hover {
    background-color: ${PrimaryColor.glintsred};
    color: ${SecondaryColor.white};
    transition: background-color .5s;
  }

  &:active {
    background-color: ${SecondaryColor.black};
    color: ${SecondaryColor.white};
    border: 2px solid ${SecondaryColor.black};
    transition: background-color .5s; 
  }
`;

