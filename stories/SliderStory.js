import React from 'react';
import Slider from '../src/Slider';

import Blockquote from '../src/Blockquote';
import ProfilePictureShadow from '../src/ProfilePictureShadow';

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
            <Slider>
              <Slider.Item>
                <Blockquote>
                  <Blockquote.Profile>
                    <ProfilePictureShadow size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
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
                    <ProfilePictureShadow size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
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
                    <ProfilePictureShadow size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
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
                    <ProfilePictureShadow size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
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
                    <ProfilePictureShadow size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
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
          </td>
          <td>
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
          </td>
        </tr>
      </tbody>
    </table>
    <h1>
      Note
    </h1>
    <p>
      {'You must always wrap your component inside <SliderItem>. If you wanna show one or two components in each slider, You could wrap it inside <SliderItem>.'}
    </p>
  </div>
);
export default SliderStory;
