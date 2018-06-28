import React from 'react';
import { JobBanner } from './../src/JobBanner';

const previewImage = 'http://www.pastamania.com.sg/wp-content/uploads/2016/02/new_content_image_careers-2.jpg'

const JobBannerStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Banner</h1>
      <p>Usage: <code>{`import { JobBanner } from 'glints-aries'`}</code></p>
      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{minWidth: 360}}>
              <JobBanner
                imgUrl={previewImage}
                variant="primary"
              >Apply</JobBanner>
            </td>
            <td>
              <pre><code>{`<JobBanner
  imgUrl={'url'}
  variant="primary"
>Apply</JobBanner>`}</code></pre>
            </td>
          </tr>
          <tr>
            <td style={{minWidth: 360}}>
              <JobBanner
                imgUrl={previewImage}
                variant="danger"
              >HOT</JobBanner>
            </td>
            <td>
              <pre><code>{`<JobBanner
  imgUrl={'url'}
  variant="danger"
>HOT</JobBanner>`}</code></pre>
            </td>
          </tr>
          <tr>
            <td style={{minWidth: 360}}>
              <JobBanner
                imgUrl={previewImage}
                variant="warning"
              >Warning variant</JobBanner>
            </td>
            <td>
              <pre><code>{`<JobBanner
  imgUrl={'url'}
  variant="warning"
>Warning variant</JobBanner>`}</code></pre>
            </td>
          </tr>
          <tr>
            <td style={{minWidth: 360}}>
              <JobBanner
                imgUrl={previewImage}
                variant="secondary"
              >HOT</JobBanner>
            </td>
            <td>
              <pre><code>{`<JobBanner
  imgUrl={'url'}
  variant="secondary"
>HOT</JobBanner>`}</code></pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default JobBannerStory;