import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const DatepickerContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const DatepickerWrapper = styled.div<DatepickerWrapperProps>`
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

interface DatepickerWrapperProps {
  isOpen: boolean;
}

export const DatepickerSection = styled.div<DatepickerSectionProps>`
  padding: 10px;
  border-bottom: ${({ border }) => border && '1px solid #E8E8E8'};
`;

interface DatepickerSectionProps {
  border?: boolean;
}

export const DatepickerContent = styled.div<DatepickerContentProps>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: center;
`;

interface DatepickerContentProps {
  justify?: string;
}

export const DatepickerMonthYearBtn = styled.button`
  border: none;
  background: ${SecondaryColor.white};
  padding: 0;
  cursor: pointer;
  margin: 0 4px;

  &:hover {
    color: ${SecondaryColor.blue};
  }
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

export const DatepickerNavigation = styled.div`
  display: flex;
`;

export const DatepickerIconWrapper = styled.div<DatepickerIconWrapperProps>`
  display: flex;
  font-size: 8px;
  cursor: pointer;
  margin: ${({ needMargin }) => needMargin && '0 8px'};
`;

interface DatepickerIconWrapperProps {
  needMargin?: boolean;
}

export const DatepickerTable = styled.table`
  width: 100%;
  max-width: 100%;
`;

export const Td = styled.td`
  padding: 0;
`;

export const Th = styled.th`
  padding: 0;
`;

export const HoverContent = styled.div<HoverContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ biggerSize }) => !biggerSize ? '35px' : 'auto'};
  height: ${({ biggerSize }) => !biggerSize ? '35px' : '50px'};
  border-radius: 2px;
  transition: background .3s ease;
  background-color: transparent;
  line-height: 22px;
  ${({ currentActiveDate, index }) => currentActiveDate && currentActiveDate === index
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

interface HoverContentProps {
  biggerSize?: boolean;
  currentActiveDate?: string;
  index?: string;
  hoverAble?: boolean;
}

