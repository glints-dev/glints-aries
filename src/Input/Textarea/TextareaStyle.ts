import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';

export const TextareaContainer = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
`;

export const TextareaLabel = styled.label<TextareaLabelProps>`
  position: absolute;
  left: 22px;
  top: 1em;
  color: ${Greyscale.devilsgrey};
  transition: all 0.2s;
  pointer-events: none;
  font-weight: 400;
  font-size: 16px;

  ${({ floating }) => {
    if (floating) {
      return `
        padding: 0 5px;
        transform: translate3d(-15px,-20px,0);
        transition: all .2s;
        font-size: 12px;
        background: ${Greyscale.white}
      `;
    }
  }}
`;

interface TextareaLabelProps {
  floating: boolean;
  status?: string;
  small?: boolean;
}

export const TextareaInput = styled.textarea<TextareaInputProps>`
  position: relative;
  width: 100%;
  outline: none;
  font-size: 16px;
  line-height: 1.5;
  padding: ${({ small }) => (small ? '8px 16px' : '12px 16px')};
  background-color: ${({ status }) =>
    status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.08)'};
  border: unset;
  transition: border 0.5s;
  resize: vertical;
  overflow: auto;
  height: auto;
  border-radius: ${({ small }) => (small ? '4px' : '8px')};

  &:disabled {
    cursor: not-allowed;
    background: ${Greyscale.softgrey};

    + ${TextareaLabel} {
      background: transparent;
      color: ${Greyscale.grey};
    }

    &:hover {
      border: 2px solid ${Greyscale.lightgrey};
    }
  }

  &:hover {
    background-color: ${({ status }) =>
      status === 'error'
        ? ' rgba(236, 39, 43, 0.08)'
        : 'rgb(1, 126, 183, 0.16)'};
    border: unset;

    + ${TextareaLabel} {
      color: ${Greyscale.devilsgrey};
    }
  }

  &:focus {
    background-color: ${({ status }) =>
      status === 'error'
        ? ' rgba(236, 39, 43, 0.08)'
        : 'rgb(1, 126, 183, 0.24)'};
    border: unset;

    + ${TextareaLabel} {
      padding: 0 5px;
      transform: translate3d(-15px, -20px, 0);
      transition: all 0.2s;
      color: ${Greyscale.devilsgrey};
      font-size: 12px;
      background: ${Greyscale.white};
    }
  }
`;

interface TextareaInputProps {
  floating?: boolean;
  status?: string;
  small?: boolean;
}
