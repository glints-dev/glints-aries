import React from 'react';
import Button from './../src/Button';
import { action } from '@storybook/addon-actions';
import ShareIcon from './../assets/icons/share.svg';

const ButtonStories = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Buttons</h1>
      <p>Usage: <code>{`import { Button } from '@glints-dev/glints-aries'`}</code></p>
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
              <Button variant="default" icon={ShareIcon} onClick={action('default button')}>Default Button</Button>
            </td>
            <td><code>{`<Button variant="default">Default Button</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant="cta" onClick={action('cta button')}>Hello World</Button>
            </td>
            <td><code>{`<Button variant="cta">Hello World</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant="job" onClick={action('job button')}>Hello World</Button>
            </td>
            <td><code>{`<Button variant="job">Hello World</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant="secondary" onClick={action('secondary button')}>Secondary</Button>
            </td>
            <td><code>{`<Button variant="secondary">Secondary</Button>`}</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ButtonStories;
