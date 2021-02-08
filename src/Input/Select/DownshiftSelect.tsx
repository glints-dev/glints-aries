import React from 'react';
import Downshift from 'downshift';
import * as S from './SelectStyle';

const Select = props => {
  const {
    children,
    small,
    label,
    error,
    inputValue,
    items,
    defaultOpen = false,
    ...restProps
  } = props;
  const [floating, setFloating] = React.useState<boolean>(Boolean(inputValue));
  const [isFocus, setIsFocus] = React.useState<boolean>(defaultOpen);

  const deprecatedStatus = status || (error && 'error');

  return (
    <Downshift
      itemToString={item => (item ? item.value : '')}
      isOpen={isFocus}
      onOuterClick={() => setIsFocus(false)}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => {
        const inputProps = getInputProps({
          onFocus: () => setIsFocus(true),
        });
        console.log('inputProps', inputProps);

        return (
          <S.SelectContainer>
            <S.SelectLabel
              {...getLabelProps()}
              aria-label={label}
              data-testid="select-label"
              floating={floating}
              status={deprecatedStatus}
              small={small}
              onClick={() => setIsFocus(true)}
            >
              {label}
            </S.SelectLabel>
            <div
              style={{ display: 'inline-block' }}
              {...getRootProps({}, { suppressRefError: true })}
            >
              <S.SelectInput {...inputProps} />
            </div>
            <S.SelectListWrapper {...getMenuProps()} open={isOpen}>
              {items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <S.SelectItemWrapper
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </S.SelectItemWrapper>
                ))}
            </S.SelectListWrapper>
          </S.SelectContainer>
        );
      }}
    </Downshift>
  );
};

export default Select;
