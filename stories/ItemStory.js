import React from 'react';
import Item from './../src/Item';

const ItemStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Item</h1>
        <p><code>{`import { Item } from 'glints-aries'`}</code></p>
      </div>
      
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Item
                title="Item title"
                subtitle="Item subtitle"
                url="https://glints.id"
                imgUrl="https://placeimg.com/64/64/any"
                isExternal={false}
                isReactRouter={true}
              />
            </td>
            <td>
              <pre>{`<Item
  title="Item title"
  subtitle="Item subtitle"
  url="https://glints.id"
  imgUrl="https://placeimg.com/64/64/any"
  isExternal={false}
  isReactRouter={true}
  onClick={...}
/>`}</pre>
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
            <td>title</td>
            <td>string</td>
            <td>any</td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>subtitle</td>
            <td>string</td>
            <td>any</td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>url</td>
            <td>string</td>
            <td>url</td>
            <td>yes</td>
            <td>Sets location when title's clicked.</td>
          </tr>
          <tr>
            <td>imgUrl</td>
            <td>string</td>
            <td>url</td>
            <td>yes</td>
            <td>Display an image.</td>
          </tr>
          <tr>
            <td>isExternal</td>
            <td>boolean</td>
            <td><pre>{`true | false`}</pre></td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>isReactRouter</td>
            <td>boolean</td>
            <td><pre>{`true | false`}</pre></td>
            <td>yes</td>
            <td></td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>Function</td>
            <td>any</td>
            <td>no</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ItemStory;