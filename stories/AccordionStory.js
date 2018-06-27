import React, { Component } from 'react';
import Accordion, { AccordionItem, AccordionHeader } from './../src/Accordion';
import Label from './../src/Label';
import {action} from '@storybook/addon-actions';

class AccordionStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobAccordionOpen: false
    };
    this.openJobAccordion = this.openJobAccordion.bind(this);
  }

  openJobAccordion() {
    const { jobAccordionOpen } = this.state;
    this.setState({ jobAccordionOpen: !jobAccordionOpen })
  }

  render() {
    return (
      <div className="doc-mainbar">
        <h1>Glints Accordion</h1>
        <p>usage: <pre>{`import { Accordion, AccordionItem, AccordionHeader, Label } '@glints-dev/glints-aries'`}</pre></p>
  
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
                <div style={{marginBottom: '200px'}}>
                <Accordion>
                  <AccordionHeader title="Jobs" isOpen={this.state.jobAccordionOpen} onClick={this.openJobAccordion}>
                    <AccordionItem onClick={action('Accounting')}>Accounting</AccordionItem>
                    <AccordionItem onClick={action('art & design')}>Art & design</AccordionItem>
                    <AccordionItem onClick={action('Business')}>Business Development</AccordionItem>
                    <AccordionItem onClick={action('consulting')}>Consulting</AccordionItem>
                    <AccordionItem onClick={action('engineering')}>Egineering</AccordionItem>
                    <AccordionItem onClick={action('Enterpreneurship')}>Enterpreneurship</AccordionItem>
                    <AccordionItem onClick={action('Finance')}>Finance</AccordionItem>
                  </AccordionHeader>
                  
                  <div style={{margin: '20px 22px 9px 22px'}}>
                    <Label size="medium" theme="secondary">in</Label>
                  </div>
  
                  <AccordionHeader title="this location" isOpen={true}>
                    <AccordionItem onClick={action('Singapore')}>Singapore</AccordionItem>
                    <AccordionItem onClick={action('Jakarta')}>Jakarta</AccordionItem>
                    <AccordionItem onClick={action('Tokyo')}>Tokyo</AccordionItem>
                    <AccordionItem onClick={action('India')}>India</AccordionItem>
                  </AccordionHeader>
                </Accordion>
                </div>
              </td>
            <td style={{verticalAlign: 'top'}}><pre>{`<Accordion>
  <AccordionHeader title="Jobs" isOpen={${this.state.jobAccordionOpen}} onClick={...}>
    <AccordionItem onClick={...}>Accounting</AccordionItem>
    <AccordionItem onClick={...}>instagram.com</AccordionItem>
  </AccordionHeader>

  <div style={{margin: '20px 22px 9px 22px'}}>
    <Label size="medium" theme="secondary">in</Label>
  </div>

  <AccordionHeader title="Related to" isOpen={true}>
    <AccordionItem>Singapore</AccordionItem>
    <AccordionItem>Jakarta</AccordionItem>
  </AccordionHeader>
</Accordion>`}</pre></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default AccordionStory;
