import * as React from 'react';

import classNames from 'classnames';

import AutoCompleteItem from './AutoCompleteItem';

import {
  AutoCompleteContainer,
  AutoCompleteWrapper,
  AutoCompleteLabel,
  AutoCompleteInput,
  AutoCompleteListWrapper,
} from '../../Style/Input/AutoCompleteStyle';

class AutoComplete extends React.Component<Props, State> {
  static Option: React.FunctionComponent<AutoCompleteItemProps> = () => null;

  autoCompleteContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      floating: false,
      isOpen: false,
      selectedValue: '',
      filterValue: [],
      cursor: 0,
      defaultValue: '',
    };

    this.autoCompleteContainerRef = React.createRef();
  }

  handleFocus = (onFocus: (e: React.FocusEvent<HTMLInputElement>) => void) => {
    const listener = (e: React.FocusEvent<HTMLInputElement>) => {
      const { children } = this.props;
      const childrenArray = React.Children.toArray(children) as React.ReactElement<AutoCompleteItemProps>[];
      const inputValue = e.target.value;

      if (e.target.value !== '') {
        this.setState({
          filterValue: childrenArray.filter(data => data.props.children.toLowerCase().includes(inputValue.toLowerCase())),
        });
      }

      if (onFocus !== undefined) {
        return onFocus(e);
      }
    };

    return listener;
  }

  handleFocusOut = (onBlur: () => void) => {
    const listener = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({
        floating: e.target.value.length > 0,
        filterValue: [],
      });

      if (onBlur !== undefined) {
        return onBlur();
      }
    };

    return listener;
  }

  handleChange = (onChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
    const listener = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { children } = this.props;
      const childrenArray = React.Children.toArray(children) as React.ReactElement<AutoCompleteItemProps>[];

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
      const { onChange } = this.props;

      this.setState({
        selectedValue: (e.currentTarget.children[0] as HTMLElement).innerText,
        filterValue: [],
      });

      if (onChange !== undefined) {
        const containerElement = this.autoCompleteContainerRef.current;
        const activeItemElement = containerElement.querySelector('.active') as HTMLLIElement;
        const itemValue = activeItemElement.dataset.value;
        onChange(itemValue);
      }

      if (onOptionClick !== undefined) {
        onOptionClick(e);
      }
    };

    return listener;
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const { cursor, filterValue } = this.state;

    const inputElement = e.target as HTMLInputElement;

    if (e.keyCode === 38 && cursor > 0) {
      this.setState({
        cursor: cursor - 1,
      });
    } else if (e.keyCode === 40 && cursor < filterValue.length - 1) {
      this.setState({
        cursor: cursor + 1,
      });
    } else if (e.keyCode === 13) {
      const containerElement = this.autoCompleteContainerRef.current;
      const activeItemElement = containerElement.querySelector('.active') as HTMLLIElement;
      inputElement.blur();
      this.setState({
        selectedValue: (activeItemElement.children[0] as HTMLElement).innerText,
        filterValue: [],
        floating: true,
      });

      if (onChange !== undefined) {
        const itemValue = activeItemElement.dataset.value;
        onChange(itemValue);
      }
    } else if (e.keyCode === 27) {
      inputElement.blur();
      this.setState({ isOpen: false });
    }
  }

  handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const itemElement = e.target as HTMLLIElement;
    this.setState({
      cursor: Number(itemElement.dataset.id),
    });
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> {
    if (prevState.selectedValue === '' || prevState.filterValue.length === 0) {
      return {
        isOpen: false,
        filterValue: [],
      };
    }

    if (prevState.filterValue.length !== 0) {
      return { isOpen: true };
    }

    if (nextProps.value && nextProps.value !== prevState.defaultValue) {
      return {
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
      };
    }

    return null;
  }

  componentDidMount() {
    const { value } = this.props;

    if (value !== undefined && value !== '' && value !== null) {
      this.setState({
        floating: true,
        selectedValue: value,
        defaultValue: value,
      });
    }
  }

  render() {
    const {
      children,
      label,
      value,
      status,
      disabled,
      className,
      onFocus,
      onBlur,
      onChange,
      small,
      removeFloatingLabel,
      ...defaultProps
    } = this.props;

    const {
      isOpen,
      floating,
      cursor,
      selectedValue,
      filterValue,
    } = this.state;

    return (
      <AutoCompleteContainer
        className={classNames('aries-autocomplete', className)}
        ref={this.autoCompleteContainerRef}>
        <AutoCompleteWrapper className="autocomplete-inputwrapper">
          <AutoCompleteInput
            type="text"
            placeholder={removeFloatingLabel && label}
            status={status}
            disabled={disabled}
            onFocus={this.handleFocus(onFocus)}
            onBlur={this.handleFocusOut(onBlur)}
            onChange={this.handleChange(onChange)}
            onKeyDown={this.handleKeyDown}
            floating={floating}
            value={selectedValue}
            aria-label={label}
            small={small}
            {...defaultProps}
          />
          {!removeFloatingLabel &&
            <AutoCompleteLabel
              floating={floating}
              status={status}
              small={small}
            >
              {label}
            </AutoCompleteLabel>
          }
        </AutoCompleteWrapper>
        <AutoCompleteListWrapper
          className="autocomplete-listbox"
          role="listbox"
          aria-hidden={!isOpen && true}
          open={isOpen}
          small={small}
        >
          {filterValue.map((data, index) => (
            <AutoCompleteItem
              className={cursor === index ? 'active' : null}
              key={data.props.value}
              role="option"
              data-id={index}
              data-value={data.props.value}
              onClick={this.handleClick(data.props.onOptionClick)}
              onMouseEnter={this.handleMouseEnter}
              tabIndex={0}
            >
              <span className="autocomplete-value">{data.props.children}</span>
              <span className="autocomplete-additionalinfo">{data.props.additionalInfo}</span>
            </AutoCompleteItem>
          ))}
        </AutoCompleteListWrapper>
      </AutoCompleteContainer>
    );
  }
}

interface AutoCompleteItemProps {
  value: string;
  onOptionClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
  children: string;
  additionalInfo: React.ReactNode;
}

interface Props extends React.ComponentPropsWithoutRef<typeof AutoCompleteInput> {
  children: React.ReactNode;
  label: string;
  removeFloatingLabel?: boolean;
  value?: string;

  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(): void;
  onChange?(value: string | React.ChangeEvent): void;
}

interface State {
  isOpen: boolean;
  floating: boolean;
  cursor: number;
  defaultValue: string;
  selectedValue: string;
  filterValue: React.ReactElement<AutoCompleteItemProps>[];
}

export default AutoComplete;
