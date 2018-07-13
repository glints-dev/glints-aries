import React from 'react';
import { Slider, SliderItem } from './../src/Slider';

import { Blockquote, BlockquoteProfileWrapper, BlockquoteContent, Testimony, Author, Origin } from './../src/Blockquote';
import ProfilePicture from './../src/ProfilePicture';

const SliderStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Slider</h1>
        <p><code>{`import { Slider, SliderItem } from 'glints-aries'`}</code></p>
      </div>

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
              <Slider>
                <SliderItem>
                  <Blockquote>
                    <BlockquoteProfileWrapper>
                      <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                    </BlockquoteProfileWrapper>
                    <BlockquoteContent>
                      <Testimony>I didn't really know what I wanted to do and what were all the career paths out there!</Testimony>
                      <Author>Fredy Yanto</Author>
                      <Origin>National University of Singapore (NUS)</Origin>
                    </BlockquoteContent>
                  </Blockquote>
                  <Blockquote>
                    <BlockquoteProfileWrapper>
                      <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                    </BlockquoteProfileWrapper>
                    <BlockquoteContent>
                      <Testimony>I didn't really know what I wanted to do and what were all the career paths out there!</Testimony>
                      <Author>Fredy Yanto</Author>
                      <Origin>National University of Singapore (NUS)</Origin>
                    </BlockquoteContent>
                  </Blockquote>
                </SliderItem>
                <SliderItem>
                  <Blockquote>
                    <BlockquoteProfileWrapper>
                      <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                    </BlockquoteProfileWrapper>
                    <BlockquoteContent>
                      <Testimony>The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already!</Testimony>
                      <Author>Jia Ann</Author>
                      <Origin>Nanyang Technological University  (NTU)</Origin>
                    </BlockquoteContent>
                  </Blockquote>
                  <Blockquote>
                    <BlockquoteProfileWrapper>
                      <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                    </BlockquoteProfileWrapper>
                    <BlockquoteContent>
                      <Testimony>I didn't really know what I wanted to do and what were all the career paths out there!</Testimony>
                      <Author>Fredy Yanto</Author>
                      <Origin>National University of Singapore (NUS)</Origin>
                    </BlockquoteContent>
                  </Blockquote>
                </SliderItem>
                <SliderItem>
                  <Blockquote>
                    <BlockquoteProfileWrapper>
                      <ProfilePicture size="large" assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                    </BlockquoteProfileWrapper>
                    <BlockquoteContent>
                      <Testimony>Glints has been amazing in helping me out with my skills development through personalised recommendations!</Testimony>
                      <Author>Woon Yong Xin</Author>
                      <Origin>SIM University</Origin>
                    </BlockquoteContent>
                  </Blockquote>
                </SliderItem>

              </Slider>
            </td>
            <td><pre>
{`<Slider>
  <SliderItem>
    <Component />
    <Component />
  </SliderItem>
  <SliderItem>
    <Component />
  </SliderItem>
</Slider>`}</pre></td>
          </tr>
        </tbody>
      </table>
      <h1>Note</h1>
      <p>{`You must always wrap your component inside <SliderItem>. If you wanna show one or two components in each slider, You could wrap it inside <SliderItem>.`}</p>
      
    </div>
  );
}

export default SliderStory;
