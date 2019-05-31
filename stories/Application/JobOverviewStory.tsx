import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import JobOverview from '../../src/Application/JobOverview';
import Icon from '../../src/General/Icon';
import Divider from '../../src/General/Divider';

const JobOverviewStory = () => (
  <StorybookComponent
    title="Job Overview"
    code="import { JobOverview, Icon, Divider } from 'glints-aries'"
    usage={`<JobOverview>
  <JobOverview.Header>
    <img
      height="64"
      width="64"
      alt=""
      src="..." 
    />
  </JobOverview.Header>

  <JobOverview.Body>
    <JobOverview.Label>
      Sangat Spesial
    </JobOverview.Label>

    <JobOverview.Heading>
      Sales & Marketing Supervisor
    </JobOverview.Heading>
    
    <JobOverview.Link>
      <a href="https://facebook.com">
        Berkis Company
      </a>
    </JobOverview.Link>

    <JobOverview.Info>
      <p>
        <Icon name="dot" color="#c6c6c6" />
        <span>HR Recruitment</span>
      </p>
      <p>
        <Icon name="dot" color="#c6c6c6" />
        <span>Jakarta Selatan, Indonesia</span>
      </p>
      <p>
        <Icon name="dot" color="#c6c6c6" />
        <span>IDR 7,000,000 - 14,000,000</span>
      </p>
      <p>
        <Icon name="dot" color="#c6c6c6" />
        <span>Magang: 3 bulan</span>
      </p>
    </JobOverview.Info>

    <Divider theme="grey" style={{ margin: 0 }} />
  </JobOverview.Body>
</JobOverview>`}
  >
    <JobOverview>
      <JobOverview.Header>
        <img
          height="90"
          width="90"
          alt=""
          src="https://cdn.zeplin.io/5a99106ac26df76756166bac/assets/7798CA38-0D5C-4FDC-ACFC-2EE3781D2062.png" 
        />
      </JobOverview.Header>

      <JobOverview.Body>
        <JobOverview.Label>
          Sangat Spesial
        </JobOverview.Label>

        <JobOverview.Heading>
          Sales & Marketing Supervisor
        </JobOverview.Heading>
        
        <JobOverview.Link>
          <a href="https://facebook.com">
            Berkis Company
          </a>
        </JobOverview.Link>

        <JobOverview.Info>
          <p>
            <span>
              <Icon name="dot" color="#c6c6c6" />
              <span>HR Recruitment</span>
            </span>
          </p>
          <p>
            <Icon name="dot" color="#c6c6c6" />
            <span>Jakarta Selatan, Indonesia</span>
          </p>
          <p>
            <Icon name="dot" color="#c6c6c6" />
            <span>IDR 7,000,000 - IDR 14,000,000</span>
          </p>
          <p>
            <Icon name="dot" color="#c6c6c6" />
            <span>Magang: 3 bulan</span>
          </p>
        </JobOverview.Info>

        <Divider theme="grey" style={{ margin: 0 }} />
      </JobOverview.Body>
    </JobOverview>
  </StorybookComponent>
);

export default JobOverviewStory;
