import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const AccordionContainer = styled.div`
  position: relative;
`;

export const AccordionContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: .6em;
  font-size: 1em;
  line-height: 1.5;
  padding: 1.5em 0;
  cursor: pointer;
  outline: none;

  p {
    margin: 0;
    font-weight: bold;

    &:hover {
      color: ${SecondaryColor.actionblue};
    }
  }

  &:not(:last-child):after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${SecondaryColor.lightgrey};
  }
`;

export const AccordionPanelWrapper = styled.div`
  position: relative;
  
  &:focus {
    outline: none;
  }

  &:focus > ${AccordionContentWrapper} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const AccordionIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
`;

export const AccordionContent = styled.div`
  grid-column-start: 2;
  cursor: default;
`;
