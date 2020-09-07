import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Slider from '../../src/Display/Slider';

const props = {
  Slider: [
    {
      name: 'initialItem',
      type: 'number',
      defaultValue: '1',
      possibleValue: 'index of item',
      require: 'no',
      description:
        'Sets initial item to show. Index starts from 1 until so on.',
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
        <img
          src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80"
          alt="Profile Picture"
        />
      </Slider.Item>
      <Slider.Item>
        <img
          src="https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
          alt="Nature"
        />
      </Slider.Item>
      <Slider.Item>
        <img
          src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
          alt="Keyboard"
        />
      </Slider.Item>
    </Slider>
  </StorybookComponent>
);
export default SliderStory;
