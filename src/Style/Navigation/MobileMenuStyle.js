import styled from 'styled-components';

import LanguageSelect from '../../Input/LanguageSelect';

import { SecondaryColor } from '../Colors';

export const MobileMenuContainer = styled.div`
  position: relative;
  background: ${SecondaryColor.darkerblue};
  color: ${SecondaryColor.white};
  padding: 2em 0;
  height: 100vh;
  overflow-y: auto;
  outline: none;
`;

export const MobileMenuTopWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 2em;
  right: 1em;
  cursor: pointer;
  
  button {
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
  }
`;

export const MobileMenuHeaderWrapper = styled.header`
  margin: 0 1.5em;

  .header-profile {
    margin-top: 1em;
    font-weight: 700;

    span {
      font-weight: 100;
      font-size: 1.2em;
    }
    a, p, div, button, label {
      display: flex;
      margin: 0;
      font-size: 1.4em;
      cursor: pointer;
    }

    a {
      color: ${SecondaryColor.white};
    }
  }
`;

export const MobileMenuBodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.5em 0;
`;

export const MobileMenuItemWrapper = styled.div`
  text-transform: uppercase;
  padding: .6em 1em;
  font-size: 1.4em;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s;

  a {
    text-decoration: none;
    color: ${SecondaryColor.white};
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
`;

export const MobileMenuFooterWrapper = styled.footer`
  position: relative;
  margin-bottom: 8em;
`;

export const CustomLanguageSelect = styled(LanguageSelect)`
  padding: 1.4em;
`;
