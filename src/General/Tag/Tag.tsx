import * as React from 'react';
import classNames from 'classnames';
import {
  TagContainer,
  TagContent,
  StartIconContainer,
  EndIconContainer,
} from '../../Style/General/TagStyle';

const Tag: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    block,
    outline,
    border,
    startIcon,
    endIcon,
    onClick,
    ...restProps
  } = props;

  const content = (
    <>
      {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      {children}
      {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
    </>
  );

  return (
    <React.Fragment>
      <TagContainer
        className={classNames('aries-tag', className)}
        role="presentation"
        tabIndex={0}
        block={block}
        outline={outline}
        border={border}
        {...restProps}
      >
        <TagContent
          className="tag-content"
          tabIndex={-1}
          isClickable={typeof onClick === 'function'}
          onClick={onClick}
        >
          {content}
        </TagContent>
      </TagContainer>
    </React.Fragment>
  );
};

Tag.defaultProps = {
  block: false,
  outline: false,
  border: 'solid',
};

interface Props extends React.ComponentPropsWithoutRef<typeof TagContainer> {
  children: React.ReactNode;
  onClick?(e: React.MouseEvent<HTMLLabelElement, MouseEvent>): void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default Tag;
