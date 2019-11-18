import * as React from 'react';
import { DotIcon } from '../../General/Icon/components';

import {
  JobcardDetailWrapper,
  IconHolder,
} from '../../Style/Application/JobCardStyle';

const JobCardDetail: React.FunctionComponent<Props> = ({
  details,
  id,
  ...defaultProps
}) => (
  <JobcardDetailWrapper {...defaultProps}>
    <ul>
      {details
        .filter(detail => detail !== '')
        .map((detail, index) => (
          <div key={`${detail.key}-${id}-${index}`}>
            <IconHolder>
              <DotIcon color="#c6c6c6" />
            </IconHolder>
            <li>{detail}</li>
          </div>
        ))}
    </ul>
  </JobcardDetailWrapper>
);

export interface Props {
  details: Array<React.ReactNode & React.Attributes>;
  id: String;
  isLinkAble?: boolean;
}

export default JobCardDetail;
