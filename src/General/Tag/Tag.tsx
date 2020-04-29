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
    theme,
    block,
    outline,
    borderStyle,
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
        theme={theme}
        block={block}
        outline={outline}
        borderStyle={borderStyle}
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
  theme: 'grey',
  block: false,
  outline: false,
  borderStyle: 'solid',
};

interface Props extends React.ComponentPropsWithoutRef<typeof TagContainer> {
  children: React.ReactNode;
  theme?: string;
  onClick?(e: React.MouseEvent<HTMLLabelElement, MouseEvent>): void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default Tag;
