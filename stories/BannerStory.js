import React from 'react';
import { Banner } from './../src/Banner';

const previewImage = 'http://www.pastamania.com.sg/wp-content/uploads/2016/02/new_content_image_careers-2.jpg'

const BannerStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Banner</h1>
      <p>Usage: <code>{`import { Banner } from 'glints-aries'`}</code></p>
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
                imgUrl={previewImage}
                theme="red"
              >apply</Banner>
            </td>
            <td><pre><code>{`<Banner imgUrl={'url'} theme="red">Apply</Banner>`}</code></pre></td>
          </tr>
          <tr>
            <td style={{minWidth: 360}}>
              <Banner
                imgUrl={previewImage}
                theme="blue"
              >apply</Banner>
            </td>
            <td><pre><code>{`<Banner imgUrl={'url'} theme="blue">Apply</Banner>`}</code></pre></td>
          </tr>
          <tr>
            <td style={{minWidth: 360}}>
              <Banner
                imgUrl={previewImage}
                theme="yellow"
              >apply</Banner>
            </td>
            <td><pre><code>{`<Banner imgUrl={'url'} theme="yellow">Apply</Banner>`}</code></pre></td>
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