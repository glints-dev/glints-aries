import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchFilter from '.';

interface Props {
  label: string;
  onChange: jest.Mock;
  content: React.ReactNode;
}

const props: Props = {
  label: 'Search jobs, location, or company',
  onChange: jest.fn().mockImplementation(event => event.target.value),
  content: (
    <SearchFilter.Button variant="solid-blue">Search</SearchFilter.Button>
  ),
};
const lists = [
  { title: 'Popular Careers', item: 'Software Engineering' },
  { title: 'Popular Locations', item: 'Singapore' },
  { title: 'Popular Companies', item: 'Glints' },
];
const inputValue = 'glints';

function setupSearchFilter(props: Props) {
  const { getByPlaceholderText, getByRole, ...utils } = render(
    <SearchFilter
      label={props.label}
      onChange={props.onChange}
      content={props.content}
    >
      <SearchFilter.Body>
        {lists.map(list => (
          <SearchFilter.List title={list.title} key={list.title}>
            <SearchFilter.Item>{list.item}</SearchFilter.Item>
          </SearchFilter.List>
        ))}
      </SearchFilter.Body>
    </SearchFilter>
  );
  const searchFilterNode = getByRole('search') as HTMLDivElement;
  const searchFilterInput = getByPlaceholderText(
    props.label
  ) as HTMLInputElement;
  const searchFilterMenu = getByRole('menuitem', {
    hidden: true,
  }) as HTMLDivElement;
  return { searchFilterNode, searchFilterInput, searchFilterMenu, utils };
}

function setupSearchFilterWithChangeEvent(props: Props) {
  const { searchFilterInput } = setupSearchFilter(props);
  userEvent.type(searchFilterInput, inputValue);
  return { searchFilterInput };
}

function createNodeMock(element: any) {
  if (element.type === 'div') {
    return {
      contains: jest.fn(),
    };
  }
  return null;
}

it('<SearchFilter> should render with an input with a button, and a list with an item', () => {
  const options = { createNodeMock };
  const SearchFilterSnapshot = renderer
    .create(
      <SearchFilter
        label={props.label}
        onChange={props.onChange}
        content={props.content}
      >
        <SearchFilter.List title="Title">
          <SearchFilter.Item>Item</SearchFilter.Item>
        </SearchFilter.List>
      </SearchFilter>,
      options
    )
    .toJSON();
  expect(SearchFilterSnapshot).toMatchSnapshot();
});

describe('when it is rendered', () => {
  it('should display the correct placeholder', () => {
    const { searchFilterInput } = setupSearchFilter(props);
    expect(searchFilterInput).toBeTruthy();
  });

  it('should have an empty string as its value', () => {
    const { searchFilterInput } = setupSearchFilter(props);
    expect(searchFilterInput.value).toEqual('');
  });

  it('should not display the menu', () => {
    const { searchFilterMenu } = setupSearchFilter(props);
    expect(searchFilterMenu).not.toHaveAttribute('open');
  });

  it('should display the correct content prop', () => {
    const { searchFilterNode, utils } = setupSearchFilter(props);
    const searchFilterContent = utils.getByText('Search');
    expect(searchFilterNode).toContainElement(searchFilterContent);
  });

  lists.forEach(list => {
    it(`should display the correct list "${list.title}" and item "${list.item}"`, () => {
      const { utils } = setupSearchFilter(props);
      expect(utils.getByText(list.title)).toBeTruthy();
      expect(utils.getByText(list.item)).toBeTruthy();
    });
  });
});

describe('when it is focused', () => {
  it('should open menu', () => {
    const { searchFilterInput, searchFilterMenu } = setupSearchFilter(props);
    fireEvent.focus(searchFilterInput);
    expect(searchFilterMenu).toHaveAttribute('open');
  });

  it('should close when clicking outside the Search Filter', () => {
    const { searchFilterInput, searchFilterMenu, utils } = setupSearchFilter(
      props
    );
    fireEvent.focus(searchFilterInput);
    fireEvent.click(utils.container);
    expect(searchFilterMenu).not.toHaveAttribute('open');
  });

  lists.forEach(list => {
    it('should close when clicking on each list item', () => {
      const { searchFilterInput, searchFilterMenu, utils } = setupSearchFilter(
        props
      );
      const listItem = utils.getByText(list.item);
      fireEvent.focus(searchFilterInput);
      fireEvent.click(listItem);
      expect(searchFilterMenu).not.toHaveAttribute('open');
    });
  });
});

describe('when a value is entered', () => {
  it('should call onChange for each input', () => {
    setupSearchFilterWithChangeEvent(props);
    expect(props.onChange).toHaveBeenCalledTimes(inputValue.length);
  });

  it('should return the input value when onChange is passed a function: event => event.target.value', () => {
    setupSearchFilterWithChangeEvent(props);
    expect(props.onChange.mock.results.slice(-1)[0].value).toEqual(inputValue);
  });

  it('should display the correct value', () => {
    const { searchFilterInput } = setupSearchFilterWithChangeEvent(props);
    expect(searchFilterInput.value).toEqual(inputValue);
  });
});

describe('<SearchFilter> inputRef', () => {
  test('inputRef is being correctly passed to the underlying input element', () => {
    const label = 'test-inputRef';
    const inputRef = React.createRef<HTMLInputElement>();
    const { queryByPlaceholderText } = render(
      <SearchFilter label={label} inputRef={inputRef} />
    );
    expect(queryByPlaceholderText(label)).toEqual(inputRef.current);
  });

  test('inputRef can focus the underlying input element programmatically', () => {
    const label = 'test-inputRef';
    const inputRef = React.createRef<HTMLInputElement>();
    const { queryByPlaceholderText } = render(
      <SearchFilter label={label} inputRef={inputRef} />
    );
    inputRef.current.focus();
    expect(queryByPlaceholderText(label)).toHaveFocus();
  });
});
