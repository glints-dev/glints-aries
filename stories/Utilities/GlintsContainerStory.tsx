import * as React from 'react';

const GlintsContainerStory = () => (
  <div className="doc-mainbar">
    <div>
      <h1>
        Glints Container
      </h1>
      <p>
        <code>
          {'import { GlintsContainer } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginTop: '1.5em' }}>
      <p>
        GlintsContainer is a special container built to serve whole Glints Aries components. So you need wrap your Root Component with GlintsContainer to achieve the best look of Glints Aries. It also contains the breakpoint to help your project looks good on every device.
      </p>
    </div>

    <div style={{ marginTop: '2em' }}>
      <h3>
        The Breakpoints
      </h3>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th></th>
          <th>
              Mobile Small
          </th>
          <th>
              Mobile Medium
          </th>
          <th>
              Mobile Large
          </th>
          <th>
              Tablet
          </th>
          <th>
              Desktop Small
          </th>
          <th>
              Desktop Medium
          </th>
          <th>
              Desktop Large
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Breakpoint</strong>
          </td>
          <td>
            {'< 320px  && ≥ 320px'}
          </td>
          <td>
            {'≥ 480px'}
          </td>
          <td>
            {'≥ 640px'}
          </td>
          <td>
            {'≥ 768px'}
          </td>
          <td>
            {'≥ 1024px'}
          </td>
          <td>
            {'≥ 1260px'}
          </td>
          <td>
            {'≥ 1440px'}
          </td>
        </tr>
        <tr>
          <td>
            <strong>Container width</strong>
          </td>
          <td>
            300px
          </td>
          <td>
            440px
          </td>
          <td>
            600px
          </td>
          <td>
            720px
          </td>
          <td>
            960px
          </td>
          <td>
            1200px
          </td>
          <td>
            1400px
          </td>
        </tr>
      </tbody>
    </table>

    <div style={{ marginTop: '2em' }}>
      <h3>
        How to use it?
      </h3>
      <p style={{ marginBottom: '.5em' }}>
        Just wrap your Root Component with
        {' '}
        {'<GlintsContainer />'}
      </p>
      <pre style={{ display: 'inline-flex' }}>
        {`<GlintsContainer>
  <App />
</GlintsContainer>`}
      </pre>
    </div>
  </div>
);

export default GlintsContainerStory;
