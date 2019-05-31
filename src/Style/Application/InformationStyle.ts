import styled from 'styled-components';
import { SecondaryColor } from '../Colors';

export const InformationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.p<TitleWrapperProps>`
  text-transform: ${({ bold }) => bold ? 'uppercase' : null};
  font-weight: ${({ bold }) => bold ? 'bold' : null};
  font-size: ${({ bold }) => bold ? '30px' : '18px'};
  margin-bottom: 15px;
`;

interface TitleWrapperProps {
  bold: boolean;
}

export const DescriptionWrapper = styled.p`
  font-size: 12px;
  font-weight: 100;
  color: ${SecondaryColor.grey};
  margin-bottom: 30px;
  margin: 0;
`;

export const DetailWrapper = styled.div`
  position: relative;
    
  li {
    color: ${SecondaryColor.lightgrey};
    font-size: 12px;
    font-weight: 100;
    margin-bottom: .5em;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      font-weight: 500;
      color: rgba(0, 0, 0, .4);
    }
  }
`;
