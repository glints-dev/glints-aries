import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { Accordion, AccordionHeader, AccordionBody, AccordionItem, AccordionLabel } from '../src/Accordion';
import Label from '../src/Label';

class AccordionStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobAccordionOpen: false,
      locAccordionOpen: false,
    };
    this.toggleJobAccordion = this.toggleJobAccordion.bind(this);
    this.toggleLocAccordion = this.toggleLocAccordion.bind(this);
  }

  toggleJobAccordion() {
    const { jobAccordionOpen } = this.state;
    this.setState({ jobAccordionOpen: !jobAccordionOpen });
  }

  toggleLocAccordion() {
    const { locAccordionOpen } = this.state;
    this.setState({ locAccordionOpen: !locAccordionOpen });
  }

  render() {
    return (
      <div className="doc-mainbar">
        <div style={{ marginBottom: '2em' }}>
          <h1>
            Accordion
          </h1>
          <p>
            <code>
              {'import { Accordion, AccordionHeader, AccordionBody, AccordionItem, AccordionLabel } from \'glints-aries\''}
            </code>
          </p>
        </div>

        <table className="doc-table">
          <thead>
            <tr>
              <th colSpan="0">
                Preview
              </th>
              <th>
usage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top' }}>
                <Accordion>
                  <AccordionHeader title="Jobs" isOpen={this.state.jobAccordionOpen} onClick={this.toggleJobAccordion}>
                    <AccordionBody>
                      <AccordionItem onClick={action('Accounting')}>
  Accounting
                      </AccordionItem>
                      <AccordionItem onClick={action('art & design')}>
  Art & design
                      </AccordionItem>
                      <AccordionItem onClick={action('Business')}>
  Business Development
                      </AccordionItem>
                      <AccordionItem onClick={action('consulting')}>
  Consulting
                      </AccordionItem>
                      <AccordionItem onClick={action('engineering')}>
  Egineering
                      </AccordionItem>
                      <AccordionItem onClick={action('Enterpreneurship')}>
  Enterpreneurship
                      </AccordionItem>
                      <AccordionItem onClick={action('Finance')}>
  Finance
                      </AccordionItem>
                    </AccordionBody>
                  </AccordionHeader>

                  <AccordionLabel>
                    <Label size="medium" theme="secondary">
in
                    </Label>
                  </AccordionLabel>

                  <AccordionHeader title="This Location" isOpen={this.state.locAccordionOpen} onClick={this.toggleLocAccordion}>
                    <AccordionBody>
                      <AccordionItem onClick={action('Singapore')}>
  Singapore
                      </AccordionItem>
                      <AccordionItem onClick={action('Jakarta')}>
  Jakarta
                      </AccordionItem>
                      <AccordionItem onClick={action('Tokyo')}>
  Tokyo
                      </AccordionItem>
                      <AccordionItem onClick={action('India')}>
  India
                      </AccordionItem>
                    </AccordionBody>
                  </AccordionHeader>
                </Accordion>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <pre>
                  {`<Accordion>
  <AccordionHeader title="Jobs" isOpen={${this.state.jobAccordionOpen}} onClick={...}>
    <AccordionBody>
      <AccordionItem onClick={...}>Accounting</AccordionItem>
      <AccordionItem onClick={...}>instagram.com</AccordionItem>
    </AccordionBody>
  </AccordionHeader>

  <AccordionLabel>
    <Label size="medium" theme="secondary">in</Label>
  </AccordionLabel>

  <AccordionHeader title="This Location" isOpen={true}>
    <AccordionBody>
      <AccordionItem>Singapore</AccordionItem>
      <AccordionItem>Jakarta</AccordionItem>
    </AccordionBody>
  </AccordionHeader>
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
title
              </td>
              <td>
string
              </td>
              <td>
any
              </td>
              <td>
yes
              </td>
              <td>
Sets title for accordion.
              </td>
            </tr>
            <tr>
              <td>
isOpen
              </td>
              <td>
boolean
              </td>
              <td>
                <pre>
                  {'true | false'}
                </pre>
              </td>
              <td>
yes
              </td>
              <td>
Sets to open and close accordion.
              </td>
            </tr>
            <tr>
              <td>
onClick
              </td>
              <td>
function
              </td>
              <td></td>
              <td>
yes
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default AccordionStory;
