import React from 'react';
import Carousel from '../../src/Display/Carousel';

import Blockquote from '../../src/Display/Blockquote';
import ProfilePicture from '../../src/General/ProfilePicture';

const SliderStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Carousel
      </h1>
      <p>
        <code>
          {'import { Carousel } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <Carousel />

    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
            initialItem
          </td>
          <td>
            number
          </td>
          <td>
            index of item
          </td>
          <td>
            no
          </td>
          <td>
            Sets initial item to show.
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
