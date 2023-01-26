import React, { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PaginationProps } from './paginationUtils';
import { SimplePagination } from './SimplePagination';

(SimplePagination as React.FunctionComponent<PaginationProps>).displayName =
  'Pagination';

export default {
  title: '@next/SimplePagination',
  component: SimplePagination,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<PaginationProps> = args => {
  const [page, setPage] = useState(1);

  const { currentPage, ...rest } = args;
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  return (
    <SimplePagination {...rest} currentPage={page} onPageChanged={setPage} />
  );
};

export const Interactive = Template.bind({});
Interactive.args = { totalItems: 200, pageSize: 10 };
Interactive.parameters = {
  docs: {
    source: {
      code: `  const [currentPage, setCurrentPage] = useState(1);

      return (
        <SimplePagination
          {...args}
          currentPage={currentPage}
          onPageChanged={setCurrentPage}
        />
      );`,
      language: 'javascript',
      type: 'auto',
    },
  },
};
