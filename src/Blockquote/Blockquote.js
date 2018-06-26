/* @flow */
import React from 'react';
import { BlockquoteContainer, Paragraph, Testimony, Author, Origin } from './../Style/BlockquoteStyle';


const Blockquote = (props: Props) => {
  const {
    children,
    theme,
    profileImage,
    author,
    origin,
    ...defaultLabelProps
  } = props;

  return (
    <BlockquoteContainer theme={theme}>
        <img src={profileImage} />
        <Paragraph>
            <Testimony>{children}</Testimony>
            <Author>{author}</Author>
            <Origin>{origin}</Origin>
        </Paragraph>
    </BlockquoteContainer>
  );
}

export default Blockquote;
