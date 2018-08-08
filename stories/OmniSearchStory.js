import React from 'react';
import OmniSearch from '../src/OmniSearch';

import Icon from '../src/Icon';
import Button from '../src/Button';

const OmniSearchStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Omni Search
      </h1>
      <p>
        <code>
          {'import { OmniSearch } from \'glints-aries\''}
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
            <OmniSearch
              label="Find Internships, Locations, and Companies"
              content={(
                <Button theme="blue">
                  Go!
                  {' '}
                  <Icon name="arrow-round-forward" color="white" size="16" />
                </Button>
              )}
            >
              <OmniSearch.Body>
                <OmniSearch.Item>
                  <label>
                    Karir Populer
                  </label>
                  <ul>
                    <li>
                      Business Development/ Sales
                    </li>
                    <li>
                      Software Engineering
                    </li>
                    <li>
                      Design
                    </li>
                  </ul>
                </OmniSearch.Item>
                <OmniSearch.Item>
                  <label>
                    Lokasi Populer
                  </label>
                  <ul>
                    <li>
                      <Icon name="location" color="#AAAAAA" size="14" />
                      {' '}
                      Lowongan Pekerjaan di Jakarta
                    </li>
                    <li>
                      <Icon name="location" color="#AAAAAA" size="14" />
                      {' '}
                      Lowongan Pekerjaan di Bogor
                    </li>
                    <li>
                      <Icon name="location" color="#AAAAAA" size="14" />
                      {' '}
                      Lowongan Pekerjaan di Bandung
                    </li>
                  </ul>
                </OmniSearch.Item>
                <OmniSearch.Item>
                  <label>
                    Perusahaan Populer
                  </label>
                  <ul>
                    <li>
                      <img src="https://cdn-images-1.medium.com/max/1600/1*5fCAiEdtIXD53sM90gn5JA.jpeg" width="40" height="40" alt="gojek" />
                      {' '}
                      Gojek
                    </li>
                    <li>
                      <img src="http://sp.beritasatu.com/media/images/original/20140925164546835.jpg" width="40" height="40" alt="traveloka" />
                      {' '}
                      Traveloka
                    </li>
                    <li>
                      <img src="https://ecs7.tokopedia.net/img/microsite-brand-resource/logo-tokopedia-asset.png" width="40" height="40" alt="traveloka" />
                      {' '}
                      Tokopedia
                    </li>
                  </ul>
                </OmniSearch.Item>
              </OmniSearch.Body>
            </OmniSearch>
          </td>
          <td>
            <pre>
              {`<OmniSearch
  label="Find Internships, Locations, and Companies"
  content={(
    <Button theme="blue">
      Go! 
      <Icon 
        name="arrow-round-forward" 
        color="white" 
        size="16"
      />
    </Button>
)}>
  <OmniSearch.Body>
    <OmniSearch.Item>
      <label>Karir Populer</label>
      <ul>
        <li>Business Development/ Sales</li>
      </ul>
    </OmniSearch.Item>
    <OmniSearch.Item>
      <label>Lokasi Populer</label>
      <ul>
        <li>
          <Icon 
            name="location" 
            color="#AAAAAA" 
            size="14"
          />
          Lowongan Pekerjaan di Jakarta
        </li>
      </ul>
    </OmniSearch.Item>
    <OmniSearch.Item>
      <label>Perusahaan Populer</label>
      <ul>
        <li>
          <img 
            src="..." 
            width="40" 
            height="40" 
            alt="gojek" 
          />
          Gojek
        </li>
      </ul>
    </OmniSearch.Item>
  </OmniSearch.Body>
</OmniSearch>`}
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

export default OmniSearchStory;
