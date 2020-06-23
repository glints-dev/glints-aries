import styled from 'styled-components';
import { SecondaryColor } from '../../Style/Colors';

export const BreadcrumbItemWrapper = styled.label<BreadcrumbItemWrapper>`
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  font-size: 1em;
  line-height: 1.5;

  * {
    color: ${({ active }) =>
      active ? `${SecondaryColor.grey}` : `${SecondaryColor.black}`};
  }

  span {
    margin: 0 1em;
    color: ${SecondaryColor.lighterblack};
  }
`;

interface BreadcrumbItemWrapper {
  active?: boolean;
}

export const BreadcrumbContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${SecondaryColor.whitesmoke};
  padding: 1em;

  > label:last-child span {
    display: none;
  }
`;
