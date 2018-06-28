import React, { Component } from 'react';
import Accordion, { AccordionHeader, AccordionItem, AccordionLabel } from './../src/Accordion';
import Label from './../src/Label';
import {action} from '@storybook/addon-actions';

class AccordionStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobAccordionOpen: false,
      locAccordionOpen: true,
    };
    this.toggleJobAccordion = this.toggleJobAccordion.bind(this);
    this.toggleLocAccordion = this.toggleLocAccordion.bind(this);
  }

  toggleJobAccordion() {
    const { jobAccordionOpen } = this.state;
    this.setState({ jobAccordionOpen: !jobAccordionOpen })
  }

  toggleLocAccordion() {
    const { locAccordionOpen } = this.state;
    this.setState({ locAccordionOpen: !locAccordionOpen })
  }

  render() {
    return (
      <div className="doc-mainbar">
        <h1>Glints Accordion</h1>
        <p>usage: <pre>{`import { Accordion, AccordionItem, AccordionHeader, Label } 'glints-aries'`}</pre></p>
  
        <table className="doc-table">
          <thead>
            <tr>
              <th colSpan="0">
                Preview
              </th>
              <th>usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{verticalAlign: 'top'}}>
                <Accordion>
                  <AccordionHeader title="Jobs" isOpen={this.state.jobAccordionOpen} onClick={this.toggleJobAccordion}>
                    <AccordionItem onClick={action('Accounting')}>Accounting</AccordionItem>
                    <AccordionItem onClick={action('art & design')}>Art & design</AccordionItem>
                    <AccordionItem onClick={action('Business')}>Business Development</AccordionItem>
                    <AccordionItem onClick={action('consulting')}>Consulting</AccordionItem>
                    <AccordionItem onClick={action('engineering')}>Egineering</AccordionItem>
                    <AccordionItem onClick={action('Enterpreneurship')}>Enterpreneurship</AccordionItem>
                    <AccordionItem onClick={action('Finance')}>Finance</AccordionItem>
                  </AccordionHeader>
                  
                  <AccordionLabel>
                    <Label size="medium" theme="secondary">in</Label>
                  </AccordionLabel>
  
                  <AccordionHeader title="This Location" isOpen={this.state.locAccordionOpen} onClick={this.toggleLocAccordion}>
                    <AccordionItem onClick={action('Singapore')}>Singapore</AccordionItem>
                    <AccordionItem onClick={action('Jakarta')}>Jakarta</AccordionItem>
                    <AccordionItem onClick={action('Tokyo')}>Tokyo</AccordionItem>
                    <AccordionItem onClick={action('India')}>India</AccordionItem>
                  </AccordionHeader>
                </Accordion>
              </td>
            <td style={{verticalAlign: 'top'}}><pre>{`<Accordion>
  <AccordionHeader title="Jobs" isOpen={${this.state.jobAccordionOpen}} onClick={...}>
    <AccordionItem onClick={...}>Accounting</AccordionItem>
    <AccordionItem onClick={...}>instagram.com</AccordionItem>
  </AccordionHeader>

  <AccordionLabel>
    <Label size="medium" theme="secondary">in</Label>
  </AccordionLabel>

  <AccordionHeader title="This Location" isOpen={true}>
    <AccordionItem>Singapore</AccordionItem>
    <AccordionItem>Jakarta</AccordionItem>
  </AccordionHeader>
</Accordion>`}</pre></td>
            </tr>
          </tbody>
        </table>

        <h1>Props</h1>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Value</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>any</td>
              <td>yes</td>
              <td>Sets title for accordion.</td>
            </tr>
            <tr>
              <td>isOpen</td>
              <td>boolean</td>
              <td><pre>{`true | false`}</pre></td>
              <td>yes</td>
              <td>Sets to open and close accordion.</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>function</td>
              <td></td>
              <td>yes</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default AccordionStory;
