import React from 'react';
import Label from '../src/Label';
import { Theme, Size } from '../src/Utils/StyleConfig';

const LabelStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Label
      </h1>
      <p>
        <code>
          {'import { Label } from \'glints-aries\''}
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
            <Label>
              Default Label
            </Label>
          </td>
          <td>
            <code>
              {'<Label>No Variant Label</Label>'}
            </code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 20 }}>
            <Label block theme={Theme.GREY}>
              Grey Label
            </Label>
          </td>
          <td>
            <code>
              {'<Label block theme="grey">Grey Label</Label>'}
            </code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 20 }}>
            <Label size={Size.MEDIUM} theme={Theme.RED}>
              Red Label
            </Label>
          </td>
          <td>
            <code>
              {'<Label size="medium" theme="red">Danger Label</Label>'}
            </code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 20 }}>
            <Label size={Size.LARGE} theme={Theme.YELLOW}>
              Yellow Label
            </Label>
          </td>
          <td>
            <code>
              {'<Label size="large" theme="yellow">Warning Label</Label>'}
            </code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 20 }}>
            <Label size={Size.XLARGE} theme={Theme.BLUE}>
              Blue Label
            </Label>
          </td>
          <td>
            <code>
              {'<Label size="xlarge" theme="blue">Blue Label</Label>'}
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
            block
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
            Sets the label into block element.
          </td>
        </tr>
        <tr>
          <td>
            theme
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              red | yellow | blue | grey | white
            </pre>
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            size
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              medium | large | xlarge
            </pre>
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            onClick
          </td>
          <td>
            Function
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default LabelStory;
