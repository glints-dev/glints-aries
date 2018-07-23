import React from 'react';
import { GlintsAriesContainer } from '../src';

const IntroStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2.5em' }}>
      <h1>
        Glints Aries
      </h1>
      <p style={{ paddingRight: '25%' }}>
        We proudly present to you Glints-aries made by Front End Engineers of Glints. It's a Frontend framework to simplify and speed up your development. It's a project rebuilt with React and Styled Components. We are still actively develop this project day by day. So there are still a lot of amazing components to be built.
        <br />
        We also make sure to make this project as flexible as we can, so that you can also customize the styling with your own style!
      </p>
    </div>

    <div style={{ marginBottom: '2.5em' }}>
      <h3 style={{ marginBottom: '.5em' }}>
        Installation
      </h3>
      <p>
        <code>
          npm install -S glints-aries
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2.5em' }}>
      <h3 style={{ marginBottom: '.5em' }}>
        How to use
      </h3>
      <div style={{ marginBottom: '1em' }}>
        <p>
          {'Wrap component in'}
        </p>
        <code>
          {'<GlintsAriesContainer>{your component here}</GlintsAriesContainer>'}
        </code>
      </div>
      <div>
        <p>
        Just import the component into your component file and follow the instruction on the component section.
          <br />
          <code>
            {'import { ... } from \'glints-aries\''}
          </code>
        </p>
      </div>
    </div>

    <div style={{ marginBottom: '2.5em' }}>
      <h3 style={{ marginBottom: '.5em' }}>
        How to override the style
      </h3>
      <h4>
        Override using css.
      </h4>
      <p style={{ marginBottom: '.5em' }}>
        You can override the style with your own styling by simply put a
        {' '}
        <b>
          class
        </b>
        {' '}
          or
        {' '}
        <b>
          id
        </b>
        {' '}
          on the component.
      </p>
      <p>
        Example:
        <code>
          {'<Heading className="yourClass" size="small">Small Heading</Heading>'}
        </code>
      </p>
      <pre style={{ backgroundColor: 'transparent', display: 'inline-block', margin: '1em 0' }}>
        {
          `.yourClass {
  your override style goes here 
}`
        }
      </pre>
      <h4>
        Override using styled-component.
      </h4>
      <p>
        It's pretty easy to override through styled-component. You can use
        {' '}
        <b>
          styled
        </b>
        {' '}
          method.
      </p>
      <pre style={{ backgroundColor: 'transparent', display: 'inline-block', margin: '1em 0' }}>
        {
          `const ButtonOverride = styled('Button)${'`'}
  your override style goes here 
${'`'}
`
        }
      </pre>
    </div>

  </div>
);

export default IntroStory;
