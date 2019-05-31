import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import JobCard from '../../src/Application/JobCard';
import Button from '../../src/General/Button';

const props = {
  JobCard: [
    {
      name: 'targetUrl',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any valid url',
      require: 'no',
      description: 'Redirect URL when it\'s clicked.',
    },
    {
      name: 'target',
      type: 'string',
      defaultValue: <code>_self</code>,
      possibleValue: <code>_blank | _self | _parent | _top | framename</code>,
      require: 'no',
      description: 'Specifies where to open the linked document.',
    },
  ],
  'JobCard.Header': [
    {
      name: 'title',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets title for job card.',
    },
    {
      name: 'tag',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Highlighted tag fro job card.',
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Subtitle for job card.',
    },
    {
      name: 'imgUrl',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Image URL for job card.',
    },
    {
      name: 'isLinkAble',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Should the component be included in link.',
    },
    {
      name: 'onClickSubtitle',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: '',
    },
  ],
  'JobCard.Body': [
    {
      name: 'isLinkAble',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Should the component be included in link.',
    },
  ],
  'JobCard.Detail': [
    {
      name: 'details',
      type: 'array',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets detail for Job Card detail.',
    },
  ],
  'JobCard.Description': [
    {
      name: 'description',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets description for Job Card description.',
    },
    {
      name: 'time',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets time to show in Job Card description.',
    },
  ],
};

const JobCardStory = () => (
  <StorybookComponent
    title="Job Card"
    code="import { JobCard } from 'glints-aries'"
    propsObject={props}
    usage={`<JobCard targetUrl="..." target="...">
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
  >
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
          <Button small removeHoverEffect>Save</Button>
          <Button small removeHoverEffect>Apply</Button>
          <Button small variant="secondary">Detail</Button>
        </JobCard.Footer>
      </JobCard>
    </div>
  </StorybookComponent>
);

export default JobCardStory;
