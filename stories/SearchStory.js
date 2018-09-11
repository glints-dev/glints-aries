import React from 'react';
import Search from '../src/Search';

import Dropdown from '../src/Dropdown';
import Label from '../src/Label';
import Button from '../src/Button';
import { Icon } from '../src/Icon';

const SearchStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Search
      </h1>
      <p>
        <code>
          {'import { Search } from \'glints-aries\''}
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
            <Search>
              <Search.Item>
                <Dropdown title="This Career" size="medium">
                  <Dropdown.Body>
                    <Dropdown.Item>
                      Accounting
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Art & Design
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Business Development
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Consulting
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Engineering
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Entrepreneurship
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Finance
                    </Dropdown.Item>
                    <Dropdown.Item>
                      General Affair
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Human Resources
                    </Dropdown.Item>
                  </Dropdown.Body>
                </Dropdown>
              </Search.Item>

              <Search.Item>
                <Label theme="grey">
                  in
                </Label>
              </Search.Item>

              <Search.Item>
                <Dropdown title="This Location" size="medium">
                  <Dropdown.Body>
                    <Dropdown.Item>
                      Bangkok
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Ho Chi Minh City
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Jakarta
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Kuala Lumpur
                    </Dropdown.Item>
                    <Dropdown.Item>
                      Singapore
                    </Dropdown.Item>
                  </Dropdown.Body>
                </Dropdown>
              </Search.Item>

              <Search.Item>
                <Button>
                  Go
                  {' '}
                  <Icon name="arrow-next" size="10" />
                </Button>
              </Search.Item>
            </Search>
          </td>
          <td>
            <pre>
              {`<Search>
  <Search.Item>
    Put your first component here...
  </Search.Item>
  <Search.Item>
    Put your second component here...
  </Search.Item>
<Search>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default SearchStory;
