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
    left: 0;
    z-index: 100;

    ${({ position }) => {
    switch (position) {
      case 'bottom':
        return `
          top: 45px;
        `;
      default:
        return `
          bottom: 45px;
        `;
    }
  }}
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
    left: calc(50% - 10px);

    ${({ position }) => {
    switch (position) {
      case 'bottom':
        return `
          border-bottom-color: ${SecondaryColor.black};
          top: 25px;
        `;
      default:
        return `
          border-top-color: ${SecondaryColor.black};
          bottom: 25px;
        `;
    }
  }}
  }
`;
