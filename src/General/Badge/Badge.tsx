import * as React from 'react';
import classNames from 'classnames';
import { BadgeContainer } from '../../Style/General/BadgeStyle';

const Badge: React.FunctionComponent<Props> = (props) => {
  const {
    label,
    sup,
    className,
    ...defaultProps
  } = props;

  return (
    <React.Fragment>
      {label
        && (
          <BadgeContainer
            className={classNames('aries-badge', className)}
            sup={sup}
            {...defaultProps}
          >
            <span className="badge-content">
              {label}
            </span>
          </BadgeContainer>
        )
      }
    </React.Fragment>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof BadgeContainer> {
  label: string;
  sup?: boolean;
}

export default Badge;
