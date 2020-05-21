import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { get } from 'lodash';

import classNames from 'classnames';

import SelectList, { SelectItemProps } from './SelectList';

import { ArrowDownIcon } from '../../General/Icon/components';
import {
  SelectContainer,
  SelectWrapper,
  SelectInput,
  SelectLabel,
  SelectErrorDefault,
} from '../../Style/Input/SelectStyle';

const Select: ISelect = (props: Props) => {
  const {
    label,
    status,
    disabled,
    className,
    onFocus,
    onBlur,
    onChange,
    noOptionResult = 'No results found',
    small,
    disableTyping,
    removeFloatingLabel,
    removeDropIcon,
    error,
    renderError,
    value, // eslint-disable-line @typescript-eslint/no-unused-vars
    children, // eslint-disable-line @typescript-eslint/no-unused-vars
    isLoading,
    ...defaultProps
  } = props;

  const [floating, setFloating] = React.useState<boolean>(false);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [options, setOptions] = React.useState<React.ReactNode[]>([]);
  const [activeOptionIndex, setActiveOptionIndex] = React.useState<number>(0);
  const [
    shouldScrollToActiveOption,
    setShouldScrollToActiveOption,
  ] = React.useState<boolean>(false);
  const [defaultValue, setDefaultValue] = React.useState<string>(
    props.defaultValue
  );

  const SelectContainerRef: React.RefObject<HTMLDivElement> = React.useRef();

  // handle click outside
  const onClickOutside = React.useCallback(
    (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      if (!ReactDOM.findDOMNode(SelectContainerRef.current).contains(element)) {
        setIsFocus(false);
      }
    },
    [setIsFocus]
  );
  React.useEffect(() => {
    document.addEventListener('click', onClickOutside, false);
    return () => document.removeEventListener('click', onClickOutside, false);
  }, [onClickOutside]);

  React.useLayoutEffect(() => {
    // Checking if children data is exist or not.
    if (React.Children.count(children) !== 0) {
      setOptions(React.Children.map(children, data => data));
    }

    if (value !== undefined && value !== '' && value !== null) {
      setFloating(true);
      setInputValue(value as string);
      setDefaultValue(value as string);
    }

    if (status) {
      if (typeof console !== 'undefined') {
        console.warn(`Warning: Select's status prop is deprecated and will be
        removed in a future release.\n\nPlease use the error prop instead to
        show errors and indicate an error state.`);
      }
    }
  }, [children, status, value]);

  React.useEffect(() => {
    if (value && value !== defaultValue) {
      setInputValue(value as string);
      setDefaultValue(value as string);
      setFloating(true);
    } else if (value === '') {
      setInputValue(value);
      setDefaultValue(value);
      setFloating(false);
    }
  }, [value, defaultValue]);

  const handleFocusOut = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFloating(e.target.value.length > 0);

      if (onBlur !== undefined) {
        return onBlur(e);
      }
    },
    [onBlur]
  );

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true);

      if (onFocus !== undefined) {
        return onFocus(e);
      }
    },
    [onFocus]
  );

  // Should be called when the user types into the input
  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const childrenArray = React.Children.toArray(children) as Array<
        React.ReactElement<SelectItemProps>
      >;

      setInputValue(e.target.value);
      setOptions(
        childrenArray.filter(data =>
          data.props.children
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
      setActiveOptionIndex(0);

      if (onChange !== undefined) {
        return onChange(e);
      }
    },
    [children, onChange]
  );

  const getActiveElement = React.useCallback(() => {
    return SelectContainerRef.current.querySelector('.active') as HTMLLIElement;
  }, []);

  // Should be called when the user selects an option
  const handleClickOnOption = React.useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      const activeElement = e ? e.target : getActiveElement();
      const inputValue = activeElement.textContent;
      setInputValue(inputValue);
      setOptions(React.Children.map(children, data => data));
      setIsFocus(false);
      setFloating(true);

      if (onChange !== undefined) {
        onChange(activeElement.getAttribute('data-value'));
      }

      const activeElementIndex = Number(get(activeElement, 'dataset.id'));
      const activeChild = options[activeElementIndex];
      const onOptionClick = get(activeChild, 'props.onOptionClick');
      if (onOptionClick !== undefined) {
        onOptionClick(e);
      }
    },
    [children, onChange, options, getActiveElement]
  );

  const scrollToActiveElement = React.useCallback(() => {
    const selectListElement = SelectContainerRef.current.querySelector(
      '.select-listbox'
    ) as HTMLUListElement;
    selectListElement.scrollTop = getActiveElement().offsetTop;
  }, [getActiveElement]);

  // Should be called when any key is pressed inside the component
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const inputElement = e.target as HTMLInputElement;

      if (disableTyping) {
        e.preventDefault();
      }

      // up arrow key
      if (e.keyCode === 38 && activeOptionIndex > 0) {
        setActiveOptionIndex(activeOptionIndex - 1);
        setShouldScrollToActiveOption(true);
      }
      // down arrow key
      else if (e.keyCode === 40 && activeOptionIndex < options.length - 1) {
        setActiveOptionIndex(activeOptionIndex + 1);
        setShouldScrollToActiveOption(true);
      }
      // enter key
      else if (e.keyCode === 13) {
        inputElement.blur();
        handleClickOnOption();
      }
      // escape key
      else if (e.keyCode === 27) {
        inputElement.blur();
        setIsFocus(false);
      }
    },
    [disableTyping, options, activeOptionIndex, handleClickOnOption]
  );

  React.useEffect(() => {
    if (shouldScrollToActiveOption) {
      scrollToActiveElement();
      setShouldScrollToActiveOption(false);
    }
  }, [
    shouldScrollToActiveOption,
    setShouldScrollToActiveOption,
    scrollToActiveElement,
  ]);

  const handleMouseEnterOption = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const listItemElement = e.target as HTMLLIElement;
      setActiveOptionIndex(Number(listItemElement.dataset.id));
    },
    []
  );

  const deprecatedStatus = status || (error && 'error');

  const shouldShowError = error && typeof error !== 'boolean';

  let completeError = null;
  if (shouldShowError) {
    if (renderError) {
      completeError = renderError(error);
    } else {
      completeError = (
        <SelectErrorDefault className="select-error-default">
          {error}
        </SelectErrorDefault>
      );
    }
  }

  return (
    <SelectContainer
      className={classNames('aries-select', className)}
      ref={SelectContainerRef}
    >
      <SelectWrapper
        className="select-inputwrapper"
        isFocus={isFocus}
        small={small}
      >
        <SelectInput
          type="text"
          placeholder={removeFloatingLabel && label}
          role="combobox"
          aria-expanded={isFocus}
          aria-autocomplete="list"
          status={deprecatedStatus}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleFocusOut}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          floating={floating}
          value={inputValue}
          small={small}
          disableTyping={disableTyping}
          readOnly={disableTyping}
          {...defaultProps}
        />
        {!removeFloatingLabel && (
          <SelectLabel
            aria-label={label}
            data-testid="select-label"
            floating={floating}
            status={deprecatedStatus}
            small={small}
          >
            {label}
          </SelectLabel>
        )}
        {!removeDropIcon && (
          <div className="select-icon" aria-label="show options">
            <ArrowDownIcon color="#777777" />
          </div>
        )}
      </SelectWrapper>
      <SelectList
        aria-label="select-list"
        activeOptionIndex={activeOptionIndex}
        options={options}
        isFocus={isFocus}
        isLoading={isLoading}
        noOptionResult={noOptionResult}
        small={small}
        handleClickOnOption={handleClickOnOption}
        handleMouseEnterOption={handleMouseEnterOption}
      />
      {completeError}
    </SelectContainer>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof SelectInput> {
  children: React.ReactNode;
  isLoading?: boolean;
  label?: string;
  noOptionResult?: string;
  removeDropIcon?: boolean;
  removeFloatingLabel?: boolean;
  error?: React.ReactNode | string | boolean;
  renderError?: (error: React.ReactNode | string | boolean) => React.ReactNode;
  defaultValue?: string;

  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  onChange?(value: any): void;
}

type ISelect = React.FunctionComponent<Props> & {
  Option: React.FunctionComponent<SelectItemProps>;
};

export const Option: React.FunctionComponent<SelectItemProps> = () => null;
Option.displayName = 'Select.Option';

Select.Option = Option;

export default Select;
