import * as React from 'react';
import classNames from 'classnames';
import { isNil } from 'lodash';
import { BadgeContainer } from '../../Style/General/BadgeStyle';

const Badge: React.FunctionComponent<Props> = ({
  label, sup, className, ...defaultProps
}) => (
  <React.Fragment>
    {!isNil(label) && (
      <BadgeContainer className={classNames('aries-badge', className)} sup={sup} {...defaultProps}>
        <span className="badge-content">{label}</span>
      </BadgeContainer>
    )}
  </React.Fragment>
);

interface Props extends React.ComponentPropsWithoutRef<typeof BadgeContainer> {
  label: string | number;
  sup?: boolean;
}

export default Badge;
