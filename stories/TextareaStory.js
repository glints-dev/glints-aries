import React from 'react';
import Textarea from '../src/Textarea';

const TextareaStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Textarea
      </h1>
      <p>
        <code>
          {'import { Textarea } from \'glints-aries\''}
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
            <Textarea label="Job" />
          </td>
          <td>
            <code>
              {'<Textarea />'}
            </code>
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
            label
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets title for Textarea.
          </td>
        </tr>
        <tr>
          <td>
            value
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets default value of Textarea.
          </td>
        </tr>
        <tr>
          <td>
            status
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              success | error
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Sets different style for the Textarea based on status.
          </td>
        </tr>
        <tr>
          <td>
            disabled
          </td>
          <td>
            boolean
          </td>
          <td>
            <pre>
              {'true | false'}
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Disable Textarea.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TextareaStory;
