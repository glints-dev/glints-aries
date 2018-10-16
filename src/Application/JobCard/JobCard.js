/* @flow */

import React, { Component, Children } from 'react';

import { JobcardContainer, CustomLink } from '../../Style/Application/JobCardStyle';

class JobCard extends Component <Props> {
  static defaultProps = {
    target: '_self',
  }

  renderLinkChild = () => {
    const { children, targetUrl, ...defaultProps } = this.props;
    const linkChild = Children.map(children, (child) => {
      if (targetUrl && child.props.isLinkAble) {
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
      children,
      target,
      targetUrl,
      ...defaultProps
    } = this.props;
    return (
      <JobcardContainer {...defaultProps}>
        <Choose>
          <When condition={targetUrl}>
            <CustomLink to={targetUrl} target={target}>
              { this.renderLinkChild() }
            </CustomLink>
            { this.renderNonLinkChild() }
          </When>
          <Otherwise>
            { this.renderNonLinkChild() }
          </Otherwise>
        </Choose>
      </JobcardContainer>
    );
  }
}

type Props = {
  children: React$Node,
  targetUrl: String,
  target: String,
}

export default JobCard;
