import * as React from 'react';

import Title from './Title';
import Paragraph from './Paragraph';

const Typography: Typography = props => {
  const { children } = props;

  return <article>{children}</article>;
};

type Typography = React.FunctionComponent<Props> & {
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

Typography.Title = Title;
Typography.Paragraph = Paragraph;

interface Props {
  children: React.ReactNode;
}

export default Typography;
