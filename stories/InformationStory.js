import React from 'react';
import Information from '../src/Information';
import { Divider } from '../src/General/Divider';

const InformationStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Information
      </h1>
      <p>
        <code>
          {'import { Information, Divider } from \'glints-aries\''}
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
            <Information backGroundImageURL="https://cdn.zeplin.io/5a99106ac26df76756166bac/assets/C185132C-39F4-47F8-ADC4-4DED4A198209.png">
              <Information.Title bold>
                Business Development
              </Information.Title>
              <Information.Description>
                Business development entails tasks and processes to develop and implement growth opportunities within and between organizations.
              </Information.Description>
              <Divider theme="yellow" size="small" />
              <Information.Detail>
                <ul>
                  <li>
                    <span>
                      15
                    </span>
                    {' '}
                    occupations
                  </li>
                  <li>
                    <span>
                      20
                    </span>
                    {' '}
                    opportunities
                  </li>
                </ul>
              </Information.Detail>
            </Information>
          </td>
          <td>
            <pre>
              {`<Information 
  backGroundImageURL={...} 
  hoverTextColor={"white"} 
  onClick={...}>
  <Information.Title bold onClick={...}>...</Information.Title>
  <Information.Description>...</Information.Description>
  <Divider theme="yellow" size="small" />
  <Information.Detail>
    <ul>
      <li><span>...</span> ...</li>
      <li><span>...</span> ...</li>
    </ul>
  </Information.Detail>
</Information>`}
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
          <th>
            Default Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            bold
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Emphasizes the
            {' '}
            <b>
              Title
            </b>
            {' '}
            text.
          </td>
          <td>
            None
          </td>
        </tr>
        <tr>
          <td>
            theme
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              red | blue | yellow
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Sets color for the
            {' '}
            <b>
              Divider
            </b>
            .
          </td>
          <td>
            None
          </td>
        </tr>
        <tr>
          <td>
            size
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              {'large | medium | small'}
            </pre>
          </td>
          <td>
            yes
          </td>
          <td>
            Sets
            {' '}
            <b>
              {'Divider\'s '}
            </b>
            width.
          </td>
          <td>
            None
          </td>
        </tr>
        <tr>
          <td>
            backGroundImageURL
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              {'URL'}
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Sets
            {' '}
            <b>
              background-image
            </b>
            {' '}
            when hovered
          </td>
          <td>
            None
          </td>
        </tr>
        <tr>
          <td>
            hoverTextColor
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              {'hex-value | rba-value | string-value'}
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Sets
            {' '}
            <b>
              text-color
            </b>
            {' '}
            when hovered
          </td>
          <td>
            White
          </td>
        </tr>
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
  </div>
);

export default InformationStory;
