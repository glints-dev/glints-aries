import React, { Component } from 'react';
import Accordion, { AccordionItem, AccordionHeader } from './../src/Accordion';
import Label from './../src/Label';

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
        <h1>Glints Label</h1>
        <p>usage: <code>{`import Accordion, { AccordionItem, AccordionHeader } '@glints-dev/glints-aries'`}</code></p>
  
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
                    <AccordionItem onClick={() => {}}>Accounting</AccordionItem>
                    <AccordionItem onClick={() => {}}>Art & design</AccordionItem>
                    <AccordionItem onClick={() => {}}>Business Development</AccordionItem>
                    <AccordionItem onClick={() => {}}>Consulting</AccordionItem>
                    <AccordionItem onClick={() => {}}>Egineering</AccordionItem>
                    <AccordionItem onClick={() => {}}>Enterpreneurship</AccordionItem>
                    <AccordionItem onClick={() => {}}>Finance</AccordionItem>
                  </AccordionHeader>
                  
                  <div style={{margin: '20px 22px 9px 22px'}}>
                    <Label size="medium" theme="secondary">in</Label>
                  </div>
  
                  <AccordionHeader title="this location" isOpen={true}>
                    <AccordionItem>Singapore</AccordionItem>
                    <AccordionItem>Jakarta</AccordionItem>
                  </AccordionHeader>
                </Accordion>
                </div>
              </td>
            <td style={{verticalAlign: 'top'}}><pre>{`<Accordion>
  <AccordionHeader title="Jobs" isOpen={${this.state.jobAccordionOpen}} onClick={test}>
    <AccordionItem onClick={test}>Accounting</AccordionItem>
    <AccordionItem onClick={test2}>instagram.com</AccordionItem>
  </AccordionHeader>

  <AccordionHeader title="Related to">
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
