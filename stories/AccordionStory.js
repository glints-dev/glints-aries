import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from '../src/Display/Accordion';

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
    const { jobAccordionOpen, locAccordionOpen } = this.state;

    return (
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

        <table className="doc-table">
          <thead>
            <tr>
              <th colSpan="0">
                Preview
              </th>
              <th>
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top' }}>
                <Accordion>
                  <Accordion.Header title="Jobs" isOpen={jobAccordionOpen} onClick={this.toggleJobAccordion}>
                    <Accordion.Body>
                      <Accordion.Item onClick={action('Accounting')}>
                        Accounting
                      </Accordion.Item>
                      <Accordion.Item onClick={action('art & design')}>
                        Art & design
                      </Accordion.Item>
                      <Accordion.Item onClick={action('Business')}>
                        Business Development
                      </Accordion.Item>
                      <Accordion.Item onClick={action('consulting')}>
                        Consulting
                      </Accordion.Item>
                      <Accordion.Item onClick={action('engineering')}>
                        Engineering
                      </Accordion.Item>
                      <Accordion.Item onClick={action('Enterpreneurship')}>
                        Enterpreneurship
                      </Accordion.Item>
                      <Accordion.Item onClick={action('Finance')}>
                        Finance
                      </Accordion.Item>
                    </Accordion.Body>
                  </Accordion.Header>

                  <Accordion.Label>
                    <label>
                      in
                    </label>
                  </Accordion.Label>

                  <Accordion.Header title="This Location" isOpen={locAccordionOpen} onClick={this.toggleLocAccordion}>
                    <Accordion.Body>
                      <Accordion.Item onClick={action('Singapore')}>
                        Singapore
                      </Accordion.Item>
                      <Accordion.Item onClick={action('Jakarta')}>
                        Jakarta
                      </Accordion.Item>
                      <Accordion.Item onClick={action('Tokyo')}>
                        Tokyo
                      </Accordion.Item>
                      <Accordion.Item onClick={action('India')}>
                        India
                      </Accordion.Item>
                    </Accordion.Body>
                  </Accordion.Header>
                </Accordion>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <pre>
                  {`<Accordion>
  <Accordion.Header title="Jobs" isOpen={${jobAccordionOpen}} onClick={...}>
    <Accordion.Body>
      <Accordion.Item onClick={...}>Accounting</Accordion.Item>
      <Accordion.Item onClick={...}>instagram.com</Accordion.Item>
    </Accordion.Body>
  </Accordion.Header>

  <Accordion.Label>
    <label>in</label>
  </Accordion.Label>

  <Accordion.Header title="This Location" isOpen={true}>
    <Accordion.Body>
      <Accordion.Item>Singapore</Accordion.Item>
      <Accordion.Item>Jakarta</Accordion.Item>
    </Accordion.Body>
  </Accordion.Header>
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
