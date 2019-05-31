import styled from 'styled-components';
import { PrimaryColor, SecondaryColor } from '../Colors';

export const SwitchContainer = styled.div<SwitchContainerProps>`
  position: relative;
  display: flex;
  background: ${SecondaryColor.lighterblack};
  border-radius: 3em;

  label {
    display: flex;
    justify-content: center;
    color: ${SecondaryColor.white};
    font-weight: 100;
    padding: 1em;
    width: 100%;
  }

  &:before {
    content: '';
    background: ${PrimaryColor.glintsblue};
    width: 50%;
    height: 100%;
    border-radius: 3em;
    display: flex;
    position: absolute;
    left: 0;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
    transform: ${({ ID, items, defaultValue }) => ID && items[0] === defaultValue ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .2s ease-out;
  }
`;

interface SwitchContainerProps {
  ID: string;
  items: string[];
  defaultValue: string;
}

export const SwitchItemWrapper = styled.div`
  flex: 1 auto;
`;
