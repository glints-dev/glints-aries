import React from 'react';

const IntroStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{marginBottom: '2.5em'}}>
        <h1>Glints Aries</h1>
        <p style={{paddingRight: '25%'}}>We proudly present to you Glints-aries made by Front End Engineers of Glints. It's a Frontend framework to simplify and speed up your development. It's a project rebuilt with React and Styled Components. We are still actively develop this project day by day. So there are still a lot of amazing components to be built.
        <br />We also make sure to make this project as flexible as we can, so that you can also customize the styling with your own style!</p>
      </div>

      <div style={{marginBottom: '2.5em'}}>
        <h3 style={{marginBottom: '.5em'}}>Installation</h3>
        <p><code>{`npm install -S glints-aries`}</code></p>
      </div>

      <div style={{marginBottom: '2.5em'}}>
        <h3 style={{marginBottom: '.5em'}}>How to use</h3>
        <p>Just import the component into your component file and follow the instruction on the component section.<br />
          <code>{`import { ... } from 'glints-aries'`}</code>
        </p>
      </div>
      
      <div style={{marginBottom: '2.5em'}}>
        <h3 style={{marginBottom: '.5em'}}>How to override the style</h3>
        <h4>Override using css.</h4>
        <p style={{marginBottom: '.5em'}}>You can override the style with your own styling by simply put a <b>class</b> or <b>id</b> on the component.</p>
        <p>Example:
          <code>{`<Heading className="overrideHeading" size="small">Small Heading</Heading>`}</code>
        </p>
        <pre style={{backgroundColor: 'transparent', display: 'inline-block', margin: '1em 0'}}>
          {
            `.yourClass {
  .overrideHeading { your override style goes here }
}`
          }
        </pre>
        <h4>Override using styled-component.</h4>
        <p>It's pretty easy to override through styled-component. We can do it in many ways.</p>
        <p>1. You can add a <b>class</b> or <b>id</b> into the component. Then you can simply access that class/ id inside of your styled-component.</p>
        <pre style={{backgroundColor: 'transparent', display: 'inline-block', margin: '1em 0'}}>
          {
            `const HomeContainer = styled.div ${"`"}
  .overrideHome { your override style goes here }
${"`"}
`
          }
        </pre>
        <p>2. You can also override directly the element inside your styled-component.</p>
        <pre style={{backgroundColor: 'transparent', display: 'inline-block', margin: '1em 0'}}>
          {
            `const HomeContainer = styled.div ${"`"}
  img { your override style goes here }
${"`"}
`
          }
        </pre>
      </div>

    </div>
  );
}

export default IntroStory;