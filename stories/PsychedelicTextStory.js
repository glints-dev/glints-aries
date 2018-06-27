import React from 'react';
import PsychedelicText from './../src/PsychedelicText';

const PsychedelicTextStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Psychedelic Text</h1>
      <p>Usage: <code>{`import { PsychedelicText } from '@glints-dev/glints-aries'`}</code></p>

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
            <td><code>{`<PsychedelicText heading>Glints</PsychedelicText>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <PsychedelicText subheading psychTheme="yellowdominant-color">Sub Heading</PsychedelicText>
            </td>
            <td><code>{`<PsychedelicText subheading psychTheme="yellowdominant-color">Glints</PsychedelicText>`}</code></td>
          </tr>
        </tbody>
      </table>

      <h1>Available Props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>heading</td>
            <td>boolean</td>
            <td>true</td>
            <td><pre>{`true | false`}</pre></td>
            <td></td>
          </tr>
          <tr>
            <td>subheading</td>
            <td>boolean</td>
            <td>true</td>
            <td><pre>{`true | false`}</pre></td>
            <td></td>
          </tr>
          <tr>
            <td>psychTheme</td>
            <td>string</td>
            <td></td>
            <td>
              <pre>{`bluedominant-color | 
bluedominant-default | 
reddominant-color | 
reddominant-default | 
yellowdominant-color | 
yellowdominant-default`}</pre>
            </td>
            <td>This props is only available along with <b>subheading</b> props.<br />It's a required props to display Psychedelic Effect on the text.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PsychedelicTextStory;
