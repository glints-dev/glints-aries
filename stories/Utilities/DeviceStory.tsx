import * as React from 'react';

const DeviceStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Device Size
      </h1>
      <p>
        <code>
          {'import { Device } from \'glints-aries\''}
        </code>
      </p>
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
            Desktop Large
          </td>
          <td>
            1440px
          </td>
          <td>
            <code>
              {'@media'}
              {' '}
              &#x00024;
              {'{Device.desktopL} {...}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Desktop Medium
          </td>
          <td>
            1260px
          </td>
          <td>
            <code>
              {'@media'}
              {' '}
              &#x00024;
              {'{Device.desktopM} {...}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Desktop Small
          </td>
          <td>
            1024px
          </td>
          <td>
            <code>
              {'@media'}
              {' '}
              &#x00024;
              {'{Device.desktopS} {...}'}
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
              {'@media'}
              {' '}
              &#x00024;
              {'{Device.tablet} {...}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Mobile Large
          </td>
          <td>
            640px
          </td>
          <td>
            <code>
              {'@media'}
              {' '}
              &#x00024;
              {'{Device.mobileL} {...}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Mobile Medium
          </td>
          <td>
            480px
          </td>
          <td>
            <code>
              {'@media'}
              {' '}
              &#x00024;
              {'{Device.mobileM} {...}'}
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
              {'@media'}
              {' '}
              &#x00024;
              {'{Device.mobileS} {...}'}
            </code>
          </td>
        </tr>
      </tbody>
    </table>

    <div style={{ marginBottom: '2em' }}>
      <h3>
        Screen Size
      </h3>
      <p>
        <code>
          {'import { ScreenSize } from \'glints-aries\''}
        </code>
      </p>
    </div>
    <p>
      {'We provide the screen size above if you need to use that exact number outside styling like conditional rendering based on that size.'}
    </p>
    <p>
      <b>Note: </b>
      {'ScreenSize doesn\'t contain'}
      {' '}
      <b>px</b>
      {' '}
      {'so it\'s purely just number.'}
    </p>

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
            Desktop Large
          </td>
          <td>
            1440
          </td>
          <td>
            <code>
              {'${ScreenSize.desktopL}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Desktop Medium
          </td>
          <td>
            1260
          </td>
          <td>
            <code>
              {'${ScreenSize.desktopM}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Desktop Small
          </td>
          <td>
            1024
          </td>
          <td>
            <code>
              {'${ScreenSize.desktopS}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Tablet
          </td>
          <td>
            768
          </td>
          <td>
            <code>
              {'${ScreenSize.tablet}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Mobile Large
          </td>
          <td>
            640
          </td>
          <td>
            <code>
              {'${ScreenSize.mobileL}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Mobile Medium
          </td>
          <td>
            480
          </td>
          <td>
            <code>
              {'${ScreenSize.mobileM}'}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            Mobile Small
          </td>
          <td>
            320
          </td>
          <td>
            <code>
              {'${ScreenSize.mobileS}'}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DeviceStory;
