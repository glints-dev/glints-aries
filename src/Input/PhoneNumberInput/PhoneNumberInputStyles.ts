import styled, { css } from 'styled-components';
import {
  Greyscale,
  Loading,
  PrimaryColor,
  SecondaryColor,
  Shadow,
} from '../..';

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

export const Label = styled.label`
  position: absolute;
  left: 0.5em;
  top: -0.5em;
  visibility: hidden;

  padding: 0 0.3em;

  background: white;
  color: ${Greyscale.devilsgrey};
`;

const visibleLabel = css`
  + ${Label} {
    visibility: visible;
  }
`;

export const SignificantNumberInput = styled.input`
  border: none;

  width: 100%;
  font-size: 16px;
  padding: 12px;

  &:focus {
    outline: 2px solid ${SecondaryColor.actionblue};
    ::placeholder {
      color: transparent;
    }
    ${visibleLabel}
  }

  ${({ value }) => value && visibleLabel}

  &[data-invalid='true']:focus {
    outline: 2px solid ${PrimaryColor.glintsred};
  }
`;

export const TopRowAddon = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
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
export const CallingCodeFilterInputGroup = styled.div`
  position: relative;
  width: 90%;
  width: calc(100% - 2 * ${CALLING_CODE_INPUT_MARGIN});
  margin: ${CALLING_CODE_INPUT_MARGIN};
`;

export const CallingCodeFilterInput = styled.input`
  width: 100%;
  border: 2px solid ${Greyscale.lightgrey};
  padding: 12px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    border: 2px solid ${SecondaryColor.actionblue};
    outline: none;
  }
`;

export const CallingCodeInputLoading = styled(Loading)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CallingCodeOptionsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 260px;
  overflow: auto;

  font-size: 16px;
`;

interface GroupHeaderProps {
  withGroupHeader: string;
}

const getGroupHeaderStyles = ({ withGroupHeader }: GroupHeaderProps) =>
  withGroupHeader &&
  css`
      content: '${withGroupHeader}';
      display: block;
      padding: 4px 8px;
      color: ${Greyscale.devilsgrey};
      font-size: 8px;
      border-bottom: 1px solid ${Greyscale.softgrey};
      text-transform: uppercase;
      background: white;
      cursor: default;
    `;

export const CallingCodeOption = styled.li<GroupHeaderProps>`
  cursor: pointer;
  &:hover {
    color: ${SecondaryColor.actionblue};
    background: ${Greyscale.softgrey};
  }
  &[aria-selected='true'] {
    color: ${SecondaryColor.actionblue};
    background: ${Greyscale.softgrey};
  }

  ::before {
    ${getGroupHeaderStyles}
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

export const GroupHeader = styled.div`
  padding: 4px 8px;
  color: ${Greyscale.devilsgrey};
  font-size: 8px;
  border-bottom: 1px solid ${Greyscale.softgrey};
  text-transform: uppercase;
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
