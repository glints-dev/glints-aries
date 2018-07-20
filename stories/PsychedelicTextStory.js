import React from 'react';
import PsychedelicText from './../src/PsychedelicText';

const PsychedelicTextStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Psychedelic Text</h1>
        <p><code>{`import PsychedelicText from 'glints-aries'`}</code></p>
      </div>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <PsychedelicText heading>Heading</PsychedelicText>
            </td>
            <td><code>{`<PsychedelicText heading onClick={...}>Glints</PsychedelicText>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <PsychedelicText subheading psychTheme="yellow-dominant">Sub Heading</PsychedelicText>
            </td>
            <td><code>{`<PsychedelicText subheading psychTheme="yellow-dominant" onClick={...}>Glints</PsychedelicText>`}</code></td>
          </tr>
        </tbody>
      </table>

      <h1>Props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>heading</td>
            <td>boolean</td>
            <td><pre>{`true | false`}</pre></td>
            <td>yes</td>
            <td>It's used to display Main Heading</td>
          </tr>
          <tr>
            <td>subheading</td>
            <td>boolean</td>
            <td><pre>{`true | false`}</pre></td>
            <td>yes</td>
            <td>It's used to display Sub Heading</td>
          </tr>
          <tr>
            <td>psychTheme</td>
            <td>string</td>
            <td>
              <pre>{`blue-dominant | 
blue-default | 
red-dominant | 
red-default | 
yellow-dominant | 
yellow-default`}</pre>
            </td>
            <td>yes</td>
            <td>This props is only available along with <b>subheading</b> props.<br />It's a required props to display Psychedelic Effect on the text.</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>Function</td>
            <td>any</td>
            <td>no</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PsychedelicTextStory;
