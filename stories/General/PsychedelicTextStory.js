import React from 'react';
import PsychedelicText from '../../src/General/PsychedelicText';

const PsychedelicTextStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Psychedelic Text
      </h1>
      <p>
        <code>
          {'import { PsychedelicText } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
              Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <PsychedelicText type="heading">
              Glints
            </PsychedelicText>
          </td>
          <td>
            <pre>
              {`<PsychedelicText type="heading">
  Glints
</PsychedelicText>`}
            </pre>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 20 }}>
            <PsychedelicText type="subheading" psychTheme="yellow-dominant">
              Glints
            </PsychedelicText>
          </td>
          <td>
            <pre>
              {`<PsychedelicText
  type="subheading"
  psychTheme="yellow-dominant"
>
  Glints
</PsychedelicText>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Props
    </h1>
    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            type
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              {'heading | subheading'}
            </pre>
          </td>
          <td>
            yes
          </td>
          <td>
            {'It\'s used to display two different styles.'}
          </td>
        </tr>
        <tr>
          <td>
            psychTheme
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              {`blue-dominant | 
blue-default | 
red-dominant | 
red-default | 
yellow-dominant | 
yellow-default`}
            </pre>
          </td>
          <td>
            yes
          </td>
          <td>
            This props is only available along with
            {' '}
            <b>
            subheading
            </b>
            {' '}
            type.
            <br />
            {'It\'s a required props to display Psychedelic Effect on the text.'}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PsychedelicTextStory;
