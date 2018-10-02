import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const BreadcrumbItemWrapper = styled.label`
  cursor: pointer;
  font-size: 1em;
  line-height: 1.5;
  color: ${({ active }) => active && `${SecondaryColor.blue}`};

  span {
    margin: 0 1em;
    color: ${SecondaryColor.lighterblack};
  }
`;

export const BreadcrumbContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${SecondaryColor.whitesmoke};
  padding: 1em;
  color: ${SecondaryColor.lightblack};

  > label:last-child span {
    display: none;
  }
`;
