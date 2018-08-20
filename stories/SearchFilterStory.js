import React from 'react';
import SearchFilter from '../src/SearchFilter';

import Icon from '../src/Icon';
import Button from '../src/Button';


const SearchFilterStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Omni Search
      </h1>
      <p>
        <code>
          {'import { SearchFilter } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '6em' }}>
      <SearchFilter
        label="Search for job title, location, or company"
        content={(
          <Button theme="blue">
            <Icon name="search" color="white" size="20" />
          </Button>
        )}
      >
        <SearchFilter.Body>
          <SearchFilter.Item>
            <label>
              Karir Populer
            </label>
            <ul>
              <li>
              Business Development/ Sales
              </li>
            </ul>
          </SearchFilter.Item>
          <SearchFilter.Item>
            <label>
              Lokasi Populer
            </label>
            <ul>
              <li>
                <Icon name="location" color="#AAAAAA" size="14" />
                {' '}
                  Lowongan Pekerjaan di Jakarta
              </li>
            </ul>
          </SearchFilter.Item>
          <SearchFilter.Item>
            <label>
                Perusahaan Populer
            </label>
            <ul>
              <li>
                <img src="https://cdn-images-1.medium.com/max/1600/1*5fCAiEdtIXD53sM90gn5JA.jpeg" width="40" height="40" alt="gojek" />
                {' '}
                  Gojek
              </li>
            </ul>
          </SearchFilter.Item>
        </SearchFilter.Body>
      </SearchFilter>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <pre>
              {'<SearchFilter />'}
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
            Any Event Handlers
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
          <td>
            {'You can pass any event handlers into <OmniSearch/>, <OmniSearch.Body>, <OmniSearch.Item>'}
          </td>
        </tr>
        <tr>
          <td>
            content
          </td>
          <td>
            Element
          </td>
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
      </tbody>
    </table>
  </div>
);

export default SearchFilterStory;
