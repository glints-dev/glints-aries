/* @flow */

import React, { Component, Children } from 'react';

import JobCardHeader from './JobCardHeader';
import JobCardBody from './JobCardBody';
import { JobCardContainer, CustomLink } from '../Style/JobCardStyle';

class JobCard extends Component <Props> {
  constructor() {
    super();
    this.headerName = Object.assign({}, <JobCardHeader />).type.name;
    this.bodyName = Object.assign({}, <JobCardBody />).type.name;
  }

  renderLinkChild = () => {
    const { children, defaultProps } = this.props;
    const linkChild = Children.map(children, (child) => {
      switch (child.type.name) {
        case this.headerName:
          return React.cloneElement(child, { ...defaultProps });
        case this.bodyName:
          return React.cloneElement(child, { ...defaultProps });
        default:
          return null;
      }
    });
    return linkChild;
  }

  renderNonLinkChild = () => {
    const { children } = this.props;
    const nonLinkChild = Children.map(children, (child) => {
      if (child.type.name !== this.headerName && child.type.name !== this.bodyName) {
        return child;
      }
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
