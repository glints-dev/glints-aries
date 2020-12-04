import * as React from 'react';
import classNames from 'classnames';
import isNil from 'lodash/isNil';
import { BadgeContainer } from './BadgeStyle';
import { BadgeVariant } from './BadgeVariant';

export const Badge: React.FunctionComponent<Props> = ({
  label,
  sup = false,
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

export type BadgeType = 'dimmed' | 'default';

export interface Props
  extends React.ComponentPropsWithoutRef<typeof BadgeContainer> {
  /** Set the label of Badge. */
  label: string | number;
  /** Set Badge into superscript type. */
  sup?: boolean;
  /** Sets the variant of the Badge. */
  variant?: BadgeType;
}

export default Badge;
