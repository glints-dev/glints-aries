import React, { useCallback, useState } from 'react';
import { Select as BaseSelect } from 'react-functional-select';
import styled from 'styled-components';
import { ArrowDownIcon, ArrowUpIcon } from '../../General/Icon/components';

import { Greyscale } from '../../Utils/Colors';

const cities = [
  { id: 1, city: 'Austin', state: 'TX' },
  { id: 2, city: 'Denver', state: 'CO' },
  { id: 3, city: 'Chicago', state: 'IL' },
  { id: 4, city: 'Phoenix', state: 'AZ' },
  { id: 5, city: 'Houston', state: 'TX' },
];

const themeConfig = {
  color: {
    border: Greyscale.grey,
    placeholder: Greyscale.grey,
  },
  control: {
    borderWidth: '2px',
    borderRadius: '0',
  },
};

const Container = styled.div`
  .rfs-control-container {
    div:nth-child(2) {
      div:nth-child(1) {
        width: 0 !important;
      }
    }
  }
`;

export const SelectNext = () => {
  const [options] = useState(cities);
  const getOptionValue = useCallback(option => option.id, []);
  const onOptionChange = useCallback(console.log, []);
  const getOptionLabel = useCallback(
    option => `${option.city}, ${option.state}`,
    []
  );

  return (
    <Container>
      <BaseSelect
        options={options}
        onOptionChange={onOptionChange}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        themeConfig={themeConfig}
        addClassNames={true}
        caretIcon={({ menuOpen }) =>
          menuOpen ? <ArrowUpIcon /> : <ArrowDownIcon />
        }
      />
    </Container>
  );
};
