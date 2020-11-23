import * as React from 'react';
import * as ReactDOM from 'react-dom';
import get from 'lodash/get';
import toLower from 'lodash/toLower';
import classNames from 'classnames';

import SelectList, { SelectItemProps } from './SelectList';

import { ArrowDownIcon } from '../../General/Icon/components';
import {
  SelectContainer,
  SelectWrapper,
  SelectInput,
  SelectLabel,
  SelectErrorDefault,
} from './SelectStyle';

import { canWarn } from '../../Utils/canWarn';

const defaultFilterFunction = (option: string, search: string) =>
  toLower(option).includes(toLower(search));

const Select: React.FC<Props> & {
  Option: React.FC<SelectItemProps>;
} = props => {
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
    filterFunction = defaultFilterFunction,
    ...defaultProps
  } = props;

  // warn deprecated prop "status"
  React.useEffect(
    function warnDeprecatedProp() {
      if (status) {
        if (canWarn) {
          console.warn(`Warning: Select's status prop is deprecated and will be
        removed in a future release.\n\nPlease use the error prop instead to
        show errors and indicate an error state.`);
        }
      }
    },
    [status]
  );

  // warn non-string type value, defaultValue
  React.useEffect(
    function warnNonStringValueAndDefaultValue() {
      const shouldWarnValue =
        typeof value !== 'undefined' && typeof value !== 'string';
      const shouldWarnDefaultValue =
        typeof defaultValue !== 'undefined' && typeof defaultValue !== 'string';
      if (shouldWarnValue || shouldWarnDefaultValue) {
        if (canWarn) {
          console.warn(
            `Warning: glints-aries Select's value and defaultValue props can only be type of string.`
          );
        }
      }
    },
    [value, defaultValue]
  );

  const [inputValue, setInputValue] = React.useState<string>(() => {
    const initialInputValue = value || defaultValue || '';
    return String(initialInputValue);
  });
  const [floating, setFloating] = React.useState<boolean>(Boolean(inputValue));
  const [isFocus, setIsFocus] = React.useState<boolean>(defaultOpen);
  const [isInputChange, setIsInputChange] = React.useState<boolean>(false);
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
      // to check whether an option is selected by clicking an option
      // if so, we render all the options in the dropdown
      const isInputValueOneOfOptions = childrenOptions.some(
        data => String(data.props.children) === inputValue
      );
      if (isInputValueOneOfOptions) {
        return childrenOptions;
      }
    }

    const matchedChildrenOptions = childrenOptions.filter(data =>
      filterFunction(data.props.children, inputValue)
    );
    return matchedChildrenOptions;
  }, [children, inputValue, disableTyping, isInputChange, filterFunction]);

  const [options, setOptions] = React.useState<React.ReactNode[]>(
    availableOptions
  );

  React.useEffect(
    function updateOptionsAndActiveIndex() {
      setOptions(availableOptions);

      if (!isFocus) {
        const selectedOptionIndex = availableOptions.findIndex(option =>
          toLower(option.props.children).includes(toLower(inputValue))
        );
        if (activeOptionIndex !== selectedOptionIndex) {
          setActiveOptionIndex(selectedOptionIndex);
        }
      }
    },
    [activeOptionIndex, availableOptions, inputValue, isFocus]
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
        setInputValue(String(value));
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
    if (!isFocus) {
      selectInputRef.current.focus();
    } else {
      selectInputRef.current.blur();
    }
    setIsFocus(!isFocus);
  };

  const handleDropIconClick = () => {
    if (!isFocus) {
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

      if (typeof onInputChange === 'function') {
        onInputChange(e);
      }
    },
    [onInputChange]
  );

  const getActiveElement = React.useCallback(() => {
    return selectContainerRef.current.querySelector('.active') as HTMLLIElement;
  }, []);

  // Should be called when the user selects an option
  const handleClickOnOption = React.useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      const activeElement = e ? e.target : getActiveElement();
      if (!activeElement) return; // This is the case for the 'no results' option
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
          onBlur={handleFocusOut}
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
            onClick={disabled ? null : handleDropIconClick}
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

export interface SelectInputProps {
  /** Disable typing on Select input, so the option can't be searched. */
  disableTyping?: boolean;
  /** Sets Select to be smaller. */
  small?: boolean;
  /** Deprecated! */
  status?: string;
}

export interface Props
  extends React.ComponentPropsWithoutRef<typeof SelectInput>,
    SelectInputProps {
  children: React.ReactNode;
  /** Sets value for Input. */
  value?: string;
  /** Sets default value for Input. */
  defaultValue?: string;
  /** Disable the Text Field. */
  disabled?: boolean;
  /** To disable browser auto complete, pass "nope" or anything other than "off". */
  autoComplete?: string;
  /** Shows loading spinner in menu. */
  isLoading?: boolean;
  /** Sets placeholder value for the Text Field. */
  label?: string;
  /** Sets message to display when no option matches. */
  noOptionResult?: string;
  /** Removes drop icon. */
  removeDropIcon?: boolean;
  /** Removes floating effect for placeholder. */
  removeFloatingLabel?: boolean;
  /** Pass true to display error state without error message */
  error?: React.ReactNode | string | boolean;
  /** Deprecated! */
  renderError?: (error: React.ReactNode | string | boolean) => React.ReactNode;
  /** Sets initial open state of Select. */
  defaultOpen?: boolean;
  /** A custom function to filter options by when typing into Select. By default, it filters options by input with case insensitive. However, if the input value is case sensitive same as one of options, then filterFunction will be ignored.  */
  filterFunction?: (option: string, search: string) => boolean;
  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
  /** Called when select an option or value of input is changed. WARNING: firing on value of input is changed will be deprecated, please use onInputChange instead */
  onChange?(value: string): void;
  /** Called when value of input is changed. */
  onInputChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Option: React.FC<SelectItemProps> = () => null;
Option.displayName = 'Select.Option';

Select.Option = Option;

export default Select;
