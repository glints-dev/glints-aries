import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button';
import { Variant, Theme } from '../src/Utils/StyleConfig';

const ButtonStories = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>Button</h1>
      <p><code>{'import Button from \'glints-aries\''}</code></p>
    </div>

    <div style={{ marginBottom: '6em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="2"><h3>Default Button</h3></th>
          </tr>
          <tr>
            <th>Preview</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 20 }}>
              <Button theme="blue" onClick={action('Default Button')}>
                Default
              </Button>
            </td>
            <td><code>{'<Button theme="blue">Default</Button>'}</code></td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="5"><h3>Props</h3></th>
          </tr>
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
            <td>variant</td>
            <td>string</td>
            <td><pre>default</pre></td>
            <td>yes</td>
            <td>Sets the Default Button.</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>red | blue | yellow</pre></td>
            <td>no</td>
            <td>Default theme is white.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style={{ marginBottom: '6em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="2"><h3>Primary Button</h3></th>
          </tr>
          <tr>
            <th>Preview</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 20 }}>
              <Button variant={Variant.PRIMARY} theme={Theme.BLUE_RED} onClick={action('Primary Button')}>
                Primary
              </Button>
            </td>
            <td><code>{'<Button variant="primary" theme="red">Primary</Button>'}</code></td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="5"><h3>Props</h3></th>
          </tr>
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
            <td>variant</td>
            <td>string</td>
            <td><pre>{'primary'}</pre></td>
            <td>yes</td>
            <td>Sets the Primary Button.</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>{'red | blue | blue-red'}</pre></td>
            <td>no</td>
            <td>The default value is{' '}<b>white color</b>.</td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th><h3>Note</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Primary Button structure. For overriding purpose.</td></tr>
          <tr>
            <td><pre>{`<div>
  <button className="primaryButton">Primary</button>
</div>`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style={{ marginBottom: '6em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="2"><h3>Secondary Button</h3></th>
          </tr>
          <tr>
            <th>Preview</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 20 }}>
              <Button variant={Variant.SECONDARY} onClick={action('Secondary Button')}>
                Secondary
              </Button>
            </td>
            <td><code>{'<Button variant="secondary">Secondary</Button>'}</code></td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="5"><h3>Props</h3></th>
          </tr>
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
            <td>variant</td>
            <td>string</td>
            <td><pre>{'secondary'}</pre></td>
            <td>yes</td>
            <td>Sets the Secondary Button.</td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th><h3>Note</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Secondary Button structure. For overriding purpose.</td></tr>
          <tr>
            <td><pre>{`<div>
  <button className="secondaryButton">Secondary</button>
</div>`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>


    <div style={{ marginBottom: '6em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="2"><h3>Ghost Button</h3></th>
          </tr>
          <tr>
            <th>Preview</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 20 }}>
              <Button variant={Variant.GHOST} theme={Theme.RED} onClick={action('Ghost Button')}>
                Ghost
              </Button>
            </td>
            <td><code>{'<Button variant="ghost" theme="red">Ghost</Button>'}</code></td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="5"><h3>Props</h3></th>
          </tr>
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
            <td>variant</td>
            <td>string</td>
            <td><pre>{'ghost'}</pre></td>
            <td>yes</td>
            <td>Sets the Ghost Button.</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>{'red | blue | yellow | white'}</pre></td>
            <td>yes</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="2"><h3>Link Button</h3></th>
          </tr>
          <tr>
            <th>Preview</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: 20 }}>
              <Button variant={Variant.LINK} theme={Theme.RED} onClick={action('Link Button')}>
                Link
              </Button>
            </td>
            <td><code>{'<Button variant="link" theme="blue">Link</Button>'}</code></td>
          </tr>
        </tbody>
      </table>

      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan="5"><h3>Props</h3></th>
          </tr>
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
            <td>variant</td>
            <td>string</td>
            <td><pre>link</pre></td>
            <td>yes</td>
            <td>Sets the Link Button.</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>red | yellow | blue | grey | white</pre></td>
            <td>yes</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default ButtonStories;
