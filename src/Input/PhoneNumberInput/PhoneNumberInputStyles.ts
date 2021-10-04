import styled, { css } from 'styled-components';
import { Greyscale, PrimaryColor, SecondaryColor, Shadow } from '../..';

export const PhoneNumberInputContainer = styled.div`
  position: relative;
`;

export const TopRow = styled.div`
  display: flex;

  border: 2px solid ${Greyscale.grey};
  align-items: center;

  &[data-invalid='true'] {
    border: 2px solid ${PrimaryColor.glintsred};
  }
`;

export const CallingCodeInputToggle = styled.button`
  border: none;
  background: none;
  padding: 12px;
  padding-right: 0;
  cursor: text;
  font-size: 16px;

  display: flex;
  align-items: bottom;
`;

export const CallingCodeInputOpenIndicator = styled.span`
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${Greyscale.lightgrey};
  cursor: pointer;

  svg {
    margin-top: -2px;
  }
`;

export const SignificantNumberInput = styled.input`
  border: none;

  width: 100%;
  font-size: 16px;
  padding: 12px;

  &:focus {
    outline: 2px solid ${SecondaryColor.actionblue};
  }

  &[data-invalid='true']:focus {
    outline: 2px solid ${PrimaryColor.glintsred};
  }
`;

export const CallingCodeInput = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: none;
  z-index: 2;
  background: white;
  margin-top: 4px;
  width: 100%;

  border: 1px solid ${Greyscale.lightgrey};
  box-shadow: ${Shadow.down1};

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: initial;
    `}
`;

const CALLING_CODE_INPUT_MARGIN = '8px';
export const CallingCodeFilterInput = styled.input`
  width: 90%;
  width: calc(100% - 2 * ${CALLING_CODE_INPUT_MARGIN});
  margin: ${CALLING_CODE_INPUT_MARGIN};

  border: 2px solid ${Greyscale.lightgrey};
  padding: 12px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    border: 2px solid ${SecondaryColor.actionblue};
    outline: none;
  }
`;

export const CallingCodeOptionsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;

  font-size: 16px;
`;

export const CallingCodeOption = styled.li`
  display: flex;

  cursor: pointer;
  &:hover {
    color: ${SecondaryColor.actionblue};
    background: ${Greyscale.softgrey};
  }
  &[aria-selected='true'] {
    color: ${SecondaryColor.actionblue};
    background: ${Greyscale.softgrey};
  }
`;

export const CallingCodeOptionCallingCode = styled.div`
  min-width: 48px;
  margin-right: 8px;
  padding: 8px;
  padding-right: 0;
`;

export const CallingCodeOptionLabel = styled.div`
  width: 100%;
  padding: 8px;
  padding-left: 0;

  color: ${Greyscale.devilsgrey};
  &:hover {
    color: inherit;
  }
`;

export const NoOptions = styled.div`
  padding: 24px 8px;
  text-align: center;
  color: ${Greyscale.devilsgrey};
  font-size: 14px;
`;

export const Error = styled.div`
  margin-top: 8px;

  color: ${PrimaryColor.glintsred};
`;
