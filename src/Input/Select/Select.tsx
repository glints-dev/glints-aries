import * as React from 'react';
import * as ReactDOM from 'react-dom';

import classNames from 'classnames';

import SelectItem from './SelectItem';

import Icon from '../../General/Icon';
import Loading from '../../General/Loading';

import {
  SelectContainer,
  SelectWrapper,
  SelectInput,
  SelectLabel,
  SelectListWrapper,
} from '../../Style/Input/SelectStyle';

class Select extends React.Component<Props, State> {
  static Option: React.FunctionComponent<SelectItemProps> = () => null;

  node: React.RefObject<HTMLDivElement>;

  state = {
    floating: false,
    isFocus: false,
    selectedValue: '',
    filterValue: [] as React.ReactNode[],
    cursor: 0,
    notMatch: false,
    childrenLength: 0,
    defaultValue: '',
    isLoading: false,
  }

  constructor(props: Props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    const { value, children } = this.props;

    // Checking if children data is exist or not.
    if (React.Children.count(children) !== 0) {
      this.setState({
        childrenLength: React.Children.count(children),
        filterValue: React.Children.map(children, data => data),
      });
    } else {
      this.setState({
        notMatch: true,
      });
    }

    if (value !== undefined && value !== '' && value !== null) {
      this.setState({
        floating: true,
        selectedValue: value as string,
        defaultValue: value as string,
      });
    }

    document.addEventListener('click', this.handleOnBlur, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOnBlur, false);
  }

  handleOnBlur = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (!ReactDOM.findDOMNode(this.node.current).contains(element)) {
      this.setState({
        isFocus: false,
      });
    }
  }

  handleFocusOut = (onBlur: (e: React.FocusEvent<HTMLInputElement>) => void) => {
    const listener = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({
        floating: e.target.value.length > 0,
      });

      if (onBlur !== undefined) {
        return onBlur(e);
      }
    };

    return listener;
  }

  handleFocus = (onFocus: (e: React.FocusEvent<HTMLInputElement>) => void) => {
    const listener = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({
        isFocus: true,
      });

      if (onFocus !== undefined) {
        return onFocus(e);
      }
    };

    return listener;
  }

  handleChange = (onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    const listener = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { children } = this.props;
      const childrenArray = React.Children.toArray(children) as Array<React.ReactElement<SelectItemProps>>;

      this.setState({
        selectedValue: e.target.value,
        filterValue: childrenArray.filter(data => data.props.children.toLowerCase().includes(e.target.value.toLowerCase())),
        cursor: 0,
      });

      if (onChange !== undefined) {
        return onChange(e);
      }
    };

    return listener;
  }

  handleClick = (onOptionClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void) => {
    const listener = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const { children, onChange } = this.props;
      this.setState({
        selectedValue: e.currentTarget.innerText,
        filterValue: React.Children.map(children, data => data),
        isFocus: false,
      });

      if (onChange !== undefined) {
        const element = e.target as HTMLElement;
        onChange(element.dataset.value);
      }

      if (onOptionClick !== undefined) {
        onOptionClick(e);
      }
    };

    return listener;
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { children, onChange, disableTyping } = this.props;
    const { cursor, filterValue } = this.state;
    const inputElement = e.target as HTMLInputElement;

    if (disableTyping) {
      e.preventDefault();
    }

    if (e.keyCode === 38 && cursor > 0) {
      this.setState({
        cursor: cursor - 1,
      });
    } else if (e.keyCode === 40 && cursor < filterValue.length - 1) {
      this.setState({
        cursor: cursor + 1,
      });
    } else if (e.keyCode === 13) {
      inputElement.blur();
      const activeElement = this.node.current.querySelector('.active') as HTMLLIElement;
      this.setState({
        selectedValue: activeElement.innerText,
        filterValue: React.Children.map(children, data => data),
        floating: true,
        isFocus: false,
      });
      if (onChange !== undefined) {
        const itemValue = activeElement.dataset.value;
        onChange(itemValue);
      }
    } else if (e.keyCode === 27) {
      inputElement.blur();
      this.setState({ isFocus: false });
    }
  }

  handleMouseEnter = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const listItemElement = e.target as HTMLLIElement;
    this.setState({
      cursor: Number(listItemElement.dataset.id),
    });
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (React.Children.count(nextProps.children) !== prevState.childrenLength) {
      if (nextProps.value) {
        return {
          selectedValue: nextProps.value,
          defaultValue: nextProps.value,
          floating: true,
          filterValue: React.Children.map(nextProps.children, data => data),
        };
      }

      return {
        filterValue: React.Children.map(nextProps.children, data => data),
        childrenLength: React.Children.count(nextProps.children),
      };
    }

    if (prevState.filterValue.length === 0) {
      return { notMatch: true };
    }

    if (nextProps.value && nextProps.value !== prevState.defaultValue) {
      return {
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
        floating: true,
      };
    }

    if (nextProps.value === '') {
      return {
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
        floating: false,
      };
    }

    if (nextProps.isLoading !== undefined) {
      return { isLoading: nextProps.isLoading };
    }

    return { notMatch: false };
  }

  render() {
    const {
      label,
      value,
      status,
      disabled,
      className,
      onFocus,
      onBlur,
      onChange,
      noOptionResult,
      children,
      small,
      disableTyping,
      removeFloatingLabel,
      removeDropIcon,
      ...defaultProps
    } = this.props;

    const {
      floating,
      isFocus,
      selectedValue,
      filterValue,
      cursor,
      notMatch,
      isLoading,
    } = this.state;

    return (
      <SelectContainer
        className={classNames('aries-select', className)}
        ref={this.node}
      >
        <SelectWrapper className="select-inputwrapper" isFocus={isFocus}>
          <SelectInput
            type="text"
            placeholder={removeFloatingLabel && label}
            role="combobox"
            aria-expanded={isFocus}
            aria-autocomplete="list"
            status={status}
            disabled={disabled}
            onFocus={this.handleFocus(onFocus)}
            onBlur={this.handleFocusOut(onBlur)}
            onChange={this.handleChange(onChange)}
            onKeyDown={this.handleKeyDown}
            floating={floating}
            value={selectedValue}
            small={small}
            disableTyping={disableTyping}
            {...defaultProps}
          />
          {!removeFloatingLabel &&
            <SelectLabel
              floating={floating}
              status={status}
              small={small}
            >
              {label}
            </SelectLabel>
          }
          {!removeDropIcon &&
            <div
              className="select-icon"
              aria-label="show options"
            >
              <Icon name="arrow-down" color="#777777" />
            </div>
          }
        </SelectWrapper>
        <SelectListWrapper
          className="select-listbox"
          role="listbox"
          aria-hidden={!isFocus && true}
          open={isFocus}
          small={small}
        >
          {(filterValue.length !== 0 && !isLoading)
            ? filterValue.map((data: React.ReactElement<SelectItemProps>, index) => (
                <SelectItem
                  className={cursor === index ? 'active' : null}
                  key={data.props.value}
                  role="option"
                  data-className={index}
                  data-value={data.props.value}
                  onClick={this.handleClick(data.props.onOptionClick)}
                  onMouseEnter={this.handleMouseEnter}
                  tabIndex={0}
                >
                  {data.props.children}
                </SelectItem>
              ))
            : !isLoading
              ? (
                  <SelectItem className="select-loading" role="option">
                    <Loading />
                  </SelectItem>
                )
              : (
                  <SelectItem
                    disabled
                    role="option"
                    aria-hidden={false}
                    aria-disabled="true"
                  >
                    {noOptionResult}
                  </SelectItem>
                )}
        </SelectListWrapper>
      </SelectContainer>
    );
  }
}

interface Props extends React.ComponentPropsWithoutRef<typeof SelectInput> {
  label?: string;
  noOptionResult?: string;
  children: React.ReactNode;
  removeFloatingLabel?: boolean;
  removeDropIcon?: boolean;
  isLoading?: boolean;

  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  onChange?(value: string | React.ChangeEvent<HTMLInputElement>): void;
}

interface State {
  floating: boolean;
  isFocus: boolean;
  selectedValue: string;
  filterValue: React.ReactNode[];
  defaultValue: string;
  cursor: number;
  notMatch: boolean;
  childrenLength: number;
  isLoading: boolean;
}

interface SelectItemProps {
  children: string;
  value?: string;
  onOptionClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}

export default Select;
