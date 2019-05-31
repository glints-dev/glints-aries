import * as React from 'react';

import classNames from 'classnames';

import Icon from '../../General/Icon';

import { BlockquoteContainer } from '../../Style/Display/BlockquoteStyle';
import { PrimaryColor } from '../../Style/Colors';

import BlockquoteProfile from './BlockquoteProfile';
import BlockquoteContent from './BlockquoteContent';
import BlockquoteTestimony from './BlockquoteTestimony';
import BlockquoteAuthor from './BlockquoteAuthor';
import BlockquoteOrigin from './BlockquoteOrigin';

class Blockquote extends React.Component<Props, State> {
  static Profile = BlockquoteProfile;
  static Content = BlockquoteContent;
  static Testimony = BlockquoteTestimony;
  static Author = BlockquoteAuthor;
  static Origin = BlockquoteOrigin;

  state = {
    isHover: false,
  }

  render() {
    const {
      children,
      className,
    } = this.props;

    const { isHover } = this.state;

    return (
      <BlockquoteContainer
        className={classNames('aries-blockquote', className)}
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
      >
        <Icon name="quotation" color={isHover ? PrimaryColor.glintsred : PrimaryColor.glintsblue} />
        {children}
      </BlockquoteContainer>
    );
  }
}

interface Props {
  children: React.ReactNode;
  className?: string;
}

interface State {
  isHover: boolean;
}

export default Blockquote;
