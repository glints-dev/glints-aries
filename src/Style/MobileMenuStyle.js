import styled from 'styled-components';

import Divider from '../Divider/Divider';

import { PrimaryColor, SecondaryColor } from './Colors';

export const MobileMenuContainer = styled.div`
  position: relative;
  background: #027EB7;
  color: ${SecondaryColor.white};
  padding: 1.8em 0;
  min-width: 400px;
  height: 100vh;
`;

export const TopIconWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  cursor: pointer;
`;

export const DividerWrapper = styled.div`
  margin: 2.2em .7em;
`;

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 15px;
  align-items: center;
  margin: 0 1.8em;

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
  margin: 2em 1.8em 0;
`;

export const MenuItemWraper = styled.div`
  text-transform: uppercase;
  margin-bottom: 1.2em;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;

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
`;

export const MenuFooter = styled.footer`
  margin-top: 1em;

  > * {
      margin-bottom: 1em;
  }
`;
