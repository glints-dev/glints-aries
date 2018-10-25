import React from 'react';

import Brand from '../../src/General/Brand';
import Collapsible from '../../src/Display/Collapsible';

const BrandStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Brand
      </h1>
      <p>
        <code>
          {'import { Brand } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Brand asset="glints-black" alt="Glints Logo" />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Brand
  asset={glints-black | glints-white | url / path}
  alt="..."
/>`}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              Props
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            asset
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            <pre>
              glints-black | glints-white | url / path
            </pre>
          </td>
          <td>
            yes
          </td>
          <td>
            There are 3 available values for
            {' '}
            <b>
              asset
            </b>
            {' '}
            props. The first and second one are Glints logo, but you can also custom the logo by parsing url or path of the logo.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default BrandStory;
