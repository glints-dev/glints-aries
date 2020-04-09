import * as React from 'react';

import classNames from 'classnames';

import { ArrowDownIcon } from '../../General/Icon/components';

import { escEvent } from '../../Utils/DomUtils';

import {
  DropdownContainer,
  DropdownWrapper,
  DropdownHeader,
  DropdownBody,
  DropdownItemWrapper,
  IconWrapper,
} from '../../Style/Navigation/DropdownStyle';

import DropdownItem, { Props as DropdownItemProps } from './DropdownItem';

class Dropdown extends React.Component<Props, State> {
  static Item = DropdownItem;

  static defaultProps = {
    showHoverLine: false,
    dropDownPlacement: 'left',
    noLineBreak: false,
    iconDefaultColor: 'black',
    showFullWidth: false,
  };

  dropdownBodyRef: React.RefObject<HTMLUListElement>;
  handleEscKeydown: (this: Document, ev: KeyboardEvent) => any;

  constructor(props: Props) {
    super(props);
    this.dropdownBodyRef = React.createRef();
    this.handleEscKeydown = escEvent(this.handleClose);
    this.state = {
      dropdownLabel: props.label,
      isOpen: false,
      cursor: 0,
    };
  }

  handleOpen = () => {
    const { disabled } = this.props;
    const { isOpen } = this.state;

    if (!disabled) {
      this.setState({
        isOpen: !isOpen,
      });
    }
  };

  hoverOpen = () => {
    const { hoverToOpen } = this.props;

    if (hoverToOpen) {
      this.setState({
        isOpen: true,
      });
    }
  };

  hoverClose = () => {
    const { hoverToOpen } = this.props;

    if (hoverToOpen) {
      this.setState({
        isOpen: false,
        cursor: 0,
      });
    }
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
      cursor: 0,
    });
  };

  handleClickItem = (
    onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  ) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { onChange } = this.props;
    const itemElement = e.target as HTMLLIElement;

    if (itemElement.dataset.value) {
      this.setState({
        dropdownLabel: itemElement.dataset.value,
        isOpen: false,
      });

      if (onChange !== undefined) {
        onChange(itemElement.dataset.value);
      }
    } else {
      this.setState({
        isOpen: false,
      });
    }

    if (onClick !== undefined) {
      onClick(e);
    }
  };

  handleMouseEnter = (index: number) => {
    this.setState({
      cursor: index,
    });
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const { children } = this.props;
    const { cursor } = this.state;

    // Up Arrow
    if (e.keyCode === 38 && cursor > 0) {
      this.setState({
        cursor: cursor - 1,
      });
    } else if (
      e.keyCode === 40 && // Down Arrow
      cursor < React.Children.count(children) - 1
    ) {
      this.setState({
        cursor: cursor + 1,
      });
    } else if (e.keyCode === 13) {
      // Enter
      this.setState({
        dropdownLabel: this.dropdownBodyRef.current.querySelector('.active')
          .innerHTML,
        isOpen: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKeydown, false);
  }

  render() {
    const {
      children,
      className,
      disabled,
      showHoverLine,
      leftIcon,
      dropDownPlacement,
      noLineBreak,
      itemElement,
      iconDefaultColor,
      showFullWidth,
      label, // eslint-disable-line @typescript-eslint/no-unused-vars
      hoverToOpen, // eslint-disable-line @typescript-eslint/no-unused-vars
      onChange, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...defaultProps
    } = this.props;

    const { isOpen, dropdownLabel, cursor } = this.state;

    const LeftIcon = leftIcon;

    return (
      <DropdownContainer
        className={classNames('aries-dropdown', className)}
        tabIndex={0}
        onClick={this.handleOpen}
        onMouseEnter={this.hoverOpen}
        onMouseLeave={this.hoverClose}
        onBlur={this.handleClose}
        onKeyDown={this.handleKeyDown}
        role="menuitem"
        aria-label={dropdownLabel}
        aria-haspopup="true"
        {...defaultProps}
      >
        <DropdownWrapper className="dropdown-contentwrapper" tabIndex={-1}>
          <DropdownHeader
            className="dropdown-content"
            isOpen={isOpen}
            disabled={disabled}
            showHoverLine={showHoverLine}
            showFullWidth={showFullWidth}
          >
            {LeftIcon && (
              <LeftIcon color={!disabled ? iconDefaultColor : '#777777'} />
            )}
            <span>{itemElement ? itemElement : dropdownLabel}</span>
            <IconWrapper isOpen={isOpen}>
              <ArrowDownIcon color={!disabled ? iconDefaultColor : '#777777'} />
            </IconWrapper>
          </DropdownHeader>
          <DropdownBody
            className="dropdown-listbox"
            role="listbox"
            aria-hidden={!isOpen && true}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            open={isOpen}
            dropDownPlacement={dropDownPlacement}
            noLineBreak={noLineBreak}
            showFullWidth={showFullWidth}
            showHoverLine={showHoverLine}
            ref={this.dropdownBodyRef}
          >
            {React.Children.map(
              children,
              (item: React.ReactElement<DropdownItemProps>, index) => {
                const dropDownItemClassName = item.props.className || '';
                return (
                  <DropdownItemWrapper
                    className={classNames(
                      { active: cursor === index },
                      `${dropDownItemClassName}`
                    )}
                    role="option"
                    data-value={item.props.value}
                    key={item.key}
                    onMouseDown={this.handleClickItem(item.props.onClick)}
                    onMouseEnter={() => this.handleMouseEnter(index)}
                    tabIndex={0}
                    showFullWidth={showFullWidth}
                  >
                    {item.props.children}
                  </DropdownItemWrapper>
                );
              }
            )}
          </DropdownBody>
        </DropdownWrapper>
      </DropdownContainer>
    );
  }
}

type PropsFromDropdownContainer = Omit<
  React.ComponentPropsWithoutRef<typeof DropdownContainer>,
  'onChange'
>;

type PropsFromDropdownHeader = Omit<
  React.ComponentPropsWithoutRef<typeof DropdownHeader>,
  'isOpen'
>;

type PropsFromDropdownBody = Omit<
  React.ComponentPropsWithoutRef<typeof DropdownBody>,
  'open'
>;

interface Props
  extends PropsFromDropdownContainer,
    PropsFromDropdownHeader,
    PropsFromDropdownBody {
  children: React.ReactNode;
  label: string;
  hoverToOpen?: boolean;
  leftIcon?: React.ReactType;
  itemElement?: React.ReactNode;
  iconDefaultColor?: string;
  onChange?(value: string): void;
}

interface State {
  isOpen: boolean;
  dropdownLabel: string;
  cursor: number;
}

export default Dropdown;
