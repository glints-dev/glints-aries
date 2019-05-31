import * as React from 'react';

import { JobcardContainer, JobCardWrapper, CustomLink } from '../../Style/Application/JobCardStyle';

import JobCardHeader from './JobCardHeader';
import JobCardBody from './JobCardBody';
import JobCardDetail from './JobCardDetail';
import JobCardDescription from './JobCardDescription';
import JobCardFooter from './JobCardFooter';

class JobCard extends React.Component<Props> {

  static Header = JobCardHeader;
  static Body = JobCardBody;
  static Detail = JobCardDetail;
  static Description = JobCardDescription;
  static Footer = JobCardFooter;

  renderLinkChild = () => {
    const { children, targetUrl, ...defaultProps } = this.props;
    const linkChild = React.Children.map(children, (child: React.ReactElement<ChildProps>) => {
      if (targetUrl && child.props.isLinkAble) {
        return React.cloneElement(child, { ...defaultProps });
      }
      return null;
    });
    return linkChild;
  }

  renderNonLinkChild = () => {
    const { children } = this.props;
    const nonLinkChild = React.Children.map(children, (child: React.ReactElement<ChildProps>) => {
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
      className,
      target,
      targetUrl,
      ...defaultProps
    } = this.props;
    return (
      <JobcardContainer className="aries-jobcard">
        <JobCardWrapper
          className={className}
          role="presentation"
          aria-label="Job Card"
          tabIndex={0}
          {...defaultProps}
        >
          {targetUrl
            ? (
              <React.Fragment>
                <CustomLink to={targetUrl} target={target}>
                  { this.renderLinkChild() }
                </CustomLink>
                { this.renderNonLinkChild() }
              </React.Fragment>
              )
            : this.renderNonLinkChild()}
        </JobCardWrapper>
      </JobcardContainer>
    );
  }
}

interface ChildProps {
  isLinkAble: boolean;
  className: string;
  target: string;
}

interface Props extends React.ComponentPropsWithoutRef<typeof JobCardWrapper> {
  children: React.ReactNode;
  targetUrl: string;
  target?: string;
}

export default JobCard;
