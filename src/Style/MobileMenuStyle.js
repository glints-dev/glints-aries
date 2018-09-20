import styled from 'styled-components';

import LanguageSelect from '../LanguageSelect';

import { SecondaryColor } from './Colors';

export const MobileMenuContainer = styled.div`
  position: relative;
  background: #027EB7;
  color: ${SecondaryColor.white};
  padding: 1.8em 0;
  height: 100vh;
  overflow-y: auto;
`;

export const TopIconWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  cursor: pointer;
`;

export const DividerWrapper = styled.div`
  margin: 2.2em .7em 1.4em; 
`;

export const HeaderWrapper = styled.header`
  margin: ${({ margin }) => margin ? '0 1.8em' : null};

  label {
    font-weight: 700;
    span {
      font-weight: 100;
      font-size: 18px;
    }
    p {
      margin: 0;
      cursor: pointer;
    }
  }
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const MenuItemWraper = styled.div`
  text-transform: uppercase;
  padding: 10px 1.2em;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s;

  a {
      text-decoration: none;
  }

  a,
  p,
  span,
  label,
  li {
      cursor: pointer;
  }
  &:hover {
      background: #0171A4;
  }
  &:first-child {
    padding: 10px 1.2em;
  }
`;

export const MenuFooter = styled.footer`
  margin-bottom: 10em;
`;

export const CustomLanguageSelect = styled(LanguageSelect)`
  padding: 1em 2em;
`;
