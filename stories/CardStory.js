import React from 'react';
import Card from './../src/Card';
import JobBanner from './../src/JobBanner';

const CardStories = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Card</h1>
      <p>Usage: <code>{`import { Card, JobBanner } from '@glints-dev/glints-aries'`}</code></p>
      <p style={{color: 'red', fontSize: 20}}>Beta</p>
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Preview
            </th>
            <th>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Card 
                CompanyLogo={'https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png'}
                CompanyName={'Glints'}
                JobTitle={'Software Engineer'}
                JobCategory={'Design'}
                JobSalary={'SGD 1000 - 2000'}
                JobLocation={'Singapore'}
                JobType={'Full-Time'}
              >
                <JobBanner 
                  imgUrl={"http://www.pastamania.com.sg/wp-content/uploads/2016/02/new_content_image_careers-2.jpg"}
                  variant="primary"
                >Apply</JobBanner>
              </Card>
            </td>
            <td style={{verticalAlign: 'top', paddingTop: 20, width: '100%'}}><pre>{`<Card 
  CompanyLogo={'string url'}
  CompanyName={'Glints'}
  JobTitle={'Software Engineer'}
  JobCategory={'Design'}
  JobSalary={'SGD 1000 - 2000'}
  JobLocation={'Singapore'}
  JobType={'Full-Time'}
>
  <JobBanner 
    imgUrl={"string url"}
    variant="primary"
  >
    Apply
  </JobBanner>
</Card>`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardStories;
