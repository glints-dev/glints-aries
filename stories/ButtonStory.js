import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/Button';
import { Variant, Theme } from '../src/Utils/StyleConfig';

const ButtonStories = () => (
  <div className="doc-mainbar">
    <h1>
      Button
    </h1>
    <p>
      <code>
        {'import { Button } from \'glints-aries\''}
      </code>
    </p>
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
            <Button theme="blue" onClick={action('default button')}>
              Default
            </Button>
          </td>
          <td>
            <code>
              {'<Button theme="blue">Default</Button>'}
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
            variant
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
            default
            </pre>
          </td>
          <td>
            yes
          </td>
          <td>
            Sets the Default Button.
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
            red | blue | yellow
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Default theme is white.
          </td>
        </tr>
      </tbody>
    </table>

    <hr className="doc-table" />

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
            <Button variant={Variant.PRIMARY} theme={Theme.BLUE} onClick={action('Primary button')}>
      Primary
            </Button>
          </td>
          <td>
            <code>
              {'<Button variant="primary" theme="red">Primary</Button>'}
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
      variant
          </td>
          <td>
      string
          </td>
          <td>
            <pre>
              {'primary'}
            </pre>
          </td>
          <td>
      yes
          </td>
          <td>
      Sets the Primary Button.
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
              {'red | blue'}
            </pre>
          </td>
          <td>
      no
          </td>
          <td>
      The default value is
            {' '}
            <b>
      white color
            </b>
.
          </td>
        </tr>
      </tbody>
    </table>

    <hr className="doc-table" />

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
            <Button variant={Variant.SECONDARY} onClick={action('job button')}>
      Secondary
            </Button>
          </td>
          <td>
            <code>
              {'<Button variant="secondary">Secondary</Button>'}
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
variant
          </td>
          <td>
string
          </td>
          <td>
            <pre>
              {'secondary'}
            </pre>
          </td>
          <td>
yes
          </td>
          <td>
Sets the Secondary Button.
          </td>
        </tr>
      </tbody>
    </table>

    <hr className="doc-table" />

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
            <Button variant={Variant.GHOST} theme={Theme.RED} onClick={action('secondary button')}>
Ghost
            </Button>
          </td>
          <td>
            <code>
              {'<Button variant="ghost" theme="red">Ghost</Button>'}
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
variant
          </td>
          <td>
string
          </td>
          <td>
            <pre>
              {'ghost'}
            </pre>
          </td>
          <td>
yes
          </td>
          <td>
Sets the Ghost Button.
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
red | blue | yellow | white
            </pre>
          </td>
          <td>
yes
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <hr className="doc-table" />

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
            <Button variant={Variant.LINK} theme={Theme.RED} onClick={action('link button')}>
Link
            </Button>
          </td>
          <td>
            <code>
              {'<Button variant="link" theme="blue">Link</Button>'}
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
variant
          </td>
          <td>
string
          </td>
          <td>
            <pre>
link
            </pre>
          </td>
          <td>
yes
          </td>
          <td>
Sets the Link Button.
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
yes
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default ButtonStories;
