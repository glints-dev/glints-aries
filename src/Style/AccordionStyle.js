import styled, { keyframes } from 'styled-components';
import { PrimaryColor, SecondaryColor } from './Colors';

const animateItem = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const AccordionContainer = styled.div`
  border: 5px solid ${SecondaryColor.lightgrey};
  background-color: ${SecondaryColor.white};
`;

export const AccordionHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: ${({ isOpen }) => isOpen ? `${SecondaryColor.white}` : `${SecondaryColor.blue}`};
  background-color: ${({ isOpen }) => isOpen ? `${SecondaryColor.blue}` : null};
  padding: 1.8rem 1.5rem;

  &:hover {
    cursor: pointer;
    color: ${SecondaryColor.white};
    background-color: ${SecondaryColor.blue};
  }

  p {
    margin: 0;
    margin-right: 1em;
  }
`;

export const AccordionItemWrapper = styled.div`
  background: ${SecondaryColor.whitesmoke};
  position: relative;
  padding: 1.8rem 1.5rem;
  max-height: 250px;
  overflow-y: auto;
`;

export const AccordionItemList = styled.p`
  padding: .5rem 0;
  margin: 0;
  cursor: pointer;
  animation: ${animateItem} .3s linear;

  &:hover {
    color: ${PrimaryColor.glintsblue};
  }
`;

export const AccordionLabelWrapper = styled.div`
  padding: 1.8rem 1.5rem;
`;
