import React from 'react';
import { Search, SearchItems} from './../src/Search';

import { Dropdown, DropdownItems } from '../src/Dropdown';
import Label from '../src/Label';
import Button from '../src/Button';
import { Icons } from '../src/Icon';

const SearchStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Search</h1>
      <p><code>{`import { Search, SearchItems } from 'glints-aries'`}</code></p>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Search>
                <SearchItems>
                    <Dropdown title="This Career" size="medium">
                        <DropdownItems>Accounting</DropdownItems>
                        <DropdownItems>Art & Design</DropdownItems>
                        <DropdownItems>Business Development</DropdownItems>
                        <DropdownItems>Consulting</DropdownItems>
                        <DropdownItems>Engineering</DropdownItems>
                        <DropdownItems>Entrepreneurship</DropdownItems>
                        <DropdownItems>Finance</DropdownItems>
                        <DropdownItems>General Affair</DropdownItems>
                        <DropdownItems>Human Resources</DropdownItems>
                    </Dropdown>
                </SearchItems>

                <SearchItems>
                    <Label theme="grey">in</Label>
                </SearchItems>

                <SearchItems>
                    <Dropdown title="This Location" size="medium">
                        <DropdownItems>Bangkok</DropdownItems>
                        <DropdownItems>Ho Chi Minh City</DropdownItems>
                        <DropdownItems>Jakarta</DropdownItems>
                        <DropdownItems>Kuala Lumpur</DropdownItems>
                        <DropdownItems>Singapore</DropdownItems>
                    </Dropdown>
                </SearchItems>

                <SearchItems>
                  <Button>Go <Icons name='chevron-next' size='small' /></Button>
                </SearchItems>
              </Search>
            </td>
            <td><pre>{`<Search>
  <SearchItems>
    Put your first component here...
  </SearchItems>
  <SearchItems>
    Put your second component here...
  </SearchItems>
<Search>`}</pre></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default SearchStory;
