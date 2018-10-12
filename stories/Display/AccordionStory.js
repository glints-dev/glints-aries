import React from 'react';

import Accordion from '../../src/Display/Accordion';

const AccordionStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Accordion
      </h1>
      <p>
        <code>
          {'import { Accordion } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <Accordion>
        <Accordion.Panel
          label="What is Lorem Ipsum?"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Accordion.Panel
          label="What is Love?"
          content="Love is the most powerful emotion a human being can experience. The strange think is, that almost nobody knows what love is. Why is it so difficult to find love? That is easy to understand, if you know that the word “love” is not the same as one’s feeling of love."
        />
      </Accordion>
    </div>

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
              {`<Accordion initialItem={1}>
  <Accordion.Panel
    label="..."
    content="..."
  />
  <Accordion.Panel
    label="..."
    content="..."
  />
</Accordion>`}
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
            Sets initial item to show. Index starts from 1 until so on.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default AccordionStory;
