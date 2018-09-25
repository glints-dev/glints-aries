import React from 'react';
import Stats from '../src/Stats';

const StatsStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Statistic
      </h1>
      <p>
        <code>
          {'import { Stats } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
              Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <Stats>
              <label>
                we have help
              </label>
              <label>
                <b>
                  300.000 +
                </b>
              </label>
              <label>
                Young Professionals To Discover Their Dream Careers
              </label>
            </Stats>
          </td>
          <td>
            <pre>
              {`<Stats onClick={...}>
  <label>we have help</label>
  <label><b>300.000 +</b></label>
  <label>Young Professionals To Discover Their Dream Careers</label>
</Stats>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Props
    </h1>
    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Value
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
            onClick
          </td>
          <td>
            Function
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h1>
      Note
    </h1>
    <p>
      To use Label Component, please take a look at Label section.
    </p>

  </div>
);

export default StatsStory;
