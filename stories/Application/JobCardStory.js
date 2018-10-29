import React from 'react';

import JobCard from '../../src/Application/JobCard';
import Button from '../../src/General/Button';
import Collapsible from '../../src/Display/Collapsible';

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

    <div style={{ marginBottom: '2em', width: '300px' }}>
      <JobCard
        targetUrl="https://glints.com/"
      >
        <JobCard.Header
          title="Software Engineer"
          tag="Special"
          subtitle="Glints"
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
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<JobCard targetUrl="..." target="...">
  <JobCard.Header
    title="Item title"
    tag="Special"
    subtitle="Item subtitle"
    imgUrl="imageUrl | imageComponent"
    onClickSubtitle={() => ...}
    isLinkAble={true}
  />
  <JobCard.Body isLinkAble={true}>
    <JobCard.Detail
      details={['...', '...', '...', '...']}
    />
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
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              <span style={{ fontWeight: '100' }}>Props for</span>
              {' '}
              JobCard
            </h3>
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default Value</th>
          <th>Possible Values</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>targetUrl</td>
          <td>string</td>
          <td></td>
          <td>any valid url</td>
          <td>no</td>
          <td>{'Redirect URL when it\'s clicked.'}</td>
        </tr>
        <tr>
          <td>target</td>
          <td>string</td>
          <td><code>_self</code></td>
          <td>
            <code>
              _blank | _self | _parent | _top | framename
            </code>
          </td>
          <td>no</td>
          <td>Specifies where to open the linked document.</td>
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
              JobCard.Header
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
      <tbody>
        <tr>
          <td>title</td>
          <td>string</td>
          <td></td>
          <td>any</td>
          <td>yes</td>
          <td>Sets title for job card.</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>string</td>
          <td></td>
          <td>any</td>
          <td>yes</td>
          <td>Highlighted tag fro job card.</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td>string</td>
          <td></td>
          <td>any</td>
          <td>yes</td>
          <td>Subtitle for job card.</td>
        </tr>
        <tr>
          <td>imgUrl</td>
          <td>string</td>
          <td></td>
          <td>any</td>
          <td>yes</td>
          <td>Image URL for job card.</td>
        </tr>
        <tr>
          <td>isLinkAble</td>
          <td>boolean</td>
          <td><code>false</code></td>
          <td><code>true | false</code></td>
          <td>no</td>
          <td>Should the component be included in link.</td>
        </tr>
        <tr>
          <td>onClickSubtitle</td>
          <td>function</td>
          <td></td>
          <td>function</td>
          <td>no</td>
          <td></td>
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
              JobCard.Body
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
      <tbody>
        <tr>
          <td>isLinkAble</td>
          <td>boolean</td>
          <td><code>false</code></td>
          <td><code>true | false</code></td>
          <td>no</td>
          <td>Should the component be included in link.</td>
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
              JobCard.Detail
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
      <tbody>
        <tr>
          <td>details</td>
          <td>array</td>
          <td></td>
          <td>any</td>
          <td>yes</td>
          <td>Sets detail for Job Card detail.</td>
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
              JobCard.Description
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
      <tbody>
        <tr>
          <td>description</td>
          <td>string</td>
          <td></td>
          <td>any</td>
          <td>yes</td>
          <td>Sets description for Job Card description.</td>
        </tr>
        <tr>
          <td>time</td>
          <td>string</td>
          <td></td>
          <td>any</td>
          <td>yes</td>
          <td>Sets time to show in Job Card description.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default JobCardStory;
