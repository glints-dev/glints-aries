import * as React from 'react';
import classNames from 'classnames';
import { ArrowDownIcon } from '../../General/Icon/components';

import {
  CollapsibleContainer,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleBody,
} from '../../Style/Display/CollapsibleStyle';

class Collapsible extends React.Component<Props, State> {
  state = {
    isOpen: true,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  componentDidMount() {
    const { isOpen } = this.props;

    if (isOpen === false && isOpen !== undefined) {
      this.setState({
        isOpen,
      });
    }
  }

  render() {
    const { label, children, className, ...defaultProps } = this.props;

    const { isOpen } = this.state;

    return (
      <CollapsibleContainer
        className={classNames('aries-collapsible', className)}
        tabIndex={0}
        onClick={this.handleOpen}
        data-testid="collapsible-container"
        {...defaultProps}
      >
        <CollapsibleContent tabIndex={-1}>
          <CollapsibleHeader
            className="collapsible-title"
            role="tab"
            aria-expanded={isOpen}
            isOpen={isOpen}
          >
            {label}
            <ArrowDownIcon color="#000000" />
          </CollapsibleHeader>
          {isOpen && (
            <CollapsibleBody
              className="collapsible-content"
              data-testid="collapsible-content"
              onClick={e => e.stopPropagation()}
            >
              {children}
            </CollapsibleBody>
          )}
        </CollapsibleContent>
      </CollapsibleContainer>
    );
  }
}

interface Props
  extends React.ComponentPropsWithoutRef<typeof CollapsibleContainer> {
  label: React.ReactNode;
  isOpen?: boolean;
}

interface State {
  isOpen: boolean;
}

export default Collapsible;
