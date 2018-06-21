import React from 'react';
import Button from './../src/Button';
import { action } from '@storybook/addon-actions';

const ButtonStories = () => {
  function test() {
    console.log('test');
  }

  return (
    <div className="doc-mainbar">
      <h1>Glints Buttons</h1>
      <p>Usage: <code>{`import { Button } from '[package-name]'`}</code></p>
      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              props: <code>variant</code>
            </th>
            <th onClick={test}>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Button variant="default" onClick={test}>default</Button>
            </td>
            <td><code>{`<Button variant="cta">Hello World</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button onClick={action('cta primary')} variant="cta" type="primary">CTA primary</Button>
            </td>
            <td><code>{`<Button variant="job">Hello World</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant="secondary" onClick={action('default button')}>Secondary</Button>
            </td>
            <td><code>{`<Button variant="secondary">Secondary</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <button onClick={action('native button')}>Native button</button>
            </td>
            <td><code>{`<button>Secondary</button>`}</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ButtonStories;
