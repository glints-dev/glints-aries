import React from 'react';

import AutoComplete from '../../src/Input/AutoComplete';
import Collapsible from '../../src/Display/Collapsible';

const AutoCompleteStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        AutoComplete - Unfinished
      </h1>
      <p>
        <code>
          {'import { AutoComplete } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <div style={{ width: '300px' }}>
        <AutoComplete label="Location" value="Accountant">
          <AutoComplete.Option value="accountant">Accountant</AutoComplete.Option>
          <AutoComplete.Option value="architecture">Architecture</AutoComplete.Option>
          <AutoComplete.Option value="business development">Business Development</AutoComplete.Option>
          <AutoComplete.Option value="product manager">Product Manager</AutoComplete.Option>
          <AutoComplete.Option value="project manager">Project Manager</AutoComplete.Option>
        </AutoComplete>
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<AutoComplete />'}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              <span style={{ fontWeight: '100' }}>Props for</span>
              {' '}
              AutoComplete
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
            label
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets placeholder value for the Text Field.
          </td>
        </tr>
        <tr>
          <td>
            value
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets value for Input.
          </td>
        </tr>
        <tr>
          <td>
            status
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            <code>
              success | error
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets different style for Select based on status.
          </td>
        </tr>
        <tr>
          <td>
            disableTyping
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>false</code>
          </td>
          <td>
            <code>true | false</code>
          </td>
          <td>
            no
          </td>
          <td>
            {'Disable typing on Select input, so the option can\'t be searched.'}
          </td>
        </tr>
        <tr>
          <td>
            disabled
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Disable the Text Field.
          </td>
        </tr>
        <tr>
          <td>
            onChange
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            function
          </td>
          <td>
            no
          </td>
          <td>
            Called when select an option or value of input is changed.
          </td>
        </tr>
        <tr>
          <td>
            small
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets Select to be smaller.
          </td>
        </tr>
        <tr>
          <td>
            removeFloatingLabel
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Removes floating effect for placeholder.
          </td>
        </tr>
        <tr>
          <td>
            removeDropIcon
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Removes drop icon.
          </td>
        </tr>
      </tbody>
    </table>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              <span style={{ fontWeight: '100' }}>Props for</span>
              {' '}
              Select.Option
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
            value
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets value for Option.
          </td>
        </tr>
        <tr>
          <td>
            onOptionClick
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            function
          </td>
          <td>
            no
          </td>
          <td>
            Sets onClick for Option.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default AutoCompleteStory;
