import * as React from 'react';

import { action } from '@storybook/addon-actions';

import Button from '../../src/General/Button';
import Heading from '../../src/General/Heading';
import Collapsible from '../../src/Display/Collapsible';
import Divider from '../../src/General/Divider';

import { Variant, Theme } from '../../src/Utils/StyleConfig';

const ButtonStories = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Button
      </h1>
      <p>
        <code>
          {'import { Button } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Default Button</Heading>
      <Button theme="blue" onClick={action('Default Button')}>
        Default
      </Button>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Button
  theme="blue"
>
  Default
</Button>`}
        </pre>
      </Collapsible>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan={6}>
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
              variant
            </td>
            <td>
              string
            </td>
            <td>
              <code>
                default
              </code>
            </td>
            <td></td>
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
            <td></td>
            <td>
              <code>
                red | blue | yellow
              </code>
            </td>
            <td>
              no
            </td>
            <td>
              Default theme is white.
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
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to disable state.</td>
          </tr>
          <tr>
            <td>
              block
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to block type.</td>
          </tr>
          <tr>
            <td>
              small
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to small version.</td>
          </tr>
          <tr>
            <td>
              removeHoverEffect
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>{'Removes Button\'s effect when hovered'}</td>
          </tr>
          <tr>
            <td>
              onClick
            </td>
            <td>
              function
            </td>
            <td></td>
            <td>
              function
            </td>
            <td>
              no
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <Divider theme="grey" />

    <div style={{ marginTop: '4em', marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Primary Button</Heading>
      <Button variant={Variant.PRIMARY} theme={Theme.YELLOW} onClick={action('Primary Button')}>
        Primary
      </Button>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Button
  variant="primary"
  theme="yellow"
>
  Primary
</Button>`}
        </pre>
      </Collapsible>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan={6}>
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
              variant
            </td>
            <td>
              string
            </td>
            <td>
              <code>
                primary
              </code>
            </td>
            <td></td>
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
              <code>
                white
              </code>
            </td>
            <td>
              <code>
                red | blue | blue-red | yellow
              </code>
            </td>
            <td>
              no
            </td>
            <td>
              Sets theme color for Primary Button.
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
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to disable state.</td>
          </tr>
          <tr>
            <td>
              block
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to block type.</td>
          </tr>
          <tr>
            <td>
              small
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to small version.</td>
          </tr>
          <tr>
            <td>
              onClick
            </td>
            <td>
              function
            </td>
            <td></td>
            <td>
              function
            </td>
            <td>
              no
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <Divider theme="grey" />

    <div style={{ marginTop: '4em', marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Secondary Button</Heading>
      <Button variant={Variant.SECONDARY} onClick={action('Secondary Button')}>
        Secondary
      </Button>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Button
  variant="secondary"
>
  Secondary
</Button>`}
        </pre>
      </Collapsible>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan={6}>
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
              variant
            </td>
            <td>
              string
            </td>
            <td>
              <code>
                secondary
              </code>
            </td>
            <td></td>
            <td>
              yes
            </td>
            <td>
              Sets the Secondary Button.
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
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to disable state.</td>
          </tr>
          <tr>
            <td>
              block
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to block type.</td>
          </tr>
          <tr>
            <td>
              small
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to small version.</td>
          </tr>
          <tr>
            <td>
              onClick
            </td>
            <td>
              function
            </td>
            <td></td>
            <td>
              function
            </td>
            <td>
              no
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <Divider theme="grey" />

    <div style={{ marginTop: '4em', marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Ghost Button</Heading>
      <Button variant={Variant.GHOST} theme={Theme.BLUE} onClick={action('Ghost Button')}>
        Ghost
      </Button>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Button
  variant="ghost"
  theme="blue"
>
  Ghost
</Button>`}
        </pre>
      </Collapsible>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan={6}>
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
              variant
            </td>
            <td>
              string
            </td>
            <td>
              <code>
                ghost
              </code>
            </td>
            <td></td>
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
            <td></td>
            <td>
              <code>
                red | blue | yellow | white
              </code>
            </td>
            <td>
              yes
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              disabled
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to disable state.</td>
          </tr>
          <tr>
            <td>
              block
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to block type.</td>
          </tr>
          <tr>
            <td>
              small
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to small version.</td>
          </tr>
          <tr>
            <td>
              removeHoverEffect
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>{'Removes Button\'s effect when hovered'}</td>
          </tr>
          <tr>
            <td>
              onClick
            </td>
            <td>
              function
            </td>
            <td></td>
            <td>
              function
            </td>
            <td>
              no
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <Divider theme="grey" />

    <div style={{ marginTop: '4em', marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Link Button</Heading>
      <Button variant={Variant.LINK} theme={Theme.RED} onClick={action('Link Button')}>
        Link
      </Button>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Button
  variant="link"
  theme="blue"
>
  Link
</Button>`}
        </pre>
      </Collapsible>
    </div>

    <div>
      <table className="doc-table">
        <thead>
          <tr style={{ borderBottom: '1px solid lightgrey' }}>
            <th colSpan={6}>
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
              variant
            </td>
            <td>
              string
            </td>
            <td>
              <code>
                link
              </code>
            </td>
            <td></td>
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
            <td></td>
            <td>
              <code>
                red | yellow | blue | grey | white
              </code>
            </td>
            <td>
              yes
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              disabled
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to disable state.</td>
          </tr>
          <tr>
            <td>
              block
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to block type.</td>
          </tr>
          <tr>
            <td>
              small
            </td>
            <td>
              boolean
            </td>
            <td>
              <code>
                false
              </code>
            </td>
            <td>
              <code>
                true | false
              </code>
            </td>
            <td>
              no
            </td>
            <td>Sets Button to small version.</td>
          </tr>
          <tr>
            <td>
              onClick
            </td>
            <td>
              function
            </td>
            <td></td>
            <td>
              function
            </td>
            <td>
              no
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
);

export default ButtonStories;
