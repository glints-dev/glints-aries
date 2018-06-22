import React from 'react';
import Button from './../src/Button';
import { action } from '@storybook/addon-actions';
import { Variant, Theme } from '../src/Utils/StyleConfig';

const ButtonStories = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Buttons</h1>
      <p>Usage: <code>{`import { Button } from glints-aries`}</code></p>
      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              props: <code>variant</code>
            </th>
            <th>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.DEFAULT} onClick={action('default button')}>Default</Button>
            </td>
            <td><code>{`<Button variant="default">Default</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.PRIMARY} onClick={action('cta button')}>Primary</Button>
            </td>
            <td><code>{`<Button variant="primary">Primary</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.SECONDARY} onClick={action('job button')}>Secondary</Button>
            </td>
            <td><code>{`<Button variant="secondary">Secondary</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.GHOST} theme={Theme.RED}  onClick={action('secondary button')}>Ghost</Button>
            </td>
            <td><code>{`<Button variant="ghost" theme="red">Ghost</Button>`}</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ButtonStories;
