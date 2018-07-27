import React from 'react';

const DeviceStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Devices Size</h1>
        <p><code>{`import { Device } from 'glints-aries'`}</code></p>
      </div>
      
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Device
            </th>
            <th>
              Size
            </th>
            <th>
              Usage
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                Desktop
            </td>
            <td>
                2560px
            </td>
            <td>
              <code>
                {'@media ${Device.desktop} {...}'}
              </code>
            </td>
          </tr>
          <tr>
            <td>
                Laptop Large
            </td>
            <td>
                1440px
            </td>
            <td>
              <code>
                {'@media ${Device.laptopL} {...}'}
              </code>
            </td>
          </tr>
          <tr>
            <td>
                Laptop
            </td>
            <td>
                1024px
            </td>
            <td>
              <code>
                {'@media ${Device.laptop} {...}'}
              </code>
            </td>
          </tr>
          <tr>
            <td>
                Tablet
            </td>
            <td>
                768px
            </td>
            <td>
              <code>
                {'@media ${Device.tablet} {...}'}
              </code>
            </td>
          </tr>
          <tr>
            <td>
                Mobile Large
            </td>
            <td>
                425px
            </td>
            <td>
              <code>
                {'@media ${Device.mobileL} {...}'}
              </code>
            </td>
          </tr>
          <tr>
            <td>
                Mobile Medium
            </td>
            <td>
                375px
            </td>
            <td>
              <code>
                {'@media ${Device.mobileM} {...}'}
              </code>
            </td>
          </tr>
          <tr>
            <td>
                Mobile Small
            </td>
            <td>
                320px
            </td>
            <td>
              <code>
                {'@media ${Device.mobileS} {...}'}
              </code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeviceStory;