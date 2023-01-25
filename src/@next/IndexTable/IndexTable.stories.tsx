import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  IndexTable,
  IndexTableProps,
  useIndexResourceState,
} from './IndexTable';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Typography } from '..';
import 'polaris-glints/build/esm/styles.css';
import { Icon } from '../Icon';
import { PrimaryButton } from '../Button';
import {
  StyledButton,
  StyledButtonGroup,
} from './indexTableStoryHelper/ButtonGroupStyle';
import { Neutral } from '../utilities/colors';

(IndexTable as React.FunctionComponent<IndexTableProps>).displayName = 'Table';

export default {
  title: '@next/IndexTable',
  component: IndexTable,
  decorators: [
    Story => (
      <>
        <BaseContainer>{Story()}</BaseContainer>
        <div id="glints-portal-container"></div>
      </>
    ),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const candidates = [
  {
    id: '1',
    url: 'candidate/341',
    name: 'Dwi Nugraha Putri',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
  {
    id: '2',
    url: 'candidate/256',
    name: 'Ahmad Dani',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
    latestWorkExperience: 'Backend Engineer at Google',
    latestWorkDuration: 'Jan 2021 - Jan 2022',
  },
];
const resourceName = {
  singular: 'candidate',
  plural: 'candidates',
};

const Template: Story<IndexTableProps> = args => {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(candidates);

  // const handleSelectionChange = () => {
  //   console.log('handleSelection');
  // };

  console.log('handleSelectionChange stories', handleSelectionChange);

  const bulkActions = [
    {
      content: 'Reject',
      onAction: () => console.log('Reject'),
    },
    {
      content: 'Move to',
      onAction: () => console.log('Move to'),
    },
  ];

  const rowMarkup = candidates.map(
    (
      {
        id,
        name,
        location,
        expectedSalary,
        yearsExperience,
        latestWorkExperience,
        latestWorkDuration,
      },
      index
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
        onClick={() => console.log(`row clicked ${id}`)}
      >
        <IndexTable.Cell>
          <Icon name="ri-account-circle-fill" height={40} fill={Neutral.B40} />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Typography variant="body2">{name}</Typography>
          <Typography variant="body1">{location}</Typography>
        </IndexTable.Cell>
        <IndexTable.Cell>{expectedSalary}</IndexTable.Cell>
        <IndexTable.Cell>{yearsExperience}</IndexTable.Cell>
        <IndexTable.Cell>
          <Typography variant="body1">{latestWorkExperience}</Typography>
          <Typography variant="caption">{latestWorkDuration}</Typography>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <StyledButtonGroup>
            <StyledButton>Reject</StyledButton>
            <PrimaryButton>Shortlist</PrimaryButton>
          </StyledButtonGroup>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    <IndexTable
      {...args}
      resourceName={resourceName}
      itemCount={candidates.length}
      selectedItemsCount={
        allResourcesSelected ? 'All' : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      bulkActions={bulkActions}
      headings={[
        { title: '' },
        { title: 'Name & Location' },
        { title: 'Expected Salary' },
        { title: 'Years of Experience' },
        { title: 'Latest Work Experience' },
        { title: 'Actions' },
      ]}
      selectedLabel="selected candidates"
    >
      {rowMarkup}
    </IndexTable>
  );
};

export const Interactive = Template.bind({});
