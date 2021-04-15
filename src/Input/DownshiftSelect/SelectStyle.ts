import styled from 'styled-components';
import Loading from '../../General/Loading';
import { Greyscale, PrimaryColor, SecondaryColor } from '../../Utils/Colors';
import { Shadow } from '../../Utils/Shadow';
import { ItemProps } from './Select';

export const Container = styled.div`
  position: relative;
  font-size: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${Greyscale.devilsgrey};
  font-weight: 500;

  &[data-active='true'] {
    color: ${SecondaryColor.actionblue};
  }

  &[data-disabled='true'] {
    color: ${Greyscale.lightgrey};
  }

  &[data-invalid='true'] {
    color: ${PrimaryColor.glintsred};
  }
`;

export const Combobox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 0.75em;
  padding: 0.75em 1em 0.75em 1em;
  border-radius: 0.5em;
  background-color: #ebf5fa;

  :hover {
    background-color: #d6eaf2;
  }

  &[aria-expanded='true'],
  &[data-active='true'] {
    background-color: #c2e0ed;
  }

  &[data-disabled='true'] {
    background-color: ${Greyscale.softgrey};
  }

  &[data-invalid='true'] {
    background-color: #feeeee;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${Greyscale.devilsgrey};
  font-size: inherit;
  text-overflow: ellipsis;

  &:not([value='']) {
    color: black;
  }

  :disabled::placeholder {
    color: ${Greyscale.lightgrey};
  }
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  > :not(:last-child) {
    margin-right: 0.75em;
  }
`;

export const _IndicatorButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: ${Greyscale.devilsgrey};
  font-size: inherit;
`;

export const ClearButton = styled(_IndicatorButton)``;

export const ToggleButton = styled(_IndicatorButton)``;

export const LoadingIndicator = styled(Loading)`
  align-items: center;
  font-size: 0.5625em;
`;

export const Menu = styled.ul`
  margin-top: 4px;
  position: absolute;
  width: 100%;
  padding: 0.5em 0 0.5em 0;
  border: 1px solid #eeeeee;
  border-radius: 0.5em;
  box-shadow: ${Shadow.down3};
  background-color: white;
  z-index: 1;

  [aria-expanded='false'] + & {
    visibility: hidden;
  }
`;

export const Item = styled.li<ItemProps>`
  padding: 0.5em 1em;
  list-style-type: none;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &[aria-selected='true'] {
    background-color: ${Greyscale.softgrey};
    color: ${SecondaryColor.actionblue};
  }

  &[disabled] {
    background-color: transparent;
    color: ${Greyscale.lightgrey};
    cursor: not-allowed;
  }
`;

export const EmptyList = styled.li`
  padding: 0.5em 1em;
  list-style-type: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${Greyscale.lightgrey};
  cursor: not-allowed;
`;

export const HelperText = styled.span`
  margin-top: 4px;
  color: ${Greyscale.devilsgrey};
  font-size: 0.875em;

  &[data-invalid='true'] {
    color: ${PrimaryColor.glintsred};
  }
`;
