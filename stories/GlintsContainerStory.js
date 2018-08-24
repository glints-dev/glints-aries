import React from 'react';

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
        Glints Aries is using
        {' '}
        {'<GlintsContainer />'}
        {' '}
        to wrap up the Global Style.
      </p>
      <p>
        We prevent clash between Glints Aries and your existing style with
        {' '}
        {'<GlintsContainer />'}
        .
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
            <th>
              Breakpoint
            </th>
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
            <th>
              Container width
            </th>
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
        You just need to wrap
        {' '}
        {'<GlintsContainer />'}
        {' '}
        on your Root Component or on Glints Aries component.
      </p>
      <pre style={{ display: 'inline-flex' }}>
        {`<GlintsContainer>
  <Component />
</GlintsContainer>`}
      </pre>
    </div>

    <table className="doc-table" style={{ marginTop: '2em' }}>
      <thead>
        <tr>
          <th>
            Note
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {'To achieve this size always wraps your component with <GlintsContainer />'}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default GlintsContainerStory;
