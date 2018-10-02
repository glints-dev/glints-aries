import styled, { keyframes } from 'styled-components';
import { SecondaryColor } from '../Colors';

const growing = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: auto;
  }
`;

export const DropdownLabel = styled.div`
  margin-right: 3em;
  cursor: pointer;
`;

export const DropdownItem = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1em 1.3em;
  color: ${SecondaryColor.lightblack};
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const DropdownItemWrapper = styled.div`
  position: absolute;
  left: ${({ center }) => center ? '50%' : null};
  width: ${({ center }) => center ? 'calc(100% - 1.4em - 1.4em)' : '100%'};
  background: ${SecondaryColor.white};
  padding: 0px;
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);
  max-height: 180px;
  animation: ${growing} .2s linear;
  border: solid 1px #eeeeee;
  overflow-y: auto;
  transform: ${({ center }) => center ? 'translateX(-50%)' : null};
  font-size: ${({ fontSize }) => fontSize || null};

  ${DropdownItem} {
    ${({ iconWrapper }) => iconWrapper ? (
    `
      display: grid;
      grid-template-columns: 15px 1fr;
      grid-column-gap: 1em;
      align-items: center;
    `
  ) : null};
  }
`;

export const DropdownLabelWrapper = styled.div`
  display: flex;
  justify-content: ${({ spaceBetween }) => spaceBetween ? 'space-between' : null};
  align-items: center;
  cursor: pointer;
  padding: ${({ noPadding }) => noPadding ? null : '.7em'};
  font-size: ${({ fontSize }) => fontSize || null};
  font-weight: ${({ fontWeight }) => fontWeight || null};
`;

export const DropdownContainer = styled.div`
  outline: none;
  position: relative;

  ${DropdownLabelWrapper} {
    background: ${({ open, backGroundColor }) => open ? `${SecondaryColor.blue}` : backGroundColor};
    color: ${({ open }) => open ? `${SecondaryColor.white}` : `${SecondaryColor.blue}`};
    transition: all .3s;

    &:hover {
      background: ${({ hoverBackGroundColor }) => hoverBackGroundColor || null};
      color: ${({ hoverColor }) => hoverColor || null};
      transition: all .3s;
    }
  }

  ${DropdownItemWrapper} {
    margin-top: ${({ noPadding }) => noPadding ? '10px' : null};
  }
`;
