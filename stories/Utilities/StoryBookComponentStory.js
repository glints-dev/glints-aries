import React from 'react';

import Tag from '../../src/General/Tag';
import Icon from '../../src/General/Icon';
import Collapsible from '../../src/Display/Collapsible';

const StoryBookComponentStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        StoryBookComponent
      </h1>
      <p>
        <code>
          {'import { StoryBookComponent } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }} />

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<StoryBookComponent
    title="title"
    code="import { component} from 'glints-aries'"
    propsObject=[
      {
        name:'name'
        type:'type'
        defaultValue:'defaultValue'
        possibleValue:'possibleValue'
        require:'require'
        description:'description'
      }
    ]
>
  <Component/>
</StoryBookComponent>`}
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
            title
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Sets the title of storybook.
          </td>
        </tr>
        <tr>
          <td>
          code
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Snippet code
          </td>
        </tr>
        <tr>
          <td>
            propsObject
          </td>
          <td>
            array
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Array of object to populate props name and description in the table.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default StoryBookComponentStory;
