import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Brand from '../../src/General/Brand';

const props = {
  Brand: [
    {
      name: 'asset',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>glints-black | glints-white | url / path</code>,
      require: 'yes',
      description: 'There are 3 available values for asset props. The first and second one are Glints logo, but you can also custom the logo by parsing url or path of the logo.',
    },
    {
      name: 'rightClickURL',
      type: 'string',
      defaultValue: '',
      possibleValue: '',
      require: 'no',
      description: 'Redirect to url when right click is triggered.',
    },
  ],
};

const BrandStory = () => (
  <StorybookComponent
    title="Brand"
    code="import { Brand } from 'glints-aries'"
    propsObject={props}
    usage={`<Brand
  asset={glints-black | glints-white | url / path}
  alt="..."
/>`}
  >
    <Brand
      asset="glints-black"
      alt="Glints Logo"
      rightClickURL="http://glints-aries.surge.sh"
    />
  </StorybookComponent>
);

export default BrandStory;
