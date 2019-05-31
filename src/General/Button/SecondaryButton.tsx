import * as React from 'react';
import { SecondaryContainer, SecondaryBtn } from '../../Style/General/ButtonStyle';

const SecondaryButton: React.FunctionComponent<Props> = ({
  children,
  className,
  block,
  small,
  disabled,
  ...defaultProps
}) => (

  <SecondaryContainer
    id="aries-secondarybtn"
    className={className}
    block={block}
    disabled={disabled}
  >
    <SecondaryBtn
      id="secondarybtn-content"
      block={block}
      small={small}
      disabled={disabled}
      {...defaultProps}
    >
      {children}
    </SecondaryBtn>
  </SecondaryContainer>
);

interface Props extends React.ComponentPropsWithoutRef<typeof SecondaryBtn> {
  children: React.ReactNode;
  className: string;
  block: boolean;
  small: boolean;
  disabled?: boolean;
}

export default SecondaryButton;
