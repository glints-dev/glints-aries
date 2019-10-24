import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Information from '../../src/Application/Information';
import Divider from '../../src/General/Divider';

const props = {
  Information: [
    {
      name: 'bold',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Emphasizes the Title text.',
    },
  ],
};

const InformationStory = () => (
  <StorybookComponent
    title="Information"
    code="import { Information, Divider } from 'glints-aries'"
    propsObject={props}
    usage={`<Information>
  <Information.Title bold>...</Information.Title>
  <Information.Description>...</Information.Description>
  <Divider theme="yellow" />
  <Information.Detail>
    <ul>
      <li><span>...</span> ...</li>
      <li><span>...</span> ...</li>
    </ul>
  </Information.Detail>
</Information>`}
  >
    <Information>
      <Information.Title bold>Business Development</Information.Title>
      <Information.Description>
        Business development entails tasks and processes to develop and
        implement growth opportunities within and between organizations.
      </Information.Description>
      <Divider theme="yellow" />
      <Information.Detail>
        <ul>
          <li>
            <span>15</span> occupations
          </li>
          <li>
            <span>20</span> opportunities
          </li>
        </ul>
      </Information.Detail>
    </Information>
  </StorybookComponent>
);

export default InformationStory;
