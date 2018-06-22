import React from 'react';
import Item from './../src/Item';

const ItemStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Item</h1>
      <p>Usage: <code>{`import { Item } from glints-aries`}</code></p>
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Preview
            </th>
            <th>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div style={{margin: '0 34px'}}>
                <Item
                  title="Item title"
                  subtitle="Item subtitle"
                  url="https://glints.id"
                  imgUrl="https://placeimg.com/64/64/any"
                  isExternal={false}
                  isReactRouter={true}
                />
              </div>
            </td>
            <td>
              <pre>{`<Item
  title="Item title"
  subtitle="Item subtitle"
  url="https://glints.id"
  imgUrl="https://placeimg.com/64/64/any"
  isExternal={false}
  isReactRouter={true}
/>`}</pre>
            </td>
          </tr>
        </tbody>
      </table>
      
      <h1>Available props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>type</th>
            <th>possible value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>any</td>
          </tr>
          <tr>
            <td>subtitle</td>
            <td>string</td>
            <td>any</td>
          </tr>
          <tr>
            <td>url</td>
            <td>string</td>
            <td><code>any website url</code> or <code>react-router path</code></td>
          </tr>
          <tr>
            <td>isExternal</td>
            <td>boolean</td>
            <td><code>true | false</code></td>
          </tr>
          <tr>
            <td>isReactRouter</td>
            <td>boolean</td>
            <td><code>true | false</code></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default ItemStory;