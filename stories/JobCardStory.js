import React from 'react';
import JobCard from './../src/JobCard';
import Divider from './../src/Divider';
import Banner from './../src/Banner';
import Item from './../src/Item';

const JobCardStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Job Card</h1>
        <div><code>{`import { Card, Banner, Item, Divider } from 'glints-aries'`}</code></div>
      </div>

      <p style={{color: 'red', fontSize: 20}}>Beta</p>
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <JobCard
                JobCategory={'Design'}
                JobSalary={'SGD 1000 - 2000'}
                JobLocation={'Singapore'}
                JobType={'Full-Time'}
              >
                <Banner 
                  imgUrl={"http://www.pastamania.com.sg/wp-content/uploads/2016/02/new_content_image_careers-2.jpg"}
                  theme="blue"
                >Apply</Banner>

                <Item
                  title="Item title"
                  subtitle="Item subtitle"
                  url="https://glints.id"
                  imgUrl="https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png"
                  isExternal={true}
                  paddingSize={'1.4em'}
                />

                <Divider />

              </JobCard>
            </td>
            <td style={{verticalAlign: 'top', paddingTop: 20, width: '100%'}}><pre>{`<JobCard
  JobCategory={'Design'}
  JobSalary={'SGD 1000 - 2000'}
  JobLocation={'Singapore'}
  JobType={'Full-Time'}
>
  <Banner 
    imgUrl={"string url"}
    variant="primary"
  >
    Apply
  </Banner>

  <Item
    title="Item title"
    subtitle="Item subtitle"
    url="https://glints.id"
    imgUrl="string"
    isExternal={true}
    paddingSize={'1.4em'}
  />

  <Divider />

</JobCard>`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default JobCardStory;
