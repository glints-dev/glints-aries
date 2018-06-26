import React from 'react';
import Card from './../src/Card';
import Divider from './../src/Divider';
import JobBanner from './../src/JobBanner';
import Item from './../src/Item';

const CardStories = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Card</h1>
      <p>Usage: <pre>{`import {
  Card,
  JobBanner,
  Item,
  Divider,
} from '@glints-dev/glints-aries'`}</pre></p>
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
                JobCategory={'Design'}
                JobSalary={'SGD 1000 - 2000'}
                JobLocation={'Singapore'}
                JobType={'Full-Time'}
              >
                <JobBanner 
                  imgUrl={"http://www.pastamania.com.sg/wp-content/uploads/2016/02/new_content_image_careers-2.jpg"}
                  variant="primary"
                >Apply</JobBanner>

                <Item
                  title="Item title"
                  subtitle="Item subtitle"
                  url="https://glints.id"
                  imgUrl="https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png"
                  isExternal={true}
                  paddingSize={'1.4em'}
                />

                <Divider />

              </Card>
            </td>
            <td style={{verticalAlign: 'top', paddingTop: 20, width: '100%'}}><pre>{`<Card
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

  <Item
    title="Item title"
    subtitle="Item subtitle"
    url="https://glints.id"
    imgUrl="string"
    isExternal={true}
    paddingSize={'1.4em'}
  />

  <Divider />

</Card>`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardStories;
