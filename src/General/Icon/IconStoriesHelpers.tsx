import { sampleSize } from 'lodash-es';
import React, { useState, FC } from 'react';
import styled from 'styled-components';

import TextField from '../../Input/TextField';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Greyscale } from '../../Utils/Colors';
import * as AllIcons from './components';

const IconsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  align-items: flex-start;
`;

const IconsSample = styled.div<Props>`
  flex-basis: 220px;
  margin-right: 1em;
  margin-top: 1em;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${({ direction }) => direction === 'column' && 'align-items: center'}
`;

const IconName = styled.code<Props>`
  ${({ direction }) =>
    direction === 'row' ? 'margin-left: 8px;' : 'margin-top: 8px;'}
  font-size: 12px;
  color: ${Greyscale.grey};
`;

export const IconSampler: FC = () => {
  const icons = sampleSize(AllIcons, 4);
  return (
    <IconsList>
      {Object.values(icons)
        .filter(Icon => typeof Icon === 'function')
        .map(Icon => (
          <IconsSample key={Icon.name} direction="column">
            <Icon width="32px" height="32px" />
            <IconName direction="column">{Icon.name}</IconName>
          </IconsSample>
        ))}
    </IconsList>
  );
};

export const IconGallery: FC = () => {
  const [query, setQuery] = useState('');
  return (
    <BaseContainer>
      <TextField
        value={query}
        label="Filter Icons"
        onChange={(e: any) => setQuery(e.target.value)}
        small={true}
        tabindex={1}
      />
      <IconsList>
        {Object.values(AllIcons)
          .filter(Icon => typeof Icon === 'function')
          .filter(
            Icon =>
              query === '' ||
              Icon.name.toLowerCase().includes(query.toLowerCase())
          )
          .sort()
          .map(Icon => (
            <IconsSample key={Icon.name} direction="row">
              <Icon width="16px" height="16px" />
              <IconName direction="row">{Icon.name}</IconName>
            </IconsSample>
          ))}
      </IconsList>
    </BaseContainer>
  );
};

export interface Props {
  direction: 'row' | 'column';
}
