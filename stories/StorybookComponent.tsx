import * as React from 'react';
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

class StorybookComponent extends React.Component<Props> {
  renderTitle(title: React.ReactNode) {
    return (
      <h1>{title}</h1>
    );
  }

  renderImportCode(code: React.ReactNode) {
    return (
      <p>
        <code>
          {code}
        </code>
      </p>
    );
  }

  renderDefaultUsage(children: React.ReactNode) {
    return (
      <pre>
        {jsxToString(children)}
      </pre>
    );
  }

  renderUsage(usage: React.ReactNode) {
    return (
      <pre>
        {usage}
      </pre>
    );
  }

  renderTHead(tableName: string) {
    return (
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan={6}>
            <h3 style={{ margin: '.8em 0' }}>
              <span
                style={{
                  fontWeight: 'normal',
                  fontSize: '14px',
                  color: '#777',
                  marginRight: '6px',
                }}
              >
                Props for
              </span>
              {tableName}
            </h3>
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

  renderTBody(object: any, index: number) {
    return (
      <tr key={object.name}>
        {propsColumnName.map(columnName => <td key={`${columnName}_${index}`}>{object[columnName]}</td>)}
      </tr>
    );
  }

  renderTable(propsObject: { [key: string]: any }) {
    const propsObjectKey = Object.keys(propsObject);
    return propsObjectKey.map(key => (
      <table className="doc-table" key={key}>
        {this.renderTHead(key)}
        <tbody key={key}>
          {
            propsObject[key].map((object: any, index: number) => (
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
        {(title || code) && (
          <div style={{ marginBottom: '2em' }}>
            {title && this.renderTitle(title)}
            {code && this.renderImportCode(code)}
          </div>
        )}

        <div style={{ marginBottom: '2em' }}>
          {children}
        </div>

        <div style={{ marginBottom: '2em' }}>
          <Collapsible label="Usage" isOpen={false}>
            {usage
              ? this.renderUsage(usage)
              : this.renderDefaultUsage(children)}
          </Collapsible>
        </div>

        {propsObject && (
          <div style={{ marginBottom: '4em' }}>
            {this.renderTable(propsObject)}
          </div>
        )}
      </div>
    );
  }
}

interface Props {
  title?: string;
  code?: string;
  usage?: string;
  children?: React.ReactNode;
  propsObject?: Object;
}

export default StorybookComponent;
