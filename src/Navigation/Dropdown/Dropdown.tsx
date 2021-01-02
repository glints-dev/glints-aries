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
} from './DropdownStyle';

import DropdownItem, { Props as DropdownItemProps } from './DropdownItem';

export const Dropdown = ({
  label,
  showHoverLine = false,
  dropDownPlacement = 'left',
  noLineBreak = false,
  iconDefaultColor = 'black',
  showFullWidth = false,
  disabled = false,
  hoverToOpen = false,
  onChange,
  children,
  leftIcon,
  className,
  itemElement,
  ...defaultProps
}: Props) => {
  const dropdownBodyRef = React.useRef<HTMLUListElement>(null);

  const [dropdownLabel, setDropdownLabel] = React.useState<string>(label);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [cursor, setCursor] = React.useState<number>(0);

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const hoverOpen = () => {
    if (hoverToOpen) {
      setIsOpen(true);
    }
  };

  const hoverClose = () => {
    if (hoverToOpen) {
      setIsOpen(false);
      setCursor(0);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setCursor(0);
  };

  const handleClickItem = (
    onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  ) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const itemElement = e.target as HTMLLIElement;

    if (itemElement.dataset.value) {
      setDropdownLabel(itemElement.innerHTML);
      setIsOpen(false);

      if (onChange !== undefined) {
        onChange(itemElement.dataset.value);
      }
    } else {
      setIsOpen(false);
    }

    if (onClick !== undefined) {
      onClick(e);
    }
  };

  const handleMouseEnter = setCursor;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Up Arrow
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (
      e.keyCode === 40 && // Down Arrow
      cursor < React.Children.count(children) - 1
    ) {
      setCursor(cursor + 1);
    } else if (e.keyCode === 13) {
      // Enter
      setDropdownLabel(
        dropdownBodyRef.current.querySelector('.active').innerHTML
      );
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    const handleEscKeydown = escEvent(handleClose);
    document.addEventListener('keydown', handleEscKeydown, false);
    return () => {
      document.removeEventListener('keydown', handleEscKeydown, false);
    };
  }, []);

  const LeftIcon = leftIcon;

  return (
    <DropdownContainer
      className={classNames('aries-dropdown', className)}
      tabIndex={0}
      onClick={handleOpen}
      onMouseEnter={hoverOpen}
      onMouseLeave={hoverClose}
      onBlur={handleClose}
      onKeyDown={handleKeyDown}
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
          iconDefaultColor={iconDefaultColor}
        >
          {LeftIcon}
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
          ref={dropdownBodyRef}
        >
          {React.Children.toArray(children)
            .filter(Boolean)
            .map((item: React.ReactElement<DropdownItemProps>, index) => {
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
                  onMouseDown={handleClickItem(item.props.onClick)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  tabIndex={0}
                  showFullWidth={showFullWidth}
                >
                  {item.props.children}
                </DropdownItemWrapper>
              );
            })}
        </DropdownBody>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

Dropdown.Item = DropdownItem;

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

export interface Props
  extends PropsFromDropdownContainer,
    PropsFromDropdownHeader,
    PropsFromDropdownBody {
  children: React.ReactNode;
  /** Sets label of Dropdown. */
  label: string;
  /** Opens Dropdown on hovering. */
  hoverToOpen?: boolean;
  /** Icon to show at the left side of dropdown button. */
  leftIcon?: React.ReactNode;
  /**	Dropdown label in component. */
  itemElement?: React.ReactNode;
  /** Dropdown icon color */
  iconDefaultColor?: string;
  /** To get value of Dropdown's item. */
  onChange?(value: string): void;
  /** Show underline when hovered. */
  showHoverLine?: boolean;
  /** Placement position for dropdown. */
  dropDownPlacement?: 'left' | 'right';
  /**	No break line in dropdown. */
  noLineBreak?: boolean;
  /**	Dropdown take full width. */
  showFullWidth?: boolean;
  /** Disabling the dropdown. */
  disabled?: boolean;
}

export default Dropdown;
