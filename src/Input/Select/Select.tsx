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
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>(
    value || defaultValue || ''
  );
  const [activeOptionIndex, setActiveOptionIndex] = React.useState<number>(0);
  const [
    shouldScrollToActiveOption,
    setShouldScrollToActiveOption,
  ] = React.useState<boolean>(false);

  const SelectContainerRef: React.RefObject<HTMLDivElement> = React.useRef();

  // set options based on children and inputValue
  const getAvailableOptions = React.useCallback(() => {
    const childrenOptions = React.Children.toArray(children) as Array<
      React.ReactElement<SelectItemProps>
    >;
    if (!inputValue) {
      return childrenOptions;
    }

    const isInputValueOneOfOptions = childrenOptions.find(
      data => data.props.children === inputValue
    );
    if (isInputValueOneOfOptions) {
      return childrenOptions;
    }

    const matchedChildrenOptions = childrenOptions.filter(data =>
      data.props.children.toLowerCase().includes(inputValue.toLowerCase())
    );
    return matchedChildrenOptions;
  }, [children, inputValue]);

  const [options, setOptions] = React.useState<React.ReactNode[]>(
    getAvailableOptions()
  );

  React.useEffect(
    function updateOptions() {
      const availableOptions = getAvailableOptions();
      setOptions(availableOptions);
    },
    [getAvailableOptions]
  );

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

  React.useEffect(
    function registerClickOutsideListener() {
      document.addEventListener('click', onClickOutside, false);
      return () => document.removeEventListener('click', onClickOutside, false);
    },
    [onClickOutside]
  );

  // set inputValue
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

  // Should be called when the user types into the input
  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setActiveOptionIndex(0);

      if (typeof onChange === 'function') {
        onChange(e);
      }

      if (typeof onInputChange === 'function') {
        onInputChange(e);
      }
    },
    [onChange, onInputChange]
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
      setIsFocus(false);
      setFloating(true);

      if (typeof onChange === 'function') {
        onChange(activeElement.getAttribute('data-value'));
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
  onInputChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

type ISelect = React.FunctionComponent<Props> & {
  Option: React.FunctionComponent<SelectItemProps>;
};

export const Option: React.FunctionComponent<SelectItemProps> = () => null;
Option.displayName = 'Select.Option';

Select.Option = Option;

export default Select;
