import React from 'react';
import Button from './../src/Button';
import { action } from '@storybook/addon-actions';
import { Variant } from './../src/Utils/StyleConfig';

const ButtonStories = () => {
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
            <th>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Button onClick={action('default button')}>No Props</Button>
            </td>
            <td><code>{`<Button>No Props</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.DEFAULT} theme="red" onClick={action('variant default')}>{Variant.DEFAULT}</Button>
            </td>
            <td><code>{`<Button variant="default" theme="red">Hello World</Button>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Button variant={Variant.GHOST} theme="red" onClick={action('default button')}>{Variant.GHOST}</Button>
            </td>
            <td><code>{`<Button variant=${Variant.GHOST} theme="red">${Variant.GHOST}</Button>`}</code></td>
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
