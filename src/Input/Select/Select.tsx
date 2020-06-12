import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { get, toLower } from 'lodash';

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
    onInputChange,
    noOptionResult = 'No results found',
    small,
    disableTyping,
    removeFloatingLabel,
    removeDropIcon,
    error,
    renderError,
    value,
    defaultValue,
    defaultOpen = false,
    children,
    isLoading,
    ...defaultProps
  } = props;

  // warn deprecated prop "status"
  React.useEffect(
    function warnDeprecatedProp() {
      if (status) {
        if (typeof console !== 'undefined') {
          console.warn(`Warning: Select's status prop is deprecated and will be
        removed in a future release.\n\nPlease use the error prop instead to
        show errors and indicate an error state.`);
        }
      }
    },
    [status]
  );

  const [floating, setFloating] = React.useState<boolean>(false);
  const [isFocus, setIsFocus] = React.useState<boolean>(defaultOpen);
  const [isInputChange, setIsInputChange] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>(
    value || defaultValue || ''
  );
  const [activeOptionIndex, setActiveOptionIndex] = React.useState<number>(0);
  const [
    shouldScrollToActiveOption,
    setShouldScrollToActiveOption,
  ] = React.useState<boolean>(false);

  const selectContainerRef: React.RefObject<HTMLDivElement> = React.useRef();
  const selectInputRef: React.RefObject<HTMLInputElement> = React.useRef();

  // set options based on children and inputValue
  const availableOptions = React.useMemo(() => {
    const childrenOptions = React.Children.toArray(children) as Array<
      React.ReactElement<SelectItemProps>
    >;
    if (!inputValue) {
      return childrenOptions;
    }

    if (inputValue && disableTyping) {
      return childrenOptions;
    }

    if (!isInputChange) {
      const isInputValueOneOfOptions = childrenOptions.some(
        data => data.props.children === inputValue
      );
      if (isInputValueOneOfOptions) {
        return childrenOptions;
      }
    }

    const matchedChildrenOptions = childrenOptions.filter(data =>
      toLower(data.props.children).includes(toLower(inputValue))
    );
    return matchedChildrenOptions;
  }, [children, inputValue, disableTyping, isInputChange]);

  const [options, setOptions] = React.useState<React.ReactNode[]>(
    availableOptions
  );

  React.useEffect(
    function updateOptions() {
      setOptions(availableOptions);
    },
    [availableOptions]
  );

  React.useEffect(function registerClickOutsideListener() {
    const onClickOutside = (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      if (
        selectContainerRef.current &&
        !ReactDOM.findDOMNode(selectContainerRef.current).contains(element)
      ) {
        setIsFocus(false);
      }
    };
    document.addEventListener('click', onClickOutside, false);
    return () => document.removeEventListener('click', onClickOutside, false);
  }, []);

  React.useEffect(
    function handleValueChange() {
      if (value) {
        setFloating(true);
        setInputValue(value as string);
        return;
      }
      if (value === '') {
        setInputValue(value);
        setFloating(false);
      }
    },
    [value]
  );

  const handleFocusOut = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setFloating(e.target.value.length > 0);
      setIsInputChange(false);
      if (typeof onBlur === 'function') {
        return onBlur(e);
      }
    },
    [onBlur]
  );

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(true);

      if (typeof onFocus === 'function') {
        return onFocus(e);
      }
    },
    [onFocus]
  );

  const handleClick = () => {
    setIsFocus(!isFocus);
  };

  const handleDropIconClick = () => {
    if (!disableTyping && !isFocus) {
      selectInputRef.current.focus();
    }
    setIsFocus(!isFocus);
  };

  // Should be called when the user types into the input
  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setActiveOptionIndex(0);
      setIsInputChange(true);

      if (
        typeof onChange === 'function' &&
        typeof onInputChange !== 'function'
      ) {
        onChange(e);
        if (typeof console !== 'undefined') {
          console.warn(`
            Warning: onChange will not be fired when input value changes in a future release,
            please use onInputChange instead. Now, if onChange is passed but onInputChange is not,
            the onChange callback will still receive the input change event for backward compatibility.
          `);
        }
      }

      if (typeof onInputChange === 'function') {
        onInputChange(e);
      }
    },
    [onChange, onInputChange]
  );

  const getActiveElement = React.useCallback(() => {
    return selectContainerRef.current.querySelector('.active') as HTMLLIElement;
  }, []);

  // Should be called when the user selects an option
  const handleClickOnOption = React.useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      const activeElement = e ? e.target : getActiveElement();
      const inputValue = activeElement.textContent;
      setInputValue(inputValue);
      setIsFocus(false);
      setFloating(true);
      setIsInputChange(false);
      if (typeof onChange === 'function') {
        onChange(activeElement.dataset.value);
      }

      const activeElementIndex = Number(get(activeElement, 'dataset.id'));
      const activeChild = options[activeElementIndex];
      const onOptionClick = get(activeChild, 'props.onOptionClick');
      if (typeof onOptionClick === 'function') {
        onOptionClick(e);
      }
    },
    [onChange, options, getActiveElement]
  );

  const scrollToActiveElement = React.useCallback(() => {
    const selectListElement = selectContainerRef.current.querySelector(
      '.select-listbox'
    ) as HTMLUListElement;
    selectListElement.scrollTop = getActiveElement().offsetTop;
  }, [getActiveElement]);

  // Should be called when any key is pressed inside the component
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disableTyping) {
        e.preventDefault();
      }

      const inputElement = e.target as HTMLInputElement;

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

  React.useEffect(
    function handleScrollToActiveElement() {
      if (shouldScrollToActiveOption) {
        scrollToActiveElement();
        setShouldScrollToActiveOption(false);
      }
    },
    [
      shouldScrollToActiveOption,
      setShouldScrollToActiveOption,
      scrollToActiveElement,
    ]
  );

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
      ref={selectContainerRef}
    >
      <SelectWrapper
        className="select-inputwrapper"
        isFocus={isFocus}
        small={small}
      >
        <SelectInput
          ref={selectInputRef}
          type="text"
          placeholder={removeFloatingLabel && label}
          role="combobox"
          aria-expanded={isFocus}
          aria-autocomplete="list"
          status={deprecatedStatus}
          disabled={disabled}
          onFocus={disableTyping ? null : handleFocus}
          onBlur={disableTyping ? null : handleFocusOut}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onClick={disableTyping ? handleClick : null}
          floating={floating}
          value={inputValue}
          small={small}
          disableTyping={disableTyping}
          readOnly={disableTyping}
          autoFocus={defaultOpen}
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
          <div
            className="select-icon"
            aria-label="show options"
            onClick={handleDropIconClick}
          >
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
  defaultOpen?: boolean;

  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  onChange?(value: any): void;
  onInputChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

type ISelect = React.FunctionComponent<Props> & {
  Option: React.FunctionComponent<SelectItemProps>;
};

export const Option: React.FunctionComponent<SelectItemProps> = () => null;
Option.displayName = 'Select.Option';

Select.Option = Option;

export default Select;
