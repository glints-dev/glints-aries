import React from 'react';
import {Information, Title, Description, Detail} from './../src/Information';
import { Divider } from './../src/Divider';
import { Size } from '../src/Utils/StyleConfig';

const HeadingStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Information</h1>
      <p>Usage: <code>{`import {Title, Information, Description, Detail, Divider} from 'glints-aries'`}</code></p>

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
              <Information>
                <Title bold>Business Development</Title>
                <Description>Business development entails tasks and processes to develop and implement growth opportunities within and between organizations.</Description>
                <Divider theme="yellow" size="small" />
                <Detail>
                  <ul>
                    <li><span>15</span> occupations</li>
                    <li><span>20</span> opportunities</li>
                  </ul>
                </Detail>
              </Information>
            </td>
            <td><pre>{`<Information>
  <Title bold>Business Development</Title>
  <Description>Type your text here...</Description>
  <Divider theme="yellow" size="small" />
  <Detail>
    <ul>
      <li><span>15</span> occupations</li>
      <li><span>20</span> opportunities</li>
    </ul>
  </Detail>
</Information>`}</pre></td>
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
            <td>bold</td>
            <td>boolean</td>
            <td><pre>{`true | false`}</pre></td>
            <td>no</td>
            <td>Emphasizes the <b>Title</b> text.</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>{`red | blue | yellow`}</pre></td>
            <td>no</td>
            <td>Sets color for the <b>Divider</b>.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td><pre>{`large | medium | small`}</pre></td>
            <td>yes</td>
            <td>Sets <b>Divider</b>'s width.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HeadingStory;
