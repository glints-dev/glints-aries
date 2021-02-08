import React from 'react';
// import { Option } from 'rc-select';

import * as S from './RcSelectStyle';

const dropdownStyle = {
  top: '250px',
  border: '1px solid #333',
};

const dropdownMenuStyle = {
  height: '53px',
};

const Select = props => {
  const { children, small, label, error, inputValue, ...restProps } = props;
  const [floating, setFloating] = React.useState<boolean>(Boolean(inputValue));

  const deprecatedStatus = status || (error && 'error');

  return (
    <S.SelectContainer>
      <S.SelectLabel
        aria-label={label}
        data-testid="select-label"
        floating={floating}
        status={deprecatedStatus}
        small={small}
      >
        {label}
      </S.SelectLabel>
      <S.CustomizedSelect
        {...restProps}
        small={small}
        dropdownStyle={dropdownStyle}
        dropdownMenuStyle={dropdownMenuStyle}
        onFocus={() => setFloating(true)}
        onBlur={() => setFloating(false)}
        showSearch={false}
      >
        {children}
      </S.CustomizedSelect>{' '}
    </S.SelectContainer>
  );
};

Select.Option = S.CustomizedOption;

export default Select;
