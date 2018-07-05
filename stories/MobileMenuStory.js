import React from 'react';
import {MobileMenu, TopItems, HeaderItems, MenuItemsWrapper, MenuItems, FooterItems} from './../src/MobileMenu';

import { Icons } from '../src/Icon';
import ProfilePicture from '../src/ProfilePicture';
import Label from '../src/Label';
import Divider from '../src/Divider';
import Button from '../src/Button';

const ProfilePictureStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Mobile Menu</h1>
      <p><code>{`import { MobileMenu, TopItems, HeaderItems, MenuItemsWrapper, MenuItems, FooterItems } from 'glints-aries'`}</code></p>

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
              <MobileMenu>
                <TopItems>
                  <Icons name="close-white" />
                </TopItems>
                <HeaderItems>
                  <ProfilePicture editable assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                  <Label size="medium" theme="white">
                      <span>Hello,</span>
                      <p>Fredy Yanto</p>
                  </Label>
                </HeaderItems>
                <Divider size="large" theme="white" thickness="thin" />
                <MenuItemsWrapper>
                  <MenuItems>Carrers</MenuItems>
                  <MenuItems>Jobs</MenuItems>
                  <MenuItems>Internships</MenuItems>
                  <MenuItems>Companies</MenuItems>
                  <MenuItems>Pathways</MenuItems>
                  <MenuItems>Blog</MenuItems>
                  <MenuItems>Employers</MenuItems>
                </MenuItemsWrapper>
                <FooterItems>
                  <Button variant="ghost" theme="white">Sign Out</Button>
                  <Button variant="primary">Sign Up</Button>
                </FooterItems>
              </MobileMenu>
            </td>
            <td><pre>{`<MobileMenu>
  <TopItems>
    <Icons name="close-white" />
  </TopItems>
  <HeaderItems>
    <ProfilePicture editable assetUrl="..." />
    <Label size="medium" theme="white">
        <span>Hello,</span>
        <p>Fredy Yanto</p>
    </Label>
  </HeaderItems>
  <Divider size="large" theme="white" thickness="thin" />
  <MenuItemsWrapper>
    <MenuItems>Carrers</MenuItems>
    <MenuItems>Jobs</MenuItems>
    <MenuItems>Internships</MenuItems>
    <MenuItems>Companies</MenuItems>
    <MenuItems>Pathways</MenuItems>
    <MenuItems>Blog</MenuItems>
    <MenuItems>Employers</MenuItems>
  </MenuItemsWrapper>
  <FooterItems>
    <Button variant="ghost" theme="white">Sign Out</Button>
    <Button variant="primary">Sign Up</Button>
  </FooterItems>
</MobileMenu>`}</pre></td>
          </tr>
        </tbody>
      </table>

      <h1>Notes</h1>
      <p>You just need to <code>import</code> the rest of the components from <code>glints-aries</code> and follow the props guideline on each components or just use your own styling.</p>
    </div>
  );
}

export default ProfilePictureStory;
