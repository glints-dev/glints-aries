import React from 'react';
import Brand from './../src/Brand';

const BrandStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Brand</h1>
        <p><code>{`import Brand from 'glints-aries'`}</code></p>
      </div>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Brand asset="glints-black" />
            </td>
            <td><code>{`<Brand asset="glints-black" />`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Brand 
                asset="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/2000px-Logo_of_Unsplash.svg.png" 
                size="medium" />
            </td>
            <td><code>{`<Brand asset={'asset url / path'} size="medium" />`}</code></td>
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
            <td>asset</td>
            <td>string</td>
            <td><pre>{`glints-black | glints-white | url / path`}</pre></td>
            <td>yes</td>
            <td>There are 3 available values for <b>asset</b> props. The first and second one are Glints logo, but you can also custom the logo by parsing url or path of the logo.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td><pre>{`large | medium | small`}</pre></td>
            <td>no</td>
            <td>Sets the size of <b>Brand</b> logo.</td>
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

export default BrandStory;
