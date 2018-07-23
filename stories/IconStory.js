import React from 'react';
import Icon from './../src/Icon';

const IconStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Icon</h1>
        <p><code>{`import { Icon } from 'glints-aries'`}</code></p>
      </div>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="6">
              Usage
            </th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan="6"><code>{`<Icon name="add" color="black" size="25" />`}</code></td>
            </tr>
        </tbody>
        <thead>
          <tr>
            <th colSpan="6">
              Preview
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
                <Icon name="add" color="black" size="25" />
                <p><code>add</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="add-outline" color="black" size="25" />
                <p><code>add-outline</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="arrow-back" color="black" size="25" />
                <p><code>arrow-back</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="arrow-down" color="black" size="25" />
                <p><code>arrow-down</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="arrow-next" color="black" size="25" />
                <p><code>arrow-next</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="arrow-up" color="black" size="25" />
                <p><code>arrow-up</code></p>
            </td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
                <Icon name="camera" color="black" size="25" />
                <p><code>camera</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="checkmark" color="black" size="25" />
                <p><code>checkmark</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="checkmark-outline" color="black" size="25" />
                <p><code>checkmark-outline</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="close" color="black" size="25" />
                <p><code>close</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="close-outline" color="black" size="25" />
                <p><code>close-outline</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="contact" color="black" size="25" />
                <p><code>contact</code></p>
            </td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
                <Icon name="facebook" color="black" size="25" />
                <p><code>facebook</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="instagram" color="black" size="25" />
                <p><code>instagram</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="linkedin" color="black" size="25" />
                <p><code>linkedin</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="notification" color="black" size="25" />
                <p><code>notification</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="person" color="black" size="25" />
                <p><code>person</code></p>
            </td>
            <td style={{padding: 20}}>
                <Icon name="twitter" color="black" size="25" />
                <p><code>twitter</code></p>
            </td>
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
            <td>name</td>
            <td>string</td>
            <td>based on the list</td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>hex-value | rba-value | string-value</td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>number</td>
            <td>yes</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default IconStory;
