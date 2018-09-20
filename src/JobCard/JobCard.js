/* @flow */

import React, { Component, Children } from 'react';

import { JobCardContainer, CustomLink } from '../Style/JobCardStyle';

class JobCard extends Component <Props> {
  renderLinkChild = () => {
    const { children, defaultProps, url } = this.props;
    const linkChild = Children.map(children, (child) => {
      if (url && child.props.isLinkAble) {
        return React.cloneElement(child, { ...defaultProps });
      }
      return null;
    });
    return linkChild;
  }

  renderNonLinkChild = () => {
    const { children } = this.props;
    const nonLinkChild = Children.map(children, (child) => {
      if (!child.props.isLinkAble) {
        return child;
      }
      return null;
    });
    return nonLinkChild;
  }

  render() {
    const {
      children, url, target, onClick, ...defaultProps
    } = this.props;
    return (
      <JobCardContainer {...defaultProps}>
        <Choose>
          <When condition={url}>
            <CustomLink to={url} target={target}>
              { this.renderLinkChild() }
            </CustomLink>
            { this.renderNonLinkChild() }
          </When>
          <Otherwise>
            <div onClick={onClick}>
              { this.renderLinkChild() }
            </div>
            { this.renderNonLinkChild() }
          </Otherwise>
        </Choose>
      </JobCardContainer>
    );
  }
}

type Props = {
  children: React$Node,
}

JobCard.defaultProps = {
  target: '_blank',
  onClick: () => {},
};

export default JobCard;
