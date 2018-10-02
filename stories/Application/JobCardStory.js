import React from 'react';
import JobCard from '../../src/Application/JobCard';

import Button from '../../src/General/Button';

const JobCardStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Job Card
      </h1>
      <div>
        <code>
          {'import { JobCard } from \'glints-aries\''}
        </code>
      </div>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th>
              Preview
          </th>
          <th>
              Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <JobCard
              url="https://www.glints.com"
            >
              <JobCard.Header
                title="Item title"
                tag="Special"
                subtitle="Item subtitle"
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png"
                isExternal
                isLinkAble
              />
              <JobCard.Body isLinkAble>
                <JobCard.Detail details={['Design', 'SGD 1000 - 2000', 'Singapore', 'Full-Time']} />
                <JobCard.Description description={'Relentless. College Dropouts. Venture-backed. Straits Times called us the "Stuff of Many Singaporeans Parents\' Nightmares", due to our "fundamental naughtiness and healthy disrespect for rules”. We were nearly flung into military prison for rebelling against irrational rules. Grow fast, dare to do what we love, and break conventions. That’s how we started, that\'s how we roll here at this crazy company ;)'} time="5 days ago" />
              </JobCard.Body>
              <JobCard.Footer>
                <Button>
                  Save
                </Button>
                <Button>
                  Apply
                </Button>
                <Button variant="secondary">
                  Detail
                </Button>
              </JobCard.Footer>
            </JobCard>
          </td>
          <td style={{ verticalAlign: 'top', paddingTop: 20, width: '100%' }}>
            <pre>
              {`<JobCard>
  <JobCard.Header
    title="Item title"
    tag="Special"
    subtitle="Item subtitle"
    url="..."
    imgUrl="imageUrl | imageComponent"
    isExternal
  />
  <JobCard.Body>
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
  </div>
);

export default JobCardStory;
