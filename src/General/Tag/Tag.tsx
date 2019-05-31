import * as React from 'react';
import classNames from 'classnames';
import { TagContainer, TagContent } from '../../Style/General/TagStyle';

const Tag: React.FunctionComponent<Props> = (props) => {
  const {
    className,
    children,
    theme,
    block,
    outline,
    ...defaultProps
  } = props;

  return (
    <React.Fragment>
      <TagContainer
        className={classNames('aries-tag', className)}
        role="presentation"
        tabIndex={0}
        theme={theme}
        block={block}
        outline={outline}
        {...defaultProps}
      >
        <TagContent
          className="tag-content"
          tabIndex={-1}
        >
          {children}
        </TagContent>
      </TagContainer>
    </React.Fragment>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof TagContainer> {
  children: React.ReactNode;
  theme: string;
}

export default Tag;
