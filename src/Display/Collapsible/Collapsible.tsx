import * as React from 'react';
import Icon from '../../General/Icon';

import {
  CollapsibleContainer,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleBody,
} from '../../Style/Display/CollapsibleStyle';

class Collapsible extends React.Component<Props, State> {
  state = {
    isOpen: true,
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { isOpen } = this.state;
    if (isOpen !== nextState.isOpen) {
      // re-render
      return true;
    }

    // nothing changed. avoid unnecessary re-render
    return false;
  }

  componentDidMount() {
    const { isOpen } = this.props;

    if (isOpen === false && isOpen !== undefined) {
      this.setState({
        isOpen,
      });
    }
  }

  render() {
    const {
      label,
      children,
      className,
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <CollapsibleContainer
        id="aries-collapsible"
        className={className}
        tabIndex={0}
        onClick={this.handleOpen}
        {...defaultProps}
      >
        <CollapsibleContent tabIndex={-1}>
          <CollapsibleHeader
            id="collapsible-title"
            role="tab"
            aria-expanded={isOpen}
            isOpen={isOpen}
          >
            {label}
            <Icon name="arrow-down" color="#000000" />
          </CollapsibleHeader>
          {isOpen && (
            <CollapsibleBody
              id="collapsible-content"
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

interface Props extends React.ComponentPropsWithoutRef<typeof CollapsibleContainer> {
  label: string;
  isOpen?: boolean;
}

interface State {
  isOpen: boolean;
}

export default Collapsible;
