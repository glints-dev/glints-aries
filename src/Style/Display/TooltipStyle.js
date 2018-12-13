import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-flex;

  &:before,
  &:after {
    position: absolute;
    opacity: 0;
    transition: all 500ms;
    visibility: hidden;
  }

  &:before {
    content: '${({ text }) => text}';
    width: 100%;
    text-align: center;
    background-color: ${SecondaryColor.black};
    color: ${SecondaryColor.white};
    font-size: .8em;
    border-radius: 5px;
    padding: 5px;
    bottom: 45px;
    left: 0;
  }

  &:hover:before,
  &:hover:after {
    opacity: 1;
    visibility: visible;
  }

  &:after {
    content: "";
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${SecondaryColor.black};
    left: calc(50% - 10px);
    bottom: 25px;
  }
`;
