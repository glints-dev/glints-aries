import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const DatepickerContainer = styled.div`
  position: relative;
`;

export const DatepickerWrapper = styled.div`
  position: absolute;
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  transform: ${({ isOpen }) => isOpen ? 'scaleY(1)' : 'scaleY(0.9)'};
  transform-origin: center top;
  transition: ${({ isOpen }) => isOpen ? 'all .2s ease' : 'all .1s ease'};
  background: ${SecondaryColor.white};
  width: 280px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-top: .5em;
  outline: none;
  z-index: 1000;
`;

export const DatepickerSection = styled.div`
  padding: 10px;
  border-bottom: ${({ border }) => border && '1px solid #E8E8E8'};
`;

export const DatepickerContent = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: center;
`;

export const DatepickerTodayBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${SecondaryColor.blue};
  }
`;

export const DatepickerIconWrapper = styled.div`
  font-size: 8px;
  cursor: pointer;
`;

export const DatepickerTable = styled.table`
  width: 100%;
  max-width: 100%;
`;

export const Td = styled.td`
  padding: 3px 0;
  text-align: center;
`;

export const Th = styled.th`
  padding: 3px 0;
  text-align: center;
`;

export const HoverContent = styled.div`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  transition: background .3s ease;
  background-color: transparent;
  line-height: 22px;
  ${({ selectedDate, index }) => selectedDate && selectedDate === index
    ? `
      background-color: #1890ff;
      color: white;
  `
    : null}
  ${({ hoverAble }) => hoverAble
    ? `
      cursor: pointer;
      &:hover { 
          background-color: #E5F7FF;
      }
  `
    : null}
`;

export const DatepickerGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: .5em;
`;
