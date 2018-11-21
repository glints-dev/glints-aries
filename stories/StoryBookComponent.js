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

class StoryBookComponent extends Component <Props> {
  renderTitle() {
    const { title } = this.props;
    return (
      <h1>{title}</h1>
    );
  }

  renderCodeSnippet() {
    const { code } = this.props;
    return (
      <p>
        <code>
          {code}
        </code>
      </p>
    );
  }

  renderUsage() {
    const { children } = this.props;
    return (
      <pre>
        {jsxToString(children)}
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

  renderTBody(object) {
    return <tr key={object}>{this.renderTD(object)}</tr>;
  }

  renderTD(object) {
    return (
      propsColumnName.map(columnName => <td key={object[columnName]}>{object[columnName]}</td>)
    );
  }

  renderTable() {
    const { propsObject } = this.props;
    const propsObjectKey = Object.keys(propsObject);
    return propsObjectKey.map(key => (
      <table className="doc-table">
        {this.renderTHead(key)}
        <tbody>
          {
            propsObject[key].map(object => (
              this.renderTBody(object)
            ))
          }
        </tbody>
      </table>
    ));
  }

  render() {
    const { children } = this.props;
    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2em' }}>
          {this.renderTitle()}
          {this.renderCodeSnippet()}
        </div>
        <div style={{ marginBottom: '2em' }}>
          {children}
        </div>
        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            {this.renderUsage()}
          </Collapsible>
        </div>
        <div style={{ marginBottom: '4em' }}>
          {this.renderTable()}
        </div>
      </div>
    );
  }
}

type Props = {
    children: React$Node,
    title: string,
    code: string,
    propsObject: Object;
  }

export default StoryBookComponent;
