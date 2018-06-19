import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';
import './GlobalStyle';

export const Button = styled.button`
  position: relative;
  border: none;
  text-transform: uppercase;
  padding: .6em 2.5em;
  outline: none;
  cursor: pointer;
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
  background-color: ${PrimaryColor.glintsred};
  color: ${SecondaryColor.white};
  transition: all .2s;
  font-size: 14px;

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

export const JobCardBtn = Button.extend`
  background-color: ${SecondaryColor.whitesmoke};
  color: ${SecondaryColor.black};
  transition: all .2s;
  font-size: 14px;
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
  }

    &:hover {
      ${JobCardBtn} {
        background-color: ${PrimaryColor.glintsyellow};
        transition: all .2s;
      }
    }

    &:hover:after {
      opacity: 1;
      transition: all .2s;
    }

    &:active {
      ${JobCardBtn} {
        background-color: ${SecondaryColor.black};
        color: ${SecondaryColor.white};
        transition: all .2s;
        transform: translate3d(.265em, .265em, 0);
      }
    }

    &:active:after {
      background-color: ${SecondaryColor.black};
      transform: translate3d(-.265em, -.265em, 0);
      transition: all .2s;
    }
`;

/*
 * Secondary Button
 */

export const SecondaryBtn = Button.extend`
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

