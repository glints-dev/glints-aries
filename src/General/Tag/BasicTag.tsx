import * as React from 'react';
import classNames from 'classnames';
import { TagContainer, TagContent } from './TagStyle';

const Tag: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    block = false,
    outline = false,
    onClick,
    ...restProps
  } = props;

  return (
    <TagContainer
      className={classNames('aries-tag', className)}
      role="presentation"
      tabIndex={0}
      block={block}
      outline={outline}
      isClickable={typeof onClick === 'function'}
      onClick={onClick}
      {...restProps}
    >
      <TagContent className="tag-content" tabIndex={-1}>
        {children}
      </TagContent>
    </TagContainer>
  );
};

export type Props = React.ComponentPropsWithoutRef<typeof TagContainer> & {
  children: React.ReactNode;
};

export default Tag;
