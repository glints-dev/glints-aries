import React from 'react';
import Banner from './../src/Banner';

const BannerStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Banner</h1>
        <p><code>{`import Banner from 'glints-aries'`}</code></p>
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
            <td style={{minWidth: 360}}>
              <Banner
                imgUrl={"https://images.unsplash.com/photo-1526289375762-27075d038ebd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8614e111728c1c5a0bb118f0dd5b4e56&auto=format&fit=crop&w=750&q=80"}
                theme="red"
                label="apply" />
            </td>
            <td><pre><code>{`<Banner imgUrl={'url'} theme="red" label="apply" />`}</code></pre></td>
          </tr>
          <tr>
            <td style={{minWidth: 360}}>
              <Banner
                imgUrl={"https://images.unsplash.com/photo-1525250265090-2739a154ffc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6760d7b9b023b130de716045e4ee4c24&auto=format&fit=crop&w=751&q=80"}
                theme="blue"
                label="apply" />
            </td>
            <td><pre><code>{`<Banner imgUrl={'url'} theme="blue" label="apply" />`}</code></pre></td>
          </tr>
          <tr>
            <td style={{minWidth: 360}}>
              <Banner
                imgUrl={"https://images.unsplash.com/photo-1502758775495-0ec4a639aa64?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f70633f463eb1587bbdd2d338c12fd15&auto=format&fit=crop&w=808&q=80"}
                theme="yellow"
                label="apply" />
            </td>
            <td><pre><code>{`<Banner imgUrl={'url'} theme="yellow" label="apply" />`}</code></pre></td>
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
            <td>imgUrl</td>
            <td>string</td>
            <td>url</td>
            <td>yes</td>
            <td>Sets the display image.</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>{`red | blue | yellow`}</pre></td>
            <td>no</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BannerStory;