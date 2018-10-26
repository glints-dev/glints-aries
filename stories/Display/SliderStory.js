import React from 'react';

import Slider from '../../src/Display/Slider';
import Blockquote from '../../src/Display/Blockquote';
import ProfilePicture from '../../src/General/ProfilePicture';
import Collapsible from '../../src/Display/Collapsible';

const SliderStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Slider
      </h1>
      <p>
        <code>
          {'import { Slider } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Slider>
        <Slider.Item>
          <Blockquote>
            <Blockquote.Profile>
              <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
            </Blockquote.Profile>
            <Blockquote.Content>
              <Blockquote.Testimony>
                {'I didn\'t really know what I wanted to do and what were all the career paths out there!'}
              </Blockquote.Testimony>
              <Blockquote.Author>
                        Fredy Yanto
              </Blockquote.Author>
              <Blockquote.Origin>
                        National University of Singapore (NUS)
              </Blockquote.Origin>
            </Blockquote.Content>
          </Blockquote>
          <Blockquote>
            <Blockquote.Profile>
              <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
            </Blockquote.Profile>
            <Blockquote.Content>
              <Blockquote.Testimony>
                {'I didn\'t really know what I wanted to do and what were all the career paths out there!'}
              </Blockquote.Testimony>
              <Blockquote.Author>
                        Fredy Yanto
              </Blockquote.Author>
              <Blockquote.Origin>
                        National University of Singapore (NUS)
              </Blockquote.Origin>
            </Blockquote.Content>
          </Blockquote>
        </Slider.Item>
        <Slider.Item>
          <Blockquote>
            <Blockquote.Profile>
              <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
            </Blockquote.Profile>
            <Blockquote.Content>
              <Blockquote.Testimony>
                        The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already!
              </Blockquote.Testimony>
              <Blockquote.Author>
                        Jia Ann
              </Blockquote.Author>
              <Blockquote.Origin>
                        Nanyang Technological University  (NTU)
              </Blockquote.Origin>
            </Blockquote.Content>
          </Blockquote>
          <Blockquote>
            <Blockquote.Profile>
              <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
            </Blockquote.Profile>
            <Blockquote.Content>
              <Blockquote.Testimony>
                {'I didn\'t really know what I wanted to do and what were all the career paths out there!'}
              </Blockquote.Testimony>
              <Blockquote.Author>
                        Fredy Yanto
              </Blockquote.Author>
              <Blockquote.Origin>
                        National University of Singapore (NUS)
              </Blockquote.Origin>
            </Blockquote.Content>
          </Blockquote>
        </Slider.Item>
        <Slider.Item>
          <Blockquote>
            <Blockquote.Profile>
              <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
            </Blockquote.Profile>
            <Blockquote.Content>
              <Blockquote.Testimony>
                        Glints has been amazing in helping me out with my skills development through personalised recommendations!
              </Blockquote.Testimony>
              <Blockquote.Author>
                        Woon Yong Xin
              </Blockquote.Author>
              <Blockquote.Origin>
                        SIM University
              </Blockquote.Origin>
            </Blockquote.Content>
          </Blockquote>
        </Slider.Item>
      </Slider>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Slider>
  <Slider.Item>
    <Component />
    <Component />
  </Slider.Item>
  <Slider.Item>
    <Component />
  </Slider.Item>
</Slider>`}
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
            initialItem
          </td>
          <td>
            number
          </td>
          <td>1</td>
          <td>
            index of item
          </td>
          <td>
            no
          </td>
          <td>
            Sets initial item to show. Index starts from 1 until so on.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default SliderStory;
