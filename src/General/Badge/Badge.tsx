import * as React from 'react';
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
            id="aries-badge"
            className={className}
            sup={sup}
            {...defaultProps}
          >
            <span id="badge-content">
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
