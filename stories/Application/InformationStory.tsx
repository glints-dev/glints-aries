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
    {
      name: 'theme',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>red | blue | yellow</code>,
      require: 'no',
      description: 'Sets color for the Divider.',
    },
    {
      name: 'size',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>large | medium | small</code>,
      require: 'yes',
      description: 'Sets Divider\'s width.',
    },
    {
      name: 'hoverTextColor',
      type: 'string',
      defaultValue: <code>white</code>,
      possibleValue: <code>hex-value | rba-value | string-value</code>,
      require: 'no',
      description: 'Sets text-color when hovered.',
    },
    {
      name: 'onClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: '',
    },
  ],
};

const InformationStory = () => (
  <StorybookComponent
    title="Information"
    code="import { Information, Divider } from 'glints-aries'"
    propsObject={props}
    usage={`<Information 
  backGroundImageURL={...} 
  hoverTextColor={"white"} 
  onClick={...}>
  <Information.Title bold onClick={...}>...</Information.Title>
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
      <Information.Title bold>
        Business Development
      </Information.Title>
      <Information.Description>
        Business development entails tasks and processes to develop and implement growth opportunities within and between organizations.
      </Information.Description>
      <Divider theme="yellow" />
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
  </StorybookComponent>
);

export default InformationStory;
