import React from 'react';

import PsychedelicText from '../../src/General/PsychedelicText';
import Heading from '../../src/General/Heading';
import Collapsible from '../../src/Display/Collapsible';
import Divider from '../../src/General/Divider';

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

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Heading</Heading>
      <PsychedelicText type="heading">
        Glints
      </PsychedelicText>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<PsychedelicText type="heading">
  Glints
</PsychedelicText>`}
        </pre>
      </Collapsible>
    </div>

    <Divider theme="grey" />

    <div style={{ marginTop: '4em', marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Subheading</Heading>
      <PsychedelicText type="subheading" psychTheme="yellow-dominant">
        Glints
      </PsychedelicText>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<PsychedelicText
  type="subheading"
  psychTheme="yellow-dominant"
>
  Glints
</PsychedelicText>`}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              Props
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
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
          <td></td>
          <td>
            <code>
              heading | subheading
            </code>
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
          <td></td>
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
