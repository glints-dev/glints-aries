import React from 'react';
import Stats from './../src/Stats';

const StatsStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Statistic</h1>
      <p>Usage: <code>{`import { Stats } from 'glints-aries'`}</code></p>

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
            <Stats
              caption="we have help"
              number={"300.000"}
              description="Young Professionals To Discover Their Dream Careers"
              suffix="+"
            />
            </td>
            <td><pre>{`<Stats
  caption="we have help"
  number='300.000'
  description="Young Professionals To Discover Their Dream Careers"
  suffix="+"
/>`}</pre></td>
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
            <td>caption</td>
            <td>string</td>
            <td>any</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>number</td>
            <td>string</td>
            <td>any</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>description</td>
            <td>string</td>
            <td>any</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>string</td>
            <td>any</td>
            <td>no</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatsStory;
