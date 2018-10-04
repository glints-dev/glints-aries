import React from 'react';
import JobCard from '../../src/Application/JobCard';

import Button from '../../src/General/Button';

const JobCardStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>Job Card</h1>
      <div>
        <code>
          {'import { JobCard } from \'glints-aries\''}
        </code>
      </div>
    </div>
    <table className="doc-table">
      <thead>
        <tr>
          <th>Preview</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <JobCard
              targetUrl="https://glints.com/"
            >
              <JobCard.Header
                title="https://brillianceadvisory.wixsite.com/mysite"
                tag="Special"
                subtitle="https://brillianceadvisory.wixsite.com/mysite"
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png"
                isLinkAble
              />
              <JobCard.Body isLinkAble>
                <JobCard.Detail details={['Design', 'SGD 1000 - 2000', 'Singapore', 'Full-Time']} />
                <JobCard.Description
                  description={'Relentless. College Dropouts. Venture-backed. Straits Times called us the "Stuff of Many Singaporeans Parents\' Nightmares", due to our "fundamental naughtiness and healthy disrespect for rules”. We were nearly flung into military prison for rebelling against irrational rules. Grow fast, dare to do what we love, and break conventions. That’s how we started, that\'s how we roll here at this crazy company ;)'}
                  time="5 days ago"
                />
              </JobCard.Body>
              <JobCard.Footer>
                <Button>Save</Button>
                <Button>Apply</Button>
                <Button variant="secondary">Detail</Button>
              </JobCard.Footer>
            </JobCard>
          </td>
          <td style={{ verticalAlign: 'top', paddingTop: 20, width: '100%' }}>
            <pre>
              {`<JobCard targetUrl="...">
  <JobCard.Header
    title="Item title"
    tag="Special"
    subtitle="Item subtitle"
    imgUrl="imageUrl | imageComponent"
    isLinkAble={true}
  />
  <JobCard.Body isLinkAble={true}>
    <JobCard.Detail details={['...', '...', '...', '...']} />
    <JobCard.Description 
      description={'...'} 
      time="5 days ago"
    />
  </JobCard.Body>
  <JobCard.Footer>
    <Button>Save</Button>
    <Button>Apply</Button>
    <Button variant="secondary">Detail</Button>
  </JobCard.Footer>
</JobCard>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>
    <h1>Props</h1>
    <h2>JobCard</h2>
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
          <td>targetUrl</td>
          <td>string</td>
          <td>any</td>
          <td>no</td>
          <td>redirect URL when clicked</td>
        </tr>
      </tbody>
    </table>

    <h2>JobCard.Header</h2>
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
          <td>Sets title for job card.</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>string</td>
          <td>any</td>
          <td>yes</td>
          <td>Highlighted tag fro job card.</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td>string</td>
          <td>any</td>
          <td>yes</td>
          <td>Subtitle for job card.</td>
        </tr>
        <tr>
          <td>imgUrl</td>
          <td>string</td>
          <td>any</td>
          <td>yes</td>
          <td>Image URL for job card.</td>
        </tr>
        <tr>
          <td>isLinkAble</td>
          <td>boolean</td>
          <td><pre>true | false</pre></td>
          <td>no</td>
          <td>Should the component be included in link.</td>
        </tr>
      </tbody>
    </table>

    <h2>JobCard.Body</h2>
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
          <td>isLinkAble</td>
          <td>boolean</td>
          <td><pre>true | false</pre></td>
          <td>no</td>
          <td>Should the component be included in link.</td>
        </tr>
      </tbody>
    </table>

    <h2>JobCard.Detail</h2>
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
          <td>details</td>
          <td>Array</td>
          <td>any</td>
          <td>yes</td>
          <td>Sets title for job card detail.</td>
        </tr>
      </tbody>
    </table>

    <h2>JobCard.Description</h2>
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
          <td>description</td>
          <td>string</td>
          <td>any</td>
          <td>yes</td>
          <td>Sets description for job card description.</td>
        </tr>
        <tr>
          <td>time</td>
          <td>string</td>
          <td>any</td>
          <td>yes</td>
          <td>Sets time to show in job card description.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default JobCardStory;
