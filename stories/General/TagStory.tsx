import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';

import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';
import Tag from '../../src/General/Tag/Tag';
import { CloseIcon } from '../../src/General/Icon/components';

const TagContainer = styled.span`
  margin-right: 15px;
`;

const BasicTagStory = () => {
  const props = {
    'Basic Tag': [
      {
        name: 'block',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Tag into block style.',
      },
      {
        name: 'outline',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Tag into outline style.',
      },
    ],
  };
  return (
    <StorybookComponent
      title="Tag"
      code="import { Tag } from 'glints-aries'"
      propsObject={props}
      usage={`<Tag>Default</Tag>
<Tag block>Block</Tag>
<Tag outline>Outline</Tag>
<Tag block outline>Block and Outline</Tag>`}
    >
      <Heading>Basic Tag</Heading>
      <TagContainer>
        <Tag>Default</Tag>
      </TagContainer>
      <TagContainer>
        <Tag block>Block</Tag>
      </TagContainer>
      <TagContainer>
        <Tag outline>Outline</Tag>
      </TagContainer>
      <TagContainer>
        <Tag block outline>
          Block and Outline
        </Tag>
      </TagContainer>
    </StorybookComponent>
  );
};

const ButtonTagStory = () => {
  const props = {
    'Button Tag': [
      {
        name: 'variant',
        type: 'string',
        defaultValue: '-',
        possibleValue: '"button"',
        require: 'yes',
        description: "Sets the Tag's type.",
      },
      {
        name: 'icon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any',
        require: 'yes',
        description: 'Element placed after the children.',
      },
    ],
  };
  return (
    <StorybookComponent
      propsObject={props}
      usage={`<Tag variant="button" icon={<CloseIcon onClick={() => alert('Clicked!')} />}>Close</Tag>`}
    >
      <Heading>Button Tag</Heading>
      <TagContainer>
        <Tag
          variant="button"
          icon={<CloseIcon onClick={() => alert('Clicked!')} />}
        >
          Close
        </Tag>
      </TagContainer>
    </StorybookComponent>
  );
};

const ActionTagStory = () => {
  const props = {
    'Action Tag': [
      {
        name: 'variant',
        type: 'string',
        defaultValue: '-',
        possibleValue: '"action"',
        require: 'yes',
        description: "Sets the Tag's type.",
      },
      {
        name: 'action',
        type: 'string',
        defaultValue: '-',
        possibleValue: '"add" | "reset"',
        require: 'yes',
        description: "Sets the Action Tag's type.",
      },
    ],
  };
  return (
    <StorybookComponent
      propsObject={props}
      usage={`<Tag variant="action" action="add" onClick={() => alert('Clicked!')}>Add</Tag>
<Tag variant="action" action="reset" onClick={() => alert('Clicked!')}>Reset</Tag>`}
    >
      <Heading>Action Tag</Heading>
      <TagContainer>
        <Tag variant="action" action="add" onClick={() => alert('Clicked!')}>
          Add
        </Tag>
      </TagContainer>
      <TagContainer>
        <Tag variant="action" action="reset" onClick={() => alert('Clicked!')}>
          Reset
        </Tag>
      </TagContainer>
    </StorybookComponent>
  );
};

const TagStories = () => (
  <React.Fragment>
    <BasicTagStory />
    <Divider theme="grey" />
    <ButtonTagStory />
    <Divider theme="grey" />
    <ActionTagStory />
  </React.Fragment>
);

export default TagStories;
