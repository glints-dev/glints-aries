import React from 'react';
import {Information, Title, Description, Detail} from './../src/Information';
import { Divider } from './../src/Divider';
import { Size } from '../src/Utils/StyleConfig';

const InformationStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Information</h1>
        <p><code>{`import {Title, Information, Description, Detail, Divider} from 'glints-aries'`}</code></p>
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
            <td style={{padding: 20}}>
              <Information backGroundImageURL={'https://cdn.zeplin.io/5a99106ac26df76756166bac/assets/C185132C-39F4-47F8-ADC4-4DED4A198209.png'}>
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
            <td><pre>{`<Information
    backGroundImageURL={...}
    hoverTextColor={"white"}>
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
            <th>Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bold</td>
            <td>boolean</td>
            <td><pre>{`true | false`}</pre></td>
            <td>no</td>
            <td>Emphasizes the <b>Title</b> text.</td>
            <td>None</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>string</td>
            <td><pre>{`red | blue | yellow`}</pre></td>
            <td>no</td>
            <td>Sets color for the <b>Divider</b>.</td>
            <td>None</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td><pre>{`large | medium | small`}</pre></td>
            <td>yes</td>
            <td>Sets <b>Divider</b>'s width.</td>
            <td>None</td>
          </tr>
          <tr>
            <td>backGroundImageURL</td>
            <td>string</td>
            <td><pre>{'URL'}</pre></td>
            <td>no</td>
            <td>Sets <b>background-image</b> when hovered</td>
            <td>None</td>
          </tr>
          <tr>
            <td>hoverTextColor</td>
            <td>string</td>
            <td><pre>{'hex-value | rba-value | string-value'}</pre></td>
            <td>no</td>
            <td>Sets <b>text-color</b> when hovered</td>
            <td>White</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InformationStory;
