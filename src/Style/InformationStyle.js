import styled from 'styled-components';
import { SecondaryColor } from './Colors';

export const InformationContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const TitleWrapper = styled.p`
    text-transform: ${props => props.bold ? 'uppercase' : null};
    font-weight: ${props => props.bold ? 'bold' : null};
    font-size: ${props => props.bold ? '30px' : '18px'};
    margin-bottom: .2em;
`;

export const DescriptionWrapper = styled.p`
    font-size: 12px;
    font-weight: 100;
    color: ${SecondaryColor.grey};
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
