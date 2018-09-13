import styled from 'styled-components';

const StorybookStyle = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  h1, h2, h3,
  h4, h5, h6 {
    font-family: 'Poppins';
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
  
  a, p, label,
  ul, li, span,
  i, div, input,
  textarea {
    font-family: 'Poppins';
  }
`;

export default StorybookStyle;
