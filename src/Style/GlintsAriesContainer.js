import styled from 'styled-components';

export const GlintsAriesContainer = styled.div`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins';
        font-size: 1.4rem;
    }

    h1, h2, h3,
    h4, h5, h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-bottom: 0;
    }

    p {
        margin: 0;
    }
`;

export default GlintsAriesContainer;
