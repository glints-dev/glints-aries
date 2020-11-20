import * as React from 'react';
import classNames from 'classnames';
import isNil from 'lodash/isNil';
import { BadgeContainer } from './BadgeStyle';
import { BadgeVariant } from './BadgeVariant';

const Badge: React.FunctionComponent<Props> = ({
  label,
  sup,
  variant = BadgeVariant.DEFAULT,
  className,
  ...defaultProps
}) => (
  <React.Fragment>
    {!isNil(label) && (
      <BadgeContainer
        className={classNames('aries-badge', className)}
        role="presentation"
        sup={sup}
        variant={variant}
        {...defaultProps}
      >
        <span className="badge-content">{label}</span>
      </BadgeContainer>
    )}
  </React.Fragment>
);

interface Props extends React.ComponentPropsWithoutRef<typeof BadgeContainer> {
  label: string | number;
  sup?: boolean;
  variant?: string;
}

export default Badge;
