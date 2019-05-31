import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import SearchFilter from '../../src/Input/SearchFilter';
import Icon from '../../src/General/Icon';
import Button from '../../src/General/Button';

const props = {
  SearchFilter: [
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
      description: 'Content to display element inside Input Field.',
    },
  ],
  'SearchFilter.List': [
    {
      name: 'title',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets title inside List Box.',
    },
  ],
  'SearchFilter.Item': [
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

const SearchFilterStory = () => (
  <StorybookComponent
    title="Search Filter"
    code="import { SearchFilter } from 'glints-aries'"
    propsObject={props}
    usage={`<SearchFilter
  label="Search for job title, location, or company"
  value="Gojek"
  content={(
    <Button theme="blue">
      <Icon name="search" color="white" />
    </Button>
  )}
>
  <SearchFilter.Body>
    <SearchFilter.List title="Karir Populer">
      <SearchFilter.Item onClick={this.handleClick}>
        Business Development/ Sales
      </SearchFilter.Item>
    </SearchFilter.List>
    <SearchFilter.List title="Lokasi Populer">
      <SearchFilter.Item>
        <Icon name="location" color="#AAAAAA" />
        Lowongan Pekerjaan di Jakarta
      </SearchFilter.Item>
    </SearchFilter.List>
    <SearchFilter.List title="Perusahaan Populer">
      <SearchFilter.Item>
        <img src="..." width="40" height="40" alt="gojek" />
        Gojek
      </SearchFilter.Item>
    </SearchFilter.List>
  </SearchFilter.Body>
</SearchFilter>`}
  >
    <SearchFilter
      label="Search for job title, location, or company"
      content={(
        <SearchFilter.Button theme="blue">
          <Icon name="search" color="white" />
        </SearchFilter.Button>
      )}
    >
      <SearchFilter.Body>
        <SearchFilter.List title="Karir Populer">
          <SearchFilter.Item>
            Business Development/ Sales
          </SearchFilter.Item>
        </SearchFilter.List>
        <SearchFilter.List title="Lokasi Populer">
          <SearchFilter.Item>
            <Icon name="location" color="#AAAAAA" />
            {' '}
            Lowongan Pekerjaan di Jakarta
          </SearchFilter.Item>
        </SearchFilter.List>
        <SearchFilter.List title="Perusahaan Populer">
          <SearchFilter.Item>
            <img src="https://cdn-images-1.medium.com/max/1600/1*5fCAiEdtIXD53sM90gn5JA.jpeg" width="40" height="40" alt="gojek" />
            {' '}
            Gojek
          </SearchFilter.Item>
        </SearchFilter.List>
      </SearchFilter.Body>
    </SearchFilter>
  </StorybookComponent>
);

export default SearchFilterStory;
