import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import OmniSearch from '../../src/Input/OmniSearch';
import Icon from '../../src/General/Icon';

const props = {
  OmniSearch: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets placeholder.',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets input value.',
    },
    {
      name: 'content',
      type: 'element',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Display element inside Input Field.',
    },
  ],
  'OmniSearch.List': [
    {
      name: 'title',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets title inside List Box.',
    },
  ],
  'OmniSearch.Item': [
    {
      name: 'onClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Called when List Item is clicked.',
    },
  ],
};

const OmniSearchStory = () => (
  <StorybookComponent
    title="OmniSearch"
    code="import { OmniSearch } from 'glints-aries'"
    propsObject={props}
    usage={`<OmniSearch
  label="Find Internships, Locations, and Companies"
  value="Traveloka"
  content={(
    <Button theme="blue">
      Go!
      <Icon name="arrow-round-forward" color="white" />
    </Button>
  )}
>
  <OmniSearch.Body>
    <OmniSearch.List title="Karir Populer">
      <OmniSearch.Item onClick={this.handleClick}>
        Business Development/ Sales
      </OmniSearch.Item>
    </OmniSearch.List>
    <OmniSearch.List title="Lokasi Populer">
      <OmniSearch.Item>
        <Icon name="location" color="#AAAAAA" />
        Lowongan Pekerjaan di Jakarta
      </OmniSearch.Item>
    </OmniSearch.List>
    <OmniSearch.List title="Perusahaan Populer">
      <OmniSearch.Item>
        <img src="..." width="40" height="40" alt="gojek" />
        Gojek
      </OmniSearch.Item>
    </OmniSearch.List>
  </OmniSearch.Body>
</OmniSearch>`}
  >
    <div style={{ marginBottom: '10em' }}>
      <OmniSearch
        label="Find Internships, Locations, and Companies"
        content={(
          <OmniSearch.Button theme="blue">
                    Go!
            {' '}
            <Icon name="arrow-round-forward" color="white" />
          </OmniSearch.Button>
        )}
      >
        <OmniSearch.Body>
          <OmniSearch.List title="Karir Populer">
            <OmniSearch.Item>
              Business Development/ Sales
            </OmniSearch.Item>
            <OmniSearch.Item>
              Software Engineering
            </OmniSearch.Item>
            <OmniSearch.Item>
              Design
            </OmniSearch.Item>
          </OmniSearch.List>
          <OmniSearch.List title="Lokasi Populer">
            <OmniSearch.Item>
              <Icon name="location" color="#AAAAAA" />
              {' '}
              Lowongan Pekerjaan di Jakarta
            </OmniSearch.Item>
            <OmniSearch.Item>
              <Icon name="location" color="#AAAAAA" />
              {' '}
              Lowongan Pekerjaan di Bogor
            </OmniSearch.Item>
            <OmniSearch.Item>
              <Icon name="location" color="#AAAAAA" />
              {' '}
              Lowongan Pekerjaan di Bandung
            </OmniSearch.Item>
          </OmniSearch.List>
          <OmniSearch.List title="Perusahaan Populer">
            <OmniSearch.Item>
              <img src="https://cdn-images-1.medium.com/max/1600/1*5fCAiEdtIXD53sM90gn5JA.jpeg" width="40" height="40" alt="gojek" />
              {' '}
              Gojek
            </OmniSearch.Item>
            <OmniSearch.Item>
              <img src="http://sp.beritasatu.com/media/images/original/20140925164546835.jpg" width="40" height="40" alt="traveloka" />
              {' '}
              Traveloka
            </OmniSearch.Item>
            <OmniSearch.Item>
              <img src="https://ecs7.tokopedia.net/img/microsite-brand-resource/logo-tokopedia-asset.png" width="40" height="40" alt="traveloka" />
              {' '}
              Tokopedia
            </OmniSearch.Item>
          </OmniSearch.List>
        </OmniSearch.Body>
      </OmniSearch>
    </div>
  </StorybookComponent>
);

export default OmniSearchStory;
