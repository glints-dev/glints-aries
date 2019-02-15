import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';

import Collapsible from '../src/Display/Collapsible';

const propsColumnName = [
  'name',
  'type',
  'defaultValue',
  'possibleValue',
  'require',
  'description',
];

class StorybookComponent extends Component <Props> {
  renderTitle(title) {
    return (
      <h1>{title}</h1>
    );
  }

  renderImportCode(code) {
    return (
      <p>
        <code>
          {code}
        </code>
      </p>
    );
  }

  renderDefaultUsage(children) {
    return (
      <pre>
        {jsxToString(children)}
      </pre>
    );
  }

  renderUsage(usage) {
    return (
      <pre>
        {usage}
      </pre>
    );
  }

  renderTHead(tableName) {
    return (
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>{tableName}</h3>
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default Value</th>
          <th>Possible Value</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
    );
  }

  renderTBody(object, index) {
    return (
      <tr key={object.name}>
        {propsColumnName.map(columnName => <td key={`${columnName}_${index}`}>{object[columnName]}</td>)}
      </tr>
    );
  }

  renderTable(propsObject) {
    const propsObjectKey = Object.keys(propsObject);
    return propsObjectKey.map(key => (
      <table className="doc-table" key={key}>
        {this.renderTHead(key)}
        <tbody key={key}>
          {
            propsObject[key].map((object, index) => (
              this.renderTBody(object, index)
            ))
          }
        </tbody>
      </table>
    ));
  }

  render() {
    const {
      title, code, usage, children, propsObject,
    } = this.props;
    return (
      <div className="doc-mainbar">
        <If condition={title || code}>
          <div style={{ marginBottom: '2em' }}>
            <If condition={title}>
              {this.renderTitle(title)}
            </If>
            <If condition={code}>
              {this.renderImportCode(code)}
            </If>
          </div>
        </If>

        <div style={{ marginBottom: '2em' }}>
          {children}
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            <Choose>
              <When condition={usage}>
                {this.renderUsage(usage)}
              </When>
              <Otherwise>
                {this.renderDefaultUsage(children)}
              </Otherwise>
            </Choose>
          </Collapsible>
        </div>

        <div style={{ marginBottom: '4em' }}>
          {this.renderTable(propsObject)}
        </div>
      </div>
    );
  }
}

type Props = {
  title: string,
  code: string,
  usage: string,
  children: React$Node,
  propsObject: Object,
}

export default StorybookComponent;
