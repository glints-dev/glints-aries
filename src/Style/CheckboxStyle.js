import styled from 'styled-components';
import { SecondaryColor } from './Colors';

export const Container = styled.div`
  position: relative;
  font-size: 1em;
  line-height: 1.5;

  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;

    &:checked + label:after {
      content: '';
      display: block;
      position: absolute;
      top: .15em;
      left: .4em;
      width: .5em;
      height: 1em;
      border: solid ${SecondaryColor.white};
      border-width: 0 .15em .15em 0;
      transform: rotate(45deg);
    }

    &:checked + label:before {
      background: ${SecondaryColor.green};
      border: 2px solid ${SecondaryColor.green};
    }
  }

  label {
    position: relative;
    display: flex;
    cursor: pointer;

    &:before{
      content:'';
      -webkit-appearance: none;
      background-color: transparent;
      border: 2px solid ${SecondaryColor.lightblack};
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
      padding: .6em;
      display: inline-block;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      margin-right: .5em;
      border-radius: 4px;
    }
  }
`;
