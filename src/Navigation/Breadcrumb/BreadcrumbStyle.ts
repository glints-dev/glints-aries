import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';

export const BreadcrumbItemWrapper = styled.label<BreadcrumbItemWrapper>`
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  font-size: 1em;
  line-height: 1.5;

  * {
    color: ${({ active }) =>
      active ? `${Greyscale.grey}` : `${Greyscale.black}`};
  }

  span {
    margin: 0 1em;
    color: #aaaaaa;
  }
`;

interface BreadcrumbItemWrapper {
  active?: boolean;
}

export const BreadcrumbContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${Greyscale.softgrey};
  padding: 1em;

  label.aries-breadcrumb-item:last-child span {
    display: none;
  }
`;
