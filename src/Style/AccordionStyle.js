import styled from 'styled-components';
import { PrimaryColor } from './../Style/Colors';
import './GlobalStyle';

export const StyledAccordionWrapper = styled.div`
  max-width: 301px;
  min-width: 300px;
  min-height: 300px;
  border: solid 5px #cccccc;
`;

export const AccordionItemWrapper = styled.span`
  background: #f7f7f7;
  position: relative;
  width: 100%;
  display: block;
  padding: 20px 15px;
  max-height: 259px;
  overflow: scroll;
`;

export const StyledAccordionItem = styled.span`
  color: #000;
  display: inline-block;
  order: 1;
  width: 100%;
  position: relative;
  padding-bottom: 12px;

  &:last-child {
    padding-bottom: 0;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${PrimaryColor.glintsblue}
  }
`;

export const StyledAccordionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  padding-left: 22px;
  font-family: Poppins !important;
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.isOpen ? '#fff' : '#0869c2'}
  background-color: ${props => props.isOpen ? '#0869c2' : 'none'}

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #0869c2;
    text-decoration: none;
  }
`