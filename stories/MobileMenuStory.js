import React from 'react';
import MobileMenu from '../src/MobileMenu';

import ProfilePictureShadow from '../src/ProfilePictureShadow';
import Label from '../src/Label';

const ProfilePictureStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Mobile Menu
      </h1>
      <p>
        <code>
          {'import { MobileMenu } from \'glints-aries\''}
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
            <MobileMenu>
              <MobileMenu.Top
                name="close"
                size="21"
                color="white"
              />
              <MobileMenu.Header
                margin
              >
                <ProfilePictureShadow editable assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                <Label size="medium" theme="white">
                  <span>
                    Hello,
                  </span>
                  <p>
                    Fredy Yanto
                  </p>
                </Label>
              </MobileMenu.Header>
              <MobileMenu.Body>
                <MobileMenu.Item>
                  Carrers
                </MobileMenu.Item>
                <MobileMenu.Item>
                  Jobs
                </MobileMenu.Item>
                <MobileMenu.Item>
                  Internships
                </MobileMenu.Item>
                <MobileMenu.Item>
                  Companies
                </MobileMenu.Item>
                <MobileMenu.Item>
                  Pathways
                </MobileMenu.Item>
                <MobileMenu.Item>
                  Blog
                </MobileMenu.Item>
                <MobileMenu.Item>
                  Employers
                </MobileMenu.Item>
              </MobileMenu.Body>
              <MobileMenu.Footer
                center
                hoverColor="#0171A4"
                defaultItem={
                  {
                    label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
                  }
                }
                languageItem={[
                  {
                    label: 'English', title: 'EN', value: 'english', countryIcon: 'gb',
                  },
                  {
                    label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
                  },
                ]}
              />
            </MobileMenu>
          </td>
          <td>
            <pre>
              {`<MobileMenu>
  <MobileMenu.Top
    name="close" 
    size="21" 
    color="white"
  />
  <MobileMenu.Header
    margin={true}
  >
    <ProfilePictureShadow editable assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
    <Label size="medium" theme="white">
      <span>Hello,</span>
      <p>Fredy Yanto</p>
    </Label>
  </MobileMenu.Header>
  <MobileMenu.Body>
    <MobileMenu.Item>Carrers</MobileMenu.Item>
    <MobileMenu.Item>Jobs</MobileMenu.Item>
    <MobileMenu.Item>Internships</MobileMenu.Item>
    <MobileMenu.Item>Companies</MobileMenu.Item>
    <MobileMenu.Item>Pathways</MobileMenu.Item>
    <MobileMenu.Item>Blog</MobileMenu.Item>
    <MobileMenu.Item>Employers</MobileMenu.Item>
  </MobileMenu.Body>
  <MobileMenu.Footer
      center
      hoverColor="#0171A4"
      defaultItem={
        {
          label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
        }
      }
      languageItem={[
        {
          label: 'English', title: 'EN', value: 'english', countryIcon: 'gb',
        },
        {
          label: 'Indonesian', title: 'ID', value: 'indonesian', countryIcon: 'id',
        },
      ]}
    />
</MobileMenu>`}
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
            onClick
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
          <td></td>
        </tr>
      </tbody>
    </table>

    <h1>
      Notes
    </h1>
    <p>
      You just need to
      {' '}
      <code>
        import
      </code>
      {' '}
      the rest of the components from
      {' '}
      <code>
        glints-aries
      </code>
      {' '}
      and follow the props guideline on each components or just use your own styling.
    </p>
  </div>
);

export default ProfilePictureStory;
