import React from 'react';

import SearchFilter from '../../src/Input/SearchFilter';
import Icon from '../../src/General/Icon';
import Button from '../../src/General/Button';
import Collapsible from '../../src/Display/Collapsible';

const SearchFilterStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Search Filter
      </h1>
      <p>
        <code>
          {'import { SearchFilter } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <SearchFilter
        label="Search for job title, location, or company"
        content={(
          <Button theme="blue">
            <Icon name="search" color="white" />
          </Button>
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
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<SearchFilter
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
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              Props
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
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
            label
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            {'Sets placeholder'}
          </td>
        </tr>
        <tr>
          <td>
            value
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            {'Sets input value'}
          </td>
        </tr>
        <tr>
          <td>
            content
          </td>
          <td>
            element
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Content to display element inside Input Field
          </td>
        </tr>
        <tr>
          <td>
            title
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            {'Sets title tag on <SearchFilter.Item />'}
          </td>
        </tr>
        <tr>
          <td>
            onClick
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            {'You can pass onClick function on <SearchFilter.Item />'}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SearchFilterStory;
