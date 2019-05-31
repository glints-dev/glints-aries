import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Slider from '../../src/Display/Slider';
import Blockquote from '../../src/Display/Blockquote';
import ProfilePicture from '../../src/General/ProfilePicture';

const props = {
  Slider: [
    {
      name: 'initialItem',
      type: 'number',
      defaultValue: '1',
      possibleValue: 'index of item',
      require: 'no',
      description: 'Sets initial item to show. Index starts from 1 until so on.',
    },
    {
      name: 'fullContent',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets content to fill all area.',
    },
    {
      name: 'arrowWhite',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Changes arrow color to white.',
    },
    {
      name: 'removeDots',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Remove dots.',
    },
    {
      name: 'autoplay',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets slider to slide automatically.',
    },
    {
      name: 'afterChange',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Gets current index of item.',
    },
  ],
};

const SliderStory = () => (
  <StorybookComponent
    title="Slider"
    code="import { Slider } from 'glints-aries'"
    propsObject={props}
    usage={`getCurrentIndex = (index) => {
  console.log(index);
}

<Slider
  afterChange={this.getCurrentIndex}
  autoplay
>
  <Slider.Item>
    <Component />
    <Component />
  </Slider.Item>
  <Slider.Item>
    <Component />
  </Slider.Item>
</Slider>`}
  >
    <Slider autoplay>
      <Slider.Item>
        <Blockquote>
          <Blockquote.Profile>
            <ProfilePicture>
              <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="Profile Picture" />
            </ProfilePicture>
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
            <ProfilePicture>
              <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="Profile Picture" />
            </ProfilePicture>
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
            <ProfilePicture>
              <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="Profile Picture" />
            </ProfilePicture>
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
            <ProfilePicture>
              <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="Profile Picture" />
            </ProfilePicture>
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
            <ProfilePicture>
              <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="Profile Picture" />
            </ProfilePicture>
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
  </StorybookComponent>
);
export default SliderStory;
