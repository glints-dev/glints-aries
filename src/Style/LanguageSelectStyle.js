import styled from 'styled-components';

export const ImageContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 19px;
    height: 19px;
    border-radius: 50%;
`;

export const Image = styled.img`
    object-fit: cover;
    border-radius: inherit;
    width: inherit;
    height: inherit;
    border: .15em solid white;
`;

export const ListBox = styled.ul`
    border: 1px solid black;
`;
